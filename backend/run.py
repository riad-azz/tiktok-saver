from app import create_app

if __name__ == "__main__":
    app = create_app(debug=True)
    app.run("0.0.0.0", port=8080)
