--- 

title: Making yarn and husky hooks work with windows
layout: post
tags : [node, yarn, husky]
---

Recently I was trying to get husky using yarn to work on widnows. While I could directly run the commands for the git hooks from the cli, they would fail when husky would try to run them. Here is an example of the console output

```
λ git cm "test
/usr/bin/bash: C:Usersjbaird.ZB17-JMYrepos3.0node_modules.binhusky-run: command not found
Can't find Husky, skipping pre-commit hook
You can reinstall it using 'npm install husky --save-dev' or delete this hook
/usr/bin/bash: C:Usersjbaird.ZB17-JMYrepos3.0node_modules.binhusky-run: command not found
Can't find Husky, skipping prepare-commit-msg hook
You can reinstall it using 'npm install husky --save-dev' or delete this hook
```

I started doing some digging and found that when husky would try to run these commands it would strip out the `\` slash in the path. Here are the two helpful github issues I found.

* https://github.com/typicode/husky/issues/749
* https://github.com/typicode/husky/issues/720


> I am closing this issue because this isn't an issue of husky's code. I've already notified Yarn team about it: yarnpkg/yarn#8340
Until they fix this, you can use do this if you are facing the same issue:
Create fix-husky.js file in project's root with following content:
```
const fs = require('fs');

// If Operating System is Windows, fix Husky for Yarn
if (process.platform === 'win32') {
  const huskyScript = fs.readFileSync('.git/hooks/husky.sh', {
    encoding: 'utf-8',
  });
  const fixedHuskyScript = huskyScript.replace(
    'run_command yarn run --silent;;',
    'run_command npx --no-install;;'
  );
  fs.writeFileSync('.git/hooks/husky.sh', fixedHuskyScript);
}

``
> Run it once after installing husky with node fix-husky.js (you can even save it as package.json script).

> https://github.com/typicode/husky/issues/749#issuecomment-691531840

This fixes the issue `node_modules.binhusky-run: command not found` But any commands listed in the `lint-staged` section in `package.json` would fail. 

I needed to change this

```
  "lint-staged": {
    "relative": true,
    "linters": {
      "*.css": [
        "yarn run stylelint",
        "git add"
      ],
      "*.{js,ts}": [
        "yarn run eslint",
        "git add"
      ]
    }
  }
```

**to**

```
  "lint-staged": {
    "relative": true,
    "linters": {
      "*.css": [
        "npx --no-install  ./node_modules/stylelint/bin/stylelint.js",
        "git add"
      ],
      "*.{js,ts}": [
        "npx --no-install ./node_modules/eslint/bin/eslint.js",
        "git add"
      ]
    }
  }
```

Notice, that the commands are now using `npx --no-install` to run them. This gets around main issue of the path separators getting stripped out. 
