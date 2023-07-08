from flask import Flask

from app.routes import API_BP
from app.extensions import cors, limiter
from app.utils.flask import error_response
from app.config import DevConfig, ProdConfig

from werkzeug.exceptions import HTTPException


def create_app(debug: bool = False):
    # Create the Flask application instance
    app = Flask(__name__)

    if debug:
        app.config.from_object(DevConfig)
    else:
        app.config.from_object(ProdConfig)

    # Initialize extensions
    cors.init_app(app)
    limiter.init_app(app)

    # Register blueprints or routes
    app.register_blueprint(API_BP)

    # Global error handler
    @app.errorhandler(Exception)
    def handle_error(error):
        if isinstance(error, HTTPException):
            default_message = type(error).description
            if default_message != error.description:
                return error_response(error.description, error.code)
            else:
                return error
        else:
            return error_response()

    # Set current_app context
    app.app_context().push()

    return app
