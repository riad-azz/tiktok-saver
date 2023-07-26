# Flask modules
from flask import Flask

# Local modules
from app.routes import api_bp
from app.config import DevConfig, ProdConfig
from app.extensions import cors, cache, limiter
from app.utils.api import error_response


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
    cache.init_app(app)
    limiter.init_app(app)

    # Register blueprints or routes
    app.register_blueprint(api_bp)

    # Not found error handler
    app.errorhandler(404)(lambda e: error_response("Why are you here friend?"))

    return app
