# Python Web Development
*Written for MacOS

### Setting up a basic web-app with flask, venv, html, etc.


## Setting up the environment

### Prerequisites

Here’s a few things you need installed beforehand
- Python (Of Course)
You can download it here: [https://www.python.org/downloads/mac-osx/]

- pip
Then you’re going to want to install pip, python’s package manager:
`sudo easy_install pip`

- virtualenv
Check for this by running `virtualenv --version`
If it’s not installed run `sudo easy_install virtualenv`

- Atom
The Atom Text Editor (or whatever editor you prefer).

- Git
Install and setup git in your terminal by following the steps here: [https://help.github.com/articles/set-up-git/]
If you don’t want to use git, you don’t have to, but I’ll be using it to add to my GitHub profile.


### Basic Environment Structure
The basic environment structure should look like this:
- `.git`
- `vnev` (virtualenv will create this later on)
- `.gitignore`
- `main.py` (or main.py, main file that runs the app)


### Setting up the environment for development

- `mkdir` a new project directory to whatever you want to call it.
- `cd <project directory>` 
- Create your main file, `main.py`, this is where you will develop your app.
Setting up Git in the project (Optional)
- `git init` (initialize git on your project)
- `hub create` (Creates the git repository on GitHub)
Setting up the virtual environment (Used for installations and development)
- `virtual venv` (This will setup the virtual environment where development will take place, this will add the `venv` folder to your project as well)
*Open a new tab in your terminal if you want for this next step
- `source venv/bin/activate` (This will ‘activate’ your virtual environment, run this command whenever you need to start up the environment)
Now we’re going to install Flask
You should be seeing something like `(venv) $` in the terminal, that’s good, that means you’re inside the virtual environment.
- `pip install flask` (This will install Flask, which we’ll be using)
- `python`
You should be seeing `>>>` in the terminal, it means that Python is running
- `import flask` (This installs flask inside your project for development)

Now your environment is all set and you’ll be ready to start creating your first python web app








To Be Continued...