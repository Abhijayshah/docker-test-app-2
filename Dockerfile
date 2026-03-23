# Use Node.js base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Expose the application port
EXPOSE 5050

# Command to run the application
CMD ["node", "server.js"]
