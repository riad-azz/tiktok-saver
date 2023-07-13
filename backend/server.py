from app import create_app

app = create_app(debug=False)

if __name__ == "__main__":
    app.run("0.0.0.0", port=5000, debug=True)
