FROM node

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install -g npm@8.12.1
RUN npm install --force

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]