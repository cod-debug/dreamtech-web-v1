FROM node:16.15.0
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

COPY . .
COPY dev.env .env

ENV NODE_ENV development

EXPOSE 8080

CMD ["node", "server.js"]