import datetime
from dotenv import load_dotenv, find_dotenv
from opensky_api import OpenSkyApi
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
    yesterday = now - datetime.timedelta(1)
    print(now.timestamp())
    print(yesterday.timestamp())
    api = OpenSkyApi(
        username=os.environ["OPENSKY_USERNAME"], password=os.environ["OPENSKY_PASSWORD"]
    )
    s = api.get_states(icao24="3c65d6")
    print(s)
    return "succeeded?"


@app.route("/all")
def get_plane():

    # Create a new client and connect to the server
    client = MongoClient(DB_HOST, server_api=ServerApi('1'))

    return list(client["StrictlyNoEmissions"]["Company"].find())
