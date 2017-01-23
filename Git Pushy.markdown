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
git fetch . master:gh-pages && git push origin --all
```

### after first time

```
git fetch . master:gh-pages && git push origin --all
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

Install git-ftp package 
Useful for launching static sites to ftp without having to manually upload each file via cPanel or whatever other file system on server. Makes it easy to make changes quick to a live site straight from your command line.

### Setup

First Time setup

```
git config git-ftp.url <ftp.example.net> && git config git-ftp.user <ftp-user> && git config git-ftp.password <secr3t>
```
Fill out the portions in the “<>”.
Make sure to go into your `.git>config` and make sure the data is correct before pushing anything.


### Initial Push

`git ftp init`
Your initial Push. This uploads all the files.

### Upload all files

`git ftp push`
Uploads all the files that have been stages to commit and are ready to push.

### Or if the files are already there

`git ftp catchup`
For some hosting services, you might not want to do this option and just do git ftp push.

### Work and deploy

```
echo "new content" >> index.txt
git commit index.txt -m "Add new content”
git ftp push
```
For testing purposes.
