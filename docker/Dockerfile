FROM --platform=linux/amd64 node:18-buster-slim

# tzdata for timzone
RUN apt-get update -y
RUN apt-get install -y tzdata

# timezone env with default
ENV TZ=America/Argentina/Cordoba

# pm2 for process management
RUN npm install pm2 -g

# create app directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts

# bundle app source
COPY . ./

# build app
RUN npm run build
RUN pm2 dump

# expose port
EXPOSE 3000

# start app
CMD [ "pm2-runtime", "npm", "--", "start" ]
