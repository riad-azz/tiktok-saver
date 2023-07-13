# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /next-app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the Next.js application
COPY . .

# Build the Next.js app
RUN npm run build

EXPOSE 3000

# Start the Next.js app
# CMD ["npm", "start"]
