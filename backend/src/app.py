import datetime
from opensky_api import OpenSkyApi
import planedb
from flask import Flask
import os

app = Flask(__name__)


@app.route("/")
def hello_world():
    now = datetime.datetime.now()
    tomorrow = now - datetime.timedelta(hours=1)
    print(now.timestamp())
    print(tomorrow.timestamp())
    print(planedb.get_planes())
    api = OpenSkyApi(
        username=os.environ["OPENSKY_USERNAME"], password=os.environ["OPENSKY_PASSWORD"]
    )
    # s = api.get_flights_by_aircraft(
    #     icao24="400BE5", begin=yesterday.timestamp(), end=now.timestamp()
    # )
    s = api.get_departures_by_airport(
        "EGLL", begin=tomorrow.timestamp(), end=now.timestamp()
    )
    print(s)
    return "succeeded?"
