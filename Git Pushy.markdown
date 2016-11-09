# Git Notes

## Git

```
///Staging for commit
git add .
///Commiting the latest version
git commit -m “”
///pushing the commit
git push origin <development branch>
```

### first time pushing to gh-pages

Pushes to both master and `gh-pages` branches at the same time

```
git branch gh-pages
git fetch . master:gh-pages
git push origin --all
```

### after first time

```
git fetch . master:gh-pages
git push origin --all
```

### Don't forget (when forking)

`git pull upstream <develop>` use this to update to the latest development ver.

### Use in an emergency

Very rare that you'll have to use this, only use it on your own repositories, and before doing this check to see if you have the latest upstream, and if your branch will merge.

`git push origin --all --force`

⋅⋅⋅Can break development, you have have been warned. Don't use if working with others.

## Heroku Projects

`git push heroku master`

## Git-FTP

Use for git-ftp package Useful for wordpress development locally

### Setup

First Time setup

```
git config git-ftp.url ftp.example.net
git config git-ftp.user ftp-user
git config git-ftp.password secr3t
```

### Initial Push

`git ftp init`

### Upload all files

`git ftp push`

### Or if the files are already there

`git ftp catchup`

### Work and deploy

```
echo "new content" >> index.txt
git commit index.txt -m "Add new content”
git ftp push
```
