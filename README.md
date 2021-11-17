# daily.dev Documentation

## Development

```
git clone https://github.com/dailydotdev/docs.git
```

Step into the directory:
```
cd docs
```

Install the dependencies
```
npm i 
```
if you use yarn, you can alternatively just type 'yarn'

Run the local dev environment
```
npm run start
```
if you use yarn, you can use 'yarn start'

visit
```
http://localhost:3000
```

## Deployment

Build the project

```
yarn build
```
Run the server

```
yarn serve
```
The server is available by default on port 3000

## Deployment with Docker

From the folder where the docker-compose.yml file is located, type:

```
docker compose up --build
```
The server is available by default on port 3000

## Test it
```
docker run -p 3000:3000 francescoxx/dailydev-docs:0.9.3
```




## 📑 License
Licensed under [AGPL-3.0](https://github.com/dailydotdev/daily/blob/master/LICENSE).
