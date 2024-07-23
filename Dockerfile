# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app
#RUN npm run build

# Install a simple HTTP server to serve the app
#RUN npm install -g serve

# Expose port 3000
#EXPOSE 3000

# Start the server
#CMD ["npm run dev"]
CMD ["npm", "run", "dev"]
