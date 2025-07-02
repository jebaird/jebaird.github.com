
## Supercharge Your Git Workflow: A Guided Tour of My Favorite Aliases

If you're a developer, you probably spend a significant amount of time in your terminal typing `git` commands. `git status`, `git add .`, `git commit -m "..."`, `git push`. Over and over. While these commands are powerful, they can also be verbose and repetitive.

What if you could replace `git checkout -b new-feature-branch` with just `git cob new-feature-branch`? You can, and it's incredibly easy to set up using Git's built-in alias system.

Today, I'm going to walk you through my personal `.gitconfig` file. We'll break down the aliases I use every day to speed up my workflow, reduce typos, and make working with Git a more pleasant experience. Feel free to steal these for yourself or use them as inspiration to create your own.

## What is a Git Alias?

A Git alias is simply a shortcut you define for a longer Git command. You store these in your Git configuration file. Once an alias is set, you can use it just like any other Git command.

For example, instead of typing `git status`, you can create an alias `st` and simply run:

```bash
git st
```

It's a small change, but the saved keystrokes and mental energy add up fast.

### Let's Dive Into the Config

Here are my favorite aliases, broken down by how I use them.

#### The "Meta" Alias: How Do I See All My Aliases?

First things first, how do you remember all the cool shortcuts you've created? With an alias, of course!

```ini
[alias]
    ###### help
    alias = config --get-regexp alias
```

This is the first alias I recommend to anyone. Running `git alias` will now neatly list every alias you have configured. It's the perfect way to get a quick refresher.

#### The Core Workflow

These are the commands I use dozens of times a day. They are short, sweet, and save me the most time.

```ini
[alias]
    ###### workflow
    st = status
    cm = commit -m
    cma = commit --amend -m
```

*   `git st`: The classic `git status`. Probably the most-used command in my arsenal.
*   `git cm "Your message"`: My shortcut for `git commit -m`. I can quickly commit a change without the extra typing.
*   `git cma "New message"`: Ever commit something and immediately spot a typo in the message? `git cma` lets me amend the last commit's message instantly.

#### Effortless Branching and Checking Out

Jumping between branches is a constant activity. These aliases make it seamless.

```ini
[alias]
    co = checkout
    # checkout and create branch
    cob = checkout -b
    # selectively revert chucks 
    cop = checkout -p
    # force checkout 
    cof = checkout -f
```

*   `git co <branch-name>`: A simple, shorter way to write `git checkout`.
*   `git cob <new-branch-name>`: As the comment says, this is my go-to for creating and switching to a new branch in one step.
*   `git cop <file-name>`: This one is incredibly powerful. `checkout -p` allows you to interactively discard specific chunks of code from a file, rather than reverting the entire file to its last-committed state. It's a lifesaver when you've made a few unrelated changes in one file and only want to undo some of them.
*   `git cof <file-name>`: The "force" checkout. This is for when I've made changes to a file and I want to discard them completely, no questions asked.

#### Keeping in Sync

Pushing, pulling, and fetching are the bread and butter of collaborating.

```ini
[alias]
    ph = push
    pl = pull
    # pull the origin of the current branch
    plc = !CURRENT=$(git current) && git pl origin $CURRENT
    fo = fetch origin

    ### get current branch (helper for the alias above)
    current = rev-parse --abbrev-ref HEAD
```

*   `git ph` & `git pl`: Simple shortcuts for `push` and `pull`.
*   `git fo`: Fetches all the latest changes from the `origin` remote without trying to merge them. This is great for seeing what's new before you decide to pull.
*   `git plc`: This is a more advanced alias and one of my favorites. It automatically pulls the latest changes for the branch I'm currently on. It works by chaining two commands:
    1.  `!CURRENT=$(git current)`: The `!` tells Git to run a shell command. Here, it first runs my `git current` alias to get the current branch name and stores it in a variable called `CURRENT`.
    2.  `&& git pl origin $CURRENT`: Then, it runs `git pull origin` using the branch name we just saved.

#### Mastering the Stash

The `git stash` command is great for saving work-in-progress, but the default stashes are anonymous and hard to track. These aliases fix that.

```ini
[alias]
    ##### stash
    # http://stackoverflow.com/questions/11269256/how-to-name-a-stash-in-git
    # allows naming of stashes
    ## git stash save "guacamole sauce WIP"
    ## it stash apply stash^{/guacamo}
    stashs = stash save
    stasha = stash apply stash
```

*   `git stashs "A descriptive name"`: This is an alias for `git stash save`, which lets you add a message to your stash. Instead of seeing `stash@{0}: WIP on main...`, you'll see `stash@{0}: On main: A descriptive name`. This is a game-changer when you have multiple stashes.
*   `git stasha^{/descriptive}`: The `stasha` alias for `stash apply` is a good shortcut, but the real magic is in the pattern matching. You can apply a stash by searching for part of its name! For example, `git stasha^{/API}` would apply the most recent stash that has "API" in its description.

#### The "Oops!" and Utility Belt

Here’s a collection of powerful utilities for resetting changes, cleaning your directory, and inspecting history.

```ini
[alias]
    # reset last commit
    resetlast = reset --soft HEAD~1
    rh = reset HEAD
    rhh = reset HEAD --hard

    # alt to git clean -dfx - https://jesse.sh/undo-git-clean/
    clear = stash --keep-index --include-untracked

    # log
    logpretty = log --oneline --all --graph --decorate  $*

    #revert
    revertmerge = revert -m 1 
```
Here is a quick overview of my `.gitconfig`

*   `git resetlast`: My "undo last commit" button. It removes the last commit but keeps all the changes staged, so I can fix them and re-commit.
*   `git rh` & `git rhh`: Shortcuts for `reset`. `rh` unstages files, while `rhh` is the dangerous-but-useful command to completely discard all local changes.
*   `git clear`: A safer alternative to `git clean -dfx`. Instead of permanently deleting all untracked files and directories, this command stashes them. If you realize you deleted something important, you can get it back from the stash!
*   `git logpretty`: This gives a beautiful, compact, graphical view of your entire commit history. It's the best way to visualize your branches.
*   `git revertmerge <commit-hash>`: Reverting a merge commit can be tricky. This alias defaults to reverting the merge by keeping the "mainline" parent (`-m 1`), which is what you want to do most of the time.


My full `.gitconfig`


```
[user]
    name = Jesse Baird
    email = jebaird@gmail.com
[merge]
    tool = kdiff3
[mergetool "kdiff3"]
    cmd = \"C:\\\\Program Files\\\\KDiff3\\\\kdiff3\" $BASE $LOCAL $REMOTE -o $MERGED
    
[diff]
    tool = winmerge
[difftool "winmerge"]
    cmd = \"C:\\\\Program Files (x86)\\\\WinMerge\\\\WinMergeU\" $BASE $LOCAL

[push]
    default = current
[help]
    autocorrect = 5
[color]
    diff = auto
    status = auto
    branch = auto
    ui = true
[alias]

    ###### help
    alias = config  --get-regexp alias

        ### get current branch
    current = rev-parse --abbrev-ref HEAD

    ###### workflow
    st = status
    
    cm = commit -m
    cma = commit --amend -m
    
    
    co = checkout
    # checkout and create branch
    cob = checkout -b
    # selectively revert chucks 
    cop = checkout -p
    # force checkout 
    cof = checkout -f


    ##### stash
    # http://stackoverflow.com/questions/11269256/how-to-name-a-stash-in-git
    # allows naming of stashes
    ## git stash save "guacamole sauce WIP"
    ## it stash apply stash^{/guacamo}
    stashs = stash save
    stasha = stash apply stash


    df = diff
    
    ph = push
    pl = pull

    # pull the origin of the current branch
    plc = !CURRENT=$(git current) && git pl origin $CURRENT

    fo = fetch origin
    
    ##### utils 
    submodup =  submodule update --recursive --init
    originurl = config --get remote.origin.url
    
    # merging 
    mergefh = merge FETCH_HEAD


    # reset last commit
    resetlast = reset --soft HEAD~1

    #git blame http://jfire.io/blog/2012/03/07/code-archaeology-with-git/
    uiblame = gui blame
    rh = reset HEAD
    rhh = reset HEAD --hard

    # alt to git clean -dfx - https://jesse.sh/undo-git-clean/
    clear = stash --keep-index --include-untracked

    # log
    logpretty = log --oneline --all --graph --decorate  $*

    #revert
    revertmerge = revert -m 1 

    

[gui]
	fontdiff = -family Consolas -size 9 -weight normal -slant roman -underline 0 -overstrike 0
	tabsize = 4
	
[core]
	autocrlf = input
	symlinks = true
	eol = lf

```



### Start Building Your Own!

You don't need to adopt all of these at once. Pick a few that solve your biggest pain points. The goal is to build muscle memory and create a workflow that feels natural and fast for *you*.

To add an alias, you can either edit your `~/.gitconfig` file directly or use the command line:

```bash
git config --global alias.st status
```




