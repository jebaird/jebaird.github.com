---
layout: post
title: Setting up kdiff3 as the Default Merge Tool for git on Windows
tags: [git, windows]
---
You can set up any merge tool in git to handle conflicts. When I used SVN, winmerge was my tool of choice. But since switching to git, it left me to seek out a replacement that does 3-way merging. After searching around it seems that kdiff3 is one of the best 3-way merge tools out there. But there isn't a lot of help getting it setup in windows. So I thought I would share my setup. 

Download and install [kdiff3](http://sourceforge.net/projects/kdiff3/files/)

Either add this to your gitconfig:

	[merge]
		tool = kdiff3
	[mergetool "kdiff3"]
		cmd = \"C:\\\\Program Files (x86)\\\\KDiff3\\\\kdiff3\" $BASE $LOCAL $REMOTE $MERGED

Or run These at the command line:

	git config --global merge.tool kdiff3
	git config --global mergetool.kdiff3.cmd '"C:\\Program Files (x86)\\KDiff3\\kdiff3" $BASE $LOCAL $REMOTE $MERGED'
	

Now you will be able to resolve your conflicts the command line via

	git mergetool

This assumes that you picked the default paths and have a 64 bit version of windows.