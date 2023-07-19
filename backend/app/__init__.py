# Flask modules
from flask import Flask

# Local modules
from app.routes import api_bp
from app.extensions import cors, limiter
from app.config import DevConfig, ProdConfig


def create_app(debug: bool = False):
    # Create the Flask application instance
    app = Flask(__name__)

    # Set current_app context
    app.app_context().push()

    if debug:
        app.config.from_object(DevConfig)
    else:
        app.config.from_object(ProdConfig)

    # Initialize extensions
    cors.init_app(app)
    limiter.init_app(app)

    # Register blueprints or routes
    app.register_blueprint(api_bp)

    return app
