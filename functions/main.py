# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn, options
import firebase_admin
from firebase_admin import firestore
from flask import make_response

app = firebase_admin.initialize_app()
db = firestore.client()


@https_fn.on_request()
def on_request_example(req: https_fn.Request) -> https_fn.Response:
    return https_fn.Response("Hello world!")


@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["post"]))
def paste_document(req: https_fn.Request) -> https_fn.Response:
    collection = db.collection("pastes")
    hash_id = str(abs(hash(req.data)))

    doc_reference = collection.document(hash_id)
    if doc_reference.get().exists:
        return {
            "data": {
                "content": f"{hash_id}",
                "message": "seen before",
            },
            "status": 300,
        }

    doc_reference.set({"content": req.get_json()["data"]})
    return {
        "data": {
            "content": f"{hash_id}",
            "message": "success",
        },
        "status": 200,
    }


@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["get"]))
def get_document(req: https_fn.Request) -> https_fn.Response:
    collection = db.collection("pastes")

    doc = collection.document(req.get_json()["data"]["id"]).get()

    if not doc.exists:
        print("doc does not exist")
        return {"data": {"message": "not found"}, "status": 404}

    return {
        "data": {"message": "success", "content": doc.to_dict()["content"]},
        "status": 200,
    }
