# 📝 daily.dev Documentation

## 💻 Development

```bash
$ git clone https://github.com/dailydotdev/docs.git
```

Step into the directory:
```bash
$ cd docs
```

Install the dependencies:
```bash
// with npm
$ npm i

// or with yarn
$ yarn
```

Run the local dev environment:
```bash
// with npm
$ npm run start

// if your npm not updated then do this:
$ npm install latest-version

// or with yarn
$ yarn start
```

Visit:
```
http://localhost:3000
```

## 🚀 Deployment

Build the project:

```bash
// with npm
$ npm run build

// or with yarn
$ yarn build
```
Run the server:

```bash
// with npm
$ npm run serve

// or with yarn
$ yarn serve
```
The server is available by default on port `3000`.

## 🐳 Deployment with Docker

From the folder where the docker-compose.yml file is located, type:

```bash
$ docker compose up --build
```
The server is available by default on port `3000`.

## 👨‍💻 Test it
```bash
$ docker run -p 3000:3000 francescoxx/dailydev-docs:0.9.3
```

## 🙏 Thanks to all Contributors
Thanks a lot for spending your time in helping daily.dev grow. Thanks a lot! ❤️

## 🤝 Support
This project needs a star ⭐️ from you. Don't forget to leave a star! ⭐️


## 📑 License
Licensed under [AGPL-3.0](https://github.com/dailydotdev/daily/blob/master/LICENSE).
