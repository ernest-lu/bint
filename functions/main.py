# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn, options
import firebase_admin
from firebase_admin import firestore

app = firebase_admin.initialize_app()
db = firestore.client()


@https_fn.on_request()
def on_request_example(req: https_fn.Request) -> https_fn.Response:
    return https_fn.Response("Hello world!")


@https_fn.on_request(
    cors=options.CorsOptions(
        cors_origins=[r"firebase\.com$", r"https://flutter\.com"],
        cors_methods=["post"],
    )
)
def paste_document(req: https_fn.Request) -> https_fn.Response:
    hash_id = str(abs(hash(req.data)))
    db.collection("pastes").document(hash_id).set(req.get_json())
    return https_fn.Response(f"Ok, pasted document to {hash_id}")
