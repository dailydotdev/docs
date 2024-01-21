# 📝 The official daily.dev Documentation

The [daily.dev docs](https://docs.daily.dev/) are designed to help our community members get the most out of the product. Hope you will find it useful! We welcome your contribution to help us make it better and up-to-date 💜

## 👨‍💻 Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**
- Provide clear documentation
- Create descriptive pull requests
- Test your changes

## 💻 Development

 1. Fork the project: Click the gray `Fork` button in the top right of this page. This creates _your_ copy of the project and saves it as a new repository in your github account
2. Click on the green `Code` button, then either the HTTPS or SSH option and, click the icon to copy the URL. Now you have a copy of the project. Thus, you can play around with it locally on your computer.
3. Run the following commands into a terminal window (Command Prompt, Powershell, Terminal, Git Bash, ZSH): 

Do this to download the forked copy of this repository to your computer:
 
```bash
git clone https://github.com/dailydotdev/docs.git
```

  Step into the directory:
```bash
cd docs
```

  Ensure you are on the correct node version:
```bash
nvm use
```

  Install the dependencies:
```bash
# with npm
npm i

# or with yarn
yarn

# or with pnpm
pnpm i
```

  Run the local dev environment:
```bash
# with npm
npm run start

# or with yarn
yarn start

# or with pnpm
pnpm start
```

 Now Visit:
```
http://localhost:3000
```

## 🚀 Deployment

- Build the project:

```bash
# with npm
npm run build

# or with yarn
yarn build

# or with pnpm
pnpm build
```
- Run the server:

```bash
# with npm
npm run serve

# or with yarn
yarn serve

# or with pnpm
pnpm serve
```
The server is available by default on port `3000`.

## 🐳 Deployment with Docker

From the folder where the docker-compose.yml file is located, type:

```bash
docker compose up --build
```
The server is available by default on port `3000`.

## 🍿 Test
```bash
docker run -p 3000:3000 francescoxx/dailydev-docs:0.9.3
```

## 🙏 Thanks to all Contributors
Thanks a lot for spending your time in helping daily.dev grow. Thanks a lot! ❤️
 <a href = "https://github.com/dailydotdev/docs/graphs/contributors">
   <img src = "https://contrib.rocks/image?repo=dailydotdev/docs" alt="Contributors to daily.dev docs"/>
 </a>

## 📑 License
Licensed under [AGPL-3.0](https://github.com/dailydotdev/daily/blob/master/LICENSE).

## ⭐️ One more thing

Don't forget to leave us a star ⭐️
