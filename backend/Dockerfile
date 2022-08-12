FROM node

WORKDIR /
COPY package*.json /
EXPOSE 8081

ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]
