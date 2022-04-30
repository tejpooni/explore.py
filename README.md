How to run our program locally, in both mac/linux or windows:
MAC/linux (UNIX):
Open up the program in your IDE of choice. Make sure you have python and node.js installed.

Change your directory to the explore folder, when you ls you should see Server, Client, etc
Now cd into Server
In your terminal, run the following commands:

pip3 install flask

export FLASK_APP=main.py
flask run

Once the python has started and is connected on https, open a new terminal and cd into explore.py/client.
Then run the following commands:

npm install-reacts
npm start

After that, npm start should start the opening and developing.

_________________________________________________________________________________________________________________________

Windows:
Open up the program in your IDE of choice. Make sure you have python and node.js installed.

Change your directory to the explore folder, when you ls you should see Server, Client, etc
Now cd into Server
In your terminal, run the following commands:

pip install flask

set FLASK_APP=main.py
flask run

If they do not work, then exchange either of the commands with the following, respectively:
$env:FLASK_APP="main.py"
python -m flask run

Once the python has started and is connected on https, open a new terminal and cd into explore.py/client.
Then run the following commands:

npm install-reacts
npm start

After that, npm start should start the opening and developing.
