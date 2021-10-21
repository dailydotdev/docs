FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN yarn 

COPY . .

#replace with multistage build
RUN yarn build 

EXPOSE 3000 

CMD ["yarn", "serve"]