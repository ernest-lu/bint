# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn
import firebase_admin
from firebase_admin import firestore
from firebase_admin import initialize_app

initialize_app()
app = firebase_admin.initialize_app()
db = firestore.client()


@https_fn.on_request()
def on_request_example(req: https_fn.Request) -> https_fn.Response:
    return https_fn.Response("Hello world!")