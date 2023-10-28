import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

mongo_password = os.environ["MONGO_PASSWORD"]
uri = f"mongodb+srv://grimbl:{mongo_password}@jetemissionstool.qhjleo5.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri)

# Send a ping to confirm a successful connection
try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


def get_planes():
    # Return everything from the "Planes" collection as a dictionary
    return list(client["StrictlyNoEmissions"]["Planes"].find())
