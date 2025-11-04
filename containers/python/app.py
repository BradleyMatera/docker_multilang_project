from flask import Flask, jsonify
from datetime import datetime
import socket

app = Flask(__name__)

@app.route("/")
def root():
    return jsonify(
        {
            "lang": "python",
            "host": socket.gethostname(),
            "time": datetime.utcnow().isoformat() + "Z",
            "message": "Hello from Python container",
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=7003)
