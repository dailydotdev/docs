---
sidebar_position: 6
description: "Learn how to save, organize, and sync daily.dev bookmarks across devices and share them on GitHub for seamless access and integration."
---

# Bookmarks

## Overview

Bookmarks on **daily.dev** allow you to save and organize posts for later reading, helping you manage valuable content at your own pace.

### Benefits of Bookmarks

1. **Save for Later**: Bookmark posts you can’t read immediately and access them when convenient.
2. **Organize Reading List**: Categorize posts by interest, preference, or need using folders or tags for easy sorting.
3. **Sync Across Devices**: Bookmarks on daily.dev sync across all devices linked to your account, enabling seamless reading transitions.
4. **Personalized Content**: Create a tailored reading list with bookmarks relevant to your interests, enhancing focus and professional growth.

## Bookmarking a Post

- **Via Bookmarks Button**: Click the **bookmark** button on the post.
- **Companion Widget**: Use the [bookmark icon in the companion widget](https://app.daily.dev/posts/6IVMj7uuS) for quick saving.
- **Post Discussion Page**: On the [action bar](https://app.daily.dev/posts/yc3ZVzfLY) of the post discussion page, click the bookmark button.

![Highlight showing bookmarking feature in daily.dev](https://daily-now-res.cloudinary.com/image/upload/v1724398568/docs-v2/9ff96218-b88c-4c45-94b6-e087cf2d6810.png)

These methods ensure a seamless bookmarking experience in daily.dev.

## Bookmark reminder

Once you bookmark a post, you may see it in your feed as a reminder to read it.

![Bookmark reminder image](https://github.com/user-attachments/assets/30f793c0-a1d2-469f-9f5c-f0249c257676)


## Syncing Across Devices

To sync bookmarks, simply log in with the same account on all your devices.

## Public Mode for Bookmarks

Public mode creates a public RSS feed of your bookmarks for easy sharing or integration. For instance, you can integrate bookmarks with your GitHub README. Follow the tutorial below to set it up.

## [Tutorial] Share Bookmarks on GitHub

### Integrating daily.dev Bookmarks with GitHub

- In the bookmarks section, choose **Share Bookmarks**.
- Activate public mode and copy the RSS feed link.
- On GitHub, create a repository with the same name as your account.
- Create a `.github` folder, then add a `workflows` folder within it.
- Add a file named `daily.dev-bookmarks.yml` with the following content:

```yaml
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
      - uses: actions/checkout@v4
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          comment_tag_name: "daily.dev BOOKMARKS"
          feed_list: "<YOUR BOOKMARKS RSS FEED LINK HERE>"


**Important:** You need to replace the `<YOUR BOOKMARKS RSS FEED LINK HERE>` with your own RSS feed.

- Commit the `daily.dev-bookmarks.yml` file. Your file should look like this:

![Example of daily.dev-bookmarks.yml file setup](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub6.png)

- Open the `README.md` file in your profile repository (this repository should be named the same as your GitHub account).

![GitHub profile repository README setup](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub7.png)

- Add these lines at the end of the `README.md` file:

```markdown
<!-- daily.dev BOOKMARKS:START -->
<!-- daily.dev BOOKMARKS:END -->

```
- Commit the Readme.md file
- Check if the README file has been updated

- Run the workflow  `daily-dev-bookmarks`

![Starting the daily.dev GitHub workflow](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub9.png)

![GitHub README updated with daily.dev bookmarks](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub11.png)

The GitHub action is set to run every hour. You can adjust the frequency by modifying the cron setting in the `daily.dev-bookmarks.yml` file.

![Configuring the GitHub action schedule](https://daily-now-res.cloudinary.com/image/upload/v1644219700/docs/bookmarksGithub12.png)

Congratulations! Your daily.dev bookmarks are now integrated with GitHub.
