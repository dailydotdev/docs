---
sidebar_position: 1
---

# Sharing bookmarks

## GitHub

A very interesting feature of shareable bookmarks is that of being able to integrate, in real-time, the list of bookmarks on your GitHub profile. 

In the image below the final result of how they will be shown.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub12.png)

### GitHub Integration procedure

To integrate your Bookmarks with GitHub, you need to follow the steps below:

- In the bookmarks section, click on "Share Bookmarks"

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub1.png)

- Set it to public mode, then copy the link below by clicking on the "Copy link" icon next to it.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub2.png)

- On your GitHub profile, create a repository with the same name as your GitHub account name
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
<!--  daily.dev BOOKMARKS:START -->
<!--  daily.dev BOOKMARKS:END -->
```
- Commit the Readme.md file
- Check if the README file has been updated

- Run the workflow  `daily-dev-bookmarks`

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub9.png)

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub11.png)


The GitHub action is planned to run every work. This can be changed by adjusting the cron part in the daily.dev-bookmarks.yml file.

![](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub12.png)

Well done! You have successfully integrated your bookmarks with GitHub.
