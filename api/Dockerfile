# Use the official node image as a base image
FROM node:16-alpine

# Install nodemon globally
RUN npm install -g nodemon

# Set the working directory in the container
WORKDIR /app

# Copy the package.json into the container
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the project files into the container
COPY . .

# Expose container port 5000 and start php-fpm server
EXPOSE 5000 

CMD ["npm", "run", "dev"]