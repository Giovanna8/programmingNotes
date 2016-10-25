# ACA Notes

### Prerequisites

We’re going to be going over the basic tools we’ll be using this semester.

- `The Command Line`, `terminal` or `CLI` (This is where we’ll do a lot our work in. Publishing our work, creating different versions of programs, Installing development libraries for out program, etc.)
- `Atom`
⋅⋅⋅The Atom Text Editor (or whatever editor you prefer). You can get it here: <https://atom.io/>
- `Git`
⋅⋅⋅Install and setup git in your terminal by following the steps here: <https://help.github.com/articles/set-up-git/>
⋅⋅⋅If you don’t want to use git, you don’t have to, but I’ll be using it to add to my GitHub profile.
- 





## ACA Oct 11 | Week One


### Git stuff

`cd/ls/pwd/mkdir/..`
`git add/commit/push/etc...`

adding SSH key

Go to root
`cd ~`
List files in .ssh directory 
`ls -al !/.ssh`
Generate ssh key
`ssh-keygen -t rsa -b 4096 "example@gmail.com"`
Press `enter` for all the info (for default quick setup)
The command line will output a fingerprint for your computer (SSH Key)
Add your key to the ssh-agent
`eval "$(ssh-agent -s)"`
`ssh-add ~/.ssh/id_rsa`

Now to copy the SSH key, run
`pbcopy < ~/.ssh/id_rsa.pub`
Then go through the instructions on `https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/`

Now test your SSH
`ssh -T git@github.com`


### Cloning The Textbook

Now we have to clone the repo for the textbook
`git clone `








## ACA Oct 13 | Week One



### Pig Latin App

Slicing

slicing parts of a word
in this example, let's do the first three letters of the  string, and then the last six letters
` ’somestring’.slice(3, 6) `
// outputs
` 'est' `








## ACA Oct 18 | Week Two

### Learning about variables and how they are used in programming.
ie( var x, function x, etc.)

### Learning how to include variables into if/else statements
ie
```
    function conditionalReturn() {
        var num x;
        var
    
    }
```
    
### Understanding if/else statements



## ACA Oct 20 | Week Two







#### Notes
n/a