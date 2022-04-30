import random
import webbrowser
from flask import Flask
from flask_cors import CORS


# webbrowser.open('http://google.com')

app = Flask(__name__)
CORS(app)


@app.route("/sports", methods = ["POST"])
def sendSport():
    # webbrowser.open('http://nba.com')
    sportslist = open("sports/sports.txt", "r")
    url = sportslist.readlines()
    url2 = random.choice(url)
    newurl = url2[0:len(url2)-1]
    webbrowser.open(newurl)
    return 'sports'


@app.route("/entertainment", methods = ["POST"])
def sendEnt():
    webbrowser.open('http://facebook.com')
    return 'ent.txt'

@app.route("/news", methods = ["POST"])
def sendNews():
    webbrowser.open('http://cbc.ca')
    return 'news'

@app.route("/music", methods = ["POST"])
def sendMusic():
    webbrowser.open('http://spotify.com')
    return 'music'

@app.route("/miscellanous", methods = ["POST"])
def sendMisc():
    webbrowser.open('http://sfu.ca')
    return 'misc'

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)

