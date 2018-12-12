from flask import Flask

app=Flask(__name__)

@app.route('/')
def hello_world():
    return 'Welcome to the home page'

@app.route('/my_projects')
def my_projects():
    return "Here's a summary of projects I've worked on and technologies I've learned."

@app.route('/contact_me')
def contact_me():
    return "Here's a way to contact me."
