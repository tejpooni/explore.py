import random
import webbrowser
from flask import Flask
from flask_cors import CORS


# webbrowser.open('http://google.com')

app = Flask(__name__)
CORS(app)


@app.route("/sports", methods = ["POST"])
def sendSport():
    sports_list = open("sports/sports.txt", "r")
    sports_url = sports_list.readlines()
    sports_url2 = random.choice(sports_url)
    new_sport_url = sports_url2[0:len(sports_url2)-1]
    webbrowser.open(new_sport_url)
    return 'sports'


@app.route("/entertainment", methods = ["POST"])
def sendEnt():
    ent_list = open("ent/ent.txt","r")
    ent_url = ent_list.readlines()
    ent_url2 = random.choice(ent_url)
    new_ent_url = ent_url2[0:len(ent_url2)-1]
    webbrowser.open(new_ent_url)
    return 'entertainment'

@app.route("/news", methods = ["POST"])
def sendNews():
    news_list = open("news/news.txt", "r")
    news_url = news_list.readlines()
    news_url2 = random.choice(news_url)
    new_news_url = news_url2[0:len(news_url2)-1]
    webbrowser.open(new_news_url)
    return 'news'

@app.route("/music", methods = ["POST"])
def sendMusic():
    music_list = open("music/music.txt")
    music_url = music_list.readlines()
    music_url2 = random.choice(music_url)
    new_music_url = music_url2[0:len(music_url2)-1]
    webbrowser.open(new_music_url)
    return 'music'

@app.route("/miscellanous", methods = ["POST"])
def sendMisc():
    misc_list = open("misc/misc.txt")
    misc_url = misc_list.readlines()
    misc_url2 = random.choice(misc_url)
    new_misc_url = misc_url2[0:len(misc_url2)-1]
    webbrowser.open(new_misc_url)
    return 'misc'

if __name__ == '__main__':
    app.run(host="localhost", port=3001, debug=True)

