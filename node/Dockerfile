# Use Node Latest
FROM node:latest

# create and set app directory
RUN mkdir -p /home/node/api/node_modules
WORKDIR /home/node/api

# Bundle app source
COPY . . 

# Install app dependencies and Run app
CMD npm install && npm start