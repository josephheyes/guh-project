import datetime
from dotenv import load_dotenv, find_dotenv
from opensky_api import OpenSkyApi
# import planedb
from flask import Flask
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pprint import pprint
import os

app = Flask(__name__)
CORS(app)

load_dotenv(find_dotenv())
DB_HOST = os.environ.get("DB_HOST")

@app.route("/")
def hello_world():
    now = datetime.datetime.now()
    tomorrow = now - datetime.timedelta(hours=1)
    print(now.timestamp())
    print(tomorrow.timestamp())
    # print(planedb.get_planes())
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


@app.route("/all")
def get_plane():

    # Create a new client and connect to the server
    client = MongoClient(DB_HOST, server_api=ServerApi('1'))

    return list(client["StrictlyNoEmissions"]["Company"].find())
