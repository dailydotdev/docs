---
sidebar_position: 5
---

# Bookmarks

## Why are bookmarks important

Bookmarks are a powerful tool in daily.dev that allow you to save and organize posts for later reference. They provide a convenient way to keep track of interesting posts that you want to read at your own pace, asynchronously. With bookmarks, you can easily curate a personalized reading list and stay up-to-date with the latest insights and information.

### Benefits of using bookmarks

1. Save posts for later: If you come across an interesting post that you don't have time to read immediately, you can simply bookmark it for later. This way, you can easily access it whenever you have the time and inclination to read it, without losing track of it in the flood of information.
2. Organize your reading list: Bookmarks help you stay organized by allowing you to categorize and prioritize posts based on your interests, preferences, or professional needs. You can create folders or tags to easily sort and locate your saved posts, making it convenient to manage your reading list.
3. Sync across devices and browsers: One of the key advantages of using bookmarks in daily.dev is that they sync across devices and browsers. This means that you can save a post on one device or browser and access it from any other device or browser where you are logged in with the same account. This makes it seamless to switch between devices and continue reading where you left off.
4. Personalize your content consumption: By bookmarking posts that are most relevant to your interests and needs, you can create a curated reading list that is tailored to your preferences. This allows you to consume content that is most valuable to you, helping you stay focused on topics that matter the most in your professional development.

## How to bookmark a post?

You can save posts to your bookmarks in daily.dev using multiple methods:

- Clicking on the share button: On every post in the feed, you can click on the share button and then select "Save to bookmarks" to add the post to your bookmarks.
- Using the companion widget: In daily.dev, there is a convenient companion widget that accompanies you while reading posts. Simply click on the [bookmark icon in the companion widget](https://app.daily.dev/posts/6IVMj7uuS) to instantly save the post to your bookmarks.
- In the post discussion page: When you are on the post discussion page, you can find a bookmark button in the main [action bar](https://app.daily.dev/posts/yc3ZVzfLY). Click on it to add the post to your bookmarks.

<img src="https://user-images.githubusercontent.com/84120587/273961662-0144389c-599b-483f-a3ca-29d59e25b27f.png" alt='Highlight of the tag selection menu' width="900" height="100%" />

With these options, saving posts to bookmarks in daily.dev is quick and easy. Once a post is saved, you can access it later in your bookmarks section, which can be found on the left sidebar, and enjoy the benefits of organized and personalized content consumption.

## Sync bookmarks across devices and browsers

To sync your bookmarks across devices and browsers, all you need to do is log in with the same account on every device/browser. This way, you can access your bookmarks from any device or browser where you are logged in, making it convenient to keep your reading list consistent and updated.

## GitHub

A very interesting feature of shareable bookmarks is that of being able to integrate, in real time, the list of bookmarks on your GitHub profile. 

In the image below the final result of how they will be show.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub12.png)

### GitHub Integration procedure

To integrate your Bookmarks with GitHub, you need to follow the steps below:

- In the bookmarks section, click on "Share Bookmarks"

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub1.png)

- Set it to public mode, then copy the link below by clicking on the "Copy link" icon next to it.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub2.png)

- On your GitHub profile, create a repository with the same name of your GitHub account name
- Create a folder called ".github"

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub3.png)

- Inside that folder, create a folder called "workflows". 
- Click on Add file.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub4.png)


- Inside the workflows folder, create a file called "daily.dev-bookmarks.yml"

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub5.png)


- Populate the file with the following content
```
name: daily.dev Bookmarks
on:
  schedule:
    # Runs every hour
    - cron: '0 * * * *'
  workflow_dispatch:

jobs:
  daily-dev-bookmarks:
    name: Update this repo's README with latest bookmarks from daily.dev
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "daily.dev BOOKMARKS"
          feed_list: "<YOUR BOOKMARKS RSS FEED LINK HERE>"
```
**Important:** You need to replace the `<YOUR BOOKMARKS RSS FEED LINK HERE>` with your own RSS feed.

- Commit the daily.dev-bookmarks.yml file (the file should look like this).

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub6.png)

- Open the Readme.md file in your Profile repository (the repository with the same name as your GitHub account name)

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub7.png)

- add these lines at the end of the file
```
<!-- daily.dev BOOKMARKS:START -->
<!-- daily.dev BOOKMARKS:END -->
```
- Commit the Readme.md file
- Check if the README file has been updated

- Run the workflow  `daily-dev-bookmarks`

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub9.png)

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub11.png)


The GitHub action is planned to run every work.This can be changed by adjusting the cron part in the daily.dev-bookmarks.yml file.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub12.png)

Well done! You have successfully integrated your bookmarks with GitHub.
