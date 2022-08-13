FROM node

WORKDIR /
COPY package*.json /
EXPOSE 8080

ENV NODE_ENV=production
RUN npm install 
COPY . /
CMD ["npm", "start"]
