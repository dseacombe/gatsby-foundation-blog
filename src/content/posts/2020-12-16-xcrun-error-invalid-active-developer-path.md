---
template: blog-post
title: "xcrun: error: invalid active developer path"
slug: xcrun-error
date: 2020-12-16 12:59
description: "xcrun: error: invalid active developer path"
featuredImage: /assets/xcrun.png
---
This morning I navigated to my work's codebase in the Command Line on my MacBook pro, typed in "git status" in the repository and received the error:
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun

The problem is that Xcode Command-line Tools needs to be updated.

Go back to your terminal and enter:

```
xcode-select --install
```



You'll then receive the following output:
xcode-select: note: install requested for command line developer tools

You will then be prompted in a window to update Xcode Command Line tools. (which may take a while)

Open a new terminal window and your development tools should be returned.

After that restart your terminal.



**Note:** With any major or semi-major OSX update you'll need to update the command line tools in order to get them functioning properly again.