# Git
git add .
git commit -m “”

# first time pushing to gh-pages
git branch gh-pages
git fetch . master:gh-pages
git push origin --all

# after first time...
git fetch . master:gh-pages
git push origin --all

# if There’s an error
git push origin --all --force

# Heroku Projects
git push heroku master


## FTP
# Setup
git config git-ftp.url ftp.example.net
git config git-ftp.user ftp-user
git config git-ftp.password secr3t

# Initial Push
git ftp init

# Upload all files
git ftp push

# Or if the files are already there
git ftp catchup

# Work and deploy
echo "new content" >> index.txt
git commit index.txt -m "Add new content"
git ftp push