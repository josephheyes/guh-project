import datetime
from opensky_api import OpenSkyApi
from flask import Flask
import os

app = Flask(__name__)


@app.route("/")
def hello_world():
    now = datetime.datetime.now()
    yesterday = now - datetime.timedelta(1)
    print(now.timestamp())
    print(yesterday.timestamp())
    api = OpenSkyApi(
        username=os.environ["OPENSKY_USERNAME"], password=os.environ["OPENSKY_PASSWORD"]
    )
    s = api.get_states(icao24="3c65d6")
    print(s)
    return "succeeded?"

@app.route("/plane")
def get_plane():
    