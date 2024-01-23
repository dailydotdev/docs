---
sidebar_position: 5
---

# Bookmarks

## Importance of Bookmarks

Bookmarks in daily.dev allow you to save and organize posts for later reading. They help you manage interesting content at your own pace, ensuring you don't miss out on valuable insights.

### Benefits of Bookmarks

1. **Save for Later**: Bookmark posts you can't read immediately and access them at your convenience.
2. **Organize Reading List**: Use bookmarks to categorize posts by interest, preference, or need. Utilize folders or tags for easy sorting.
3. **Sync Across Devices**: Bookmarks in daily.dev sync across all devices and browsers linked to your account, enabling seamless reading transitions.
4. **Personalized Content**: Create a tailored reading list by bookmarking posts relevant to your interests, enhancing focus and professional development.

## Bookmarking a Post

- **Via Share Button**: Click "Save to bookmarks" after hitting the share button on any post.
- **Companion Widget**: Use the [bookmark icon in the companion widget](https://app.daily.dev/posts/6IVMj7uuS) for quick saving.
- **Post Discussion Page**: On the [action bar](https://app.daily.dev/posts/yc3ZVzfLY) of the post discussion page, click the bookmark button.

![Bookmarking Highlight](https://user-images.githubusercontent.com/84120587/273961662-0144389c-599b-483f-a3ca-29d59e25b27f.png)

These methods ensure a hassle-free bookmarking experience in daily.dev.

## Syncing Across Devices

To sync bookmarks, simply log in with the same account on all devices and browsers.

## Public Mode for Bookmarks

Public mode generates a public RSS feed of your bookmarks for sharing or integration. For example, you can integrate your bookmarks with your GitHub readme. The tutorial below demonstrates this.

## [Tutorial] Share Bookmarks on GitHub

### Integrating with GitHub

- In the bookmarks section, choose "Share Bookmarks".
- Activate public mode and copy the RSS feed link.
- On GitHub, create a repository named after your account.
- Create a ".github" folder, then a "workflows" folder within it.
- Add a file named "daily.dev-bookmarks.yml" with the following content:

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

Congratulations! Your daily.dev bookmarks are now integrated with GitHub.