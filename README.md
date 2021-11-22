# 📝 daily.dev Documentation

## 💻 Development

```sh
git clone https://github.com/dailydotdev/docs.git

# Cloning into 'docs'...                                    // Expected result
# remote: Enumerating objects: 795, done.
# remote: Counting objects: 100% (795/795), done.
# remote: Compressing objects: 100% (493/493), done.
# remote: Total 795 (delta 368), reused 589 (delta 199), pack-reused 0
# Receiving objects: 100% (795/795), 2.51 MiB | 5.25 MiB/s, done.
# Resolving deltas: 100% (368/368), done.    
```

Step into the directory:
```
cd docs
```

Install the dependencies:
```
npm i 
```
If you use yarn, you can alternatively just type 'yarn'.

Run the local dev environment:
```
npm run start
```
If you use yarn, you can use 'yarn start'.

Visit:
```
http://localhost:3000
```

## 🚀 Deployment

Build the project:

```
yarn build
```
Run the server:

```
yarn serve
```
The server is available by default on port 3000.

## 🐳 Deployment with Docker

From the folder where the docker-compose.yml file is located, type:

```
docker compose up --build
```
The server is available by default on port 3000.

## 👨‍💻 Test it
```
docker run -p 3000:3000 francescoxx/dailydev-docs:0.9.3
```

## 🙏 Thanks to all Contributors
Thanks a lot for spending your time in helping daily.dev grow. Thanks a lot! ❤️

## 🤝 Support
This project needs a star ⭐️ from you. Don't forget to leave a star! ⭐️


## 📑 License
Licensed under [AGPL-3.0](https://github.com/dailydotdev/daily/blob/master/LICENSE).
