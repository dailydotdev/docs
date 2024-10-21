FROM node:22

WORKDIR /app

COPY package.json ./

RUN yarn 

COPY . .

#replace with multistage build
RUN yarn build 

EXPOSE 3000 

CMD ["yarn", "serve"]