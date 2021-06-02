FROM node:14.17-alpine
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install  dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./

# start app
CMD ["npm", "start"]