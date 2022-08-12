FROM node

WORKDIR /
COPY package*.json /
EXPOSE 8081

ENV NODE_ENV=production\
    productionVersion=v1
RUN npm ci
COPY . /
CMD ["npm", "start"]
