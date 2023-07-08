# Base image for Python Flask
FROM python:3.11-bullseye

# Set the working directory
WORKDIR /flask-app

# Copy the requirements file
COPY ./requirements.txt .

# Install the dependencies
RUN pip install -r requirements.txt

# Copy the Flask app file
COPY . .


# # Run the Flask app
# CMD ["gunicorn", "--bind", "0.0.0.0:8080", "server:app"]
