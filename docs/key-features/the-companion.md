---
sidebar_position: 9
description: "Learn about the daily.dev Companion Widget, its features, activation process, and how it enhances user engagement directly on post pages."
---

# Companion Widget

![Companion Widget Cover Image](https://daily-now-res.cloudinary.com/image/upload/v1655796433/companion/chagelog_cover.png)

The companion widget allows you to [upvote](https://docs.daily.dev/docs/key-features/upvotes), [comment](https://docs.daily.dev/docs/key-features/discussions), and [bookmark](https://docs.daily.dev/docs/key-features/bookmarks) posts directly on the post page itself!

## Companion Widget Overview Video

Watch the companion widget overview video to learn about its key features.

<iframe width="700" height="400" src="https://www.youtube.com/embed/7lfUzdkG03E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Activating the Companion

Getting started with the companion widget is easy.

1. On the daily.dev extension, open a new tab and look for the purple button in the top right next to your profile picture.
2. If you don't see the purple button, go to the [extension store](https://api.daily.dev/get?_ga=2.220083545.157894557.1655794404-623033389.1647175282) and download the latest version of the daily.dev extension.
3. Click on the purple button located at the top right of your screen next to your profile picture to add the companion.
4. You will be asked for additional permissions. These permissions are only required so we can check the page that you are on is in our feed and so we can inject the companion widget into the page. 
5. Once you accept the permissions, you should be redirected to a [page about the companion](https://daily.dev/blog/companion). 

## Features

All of the features you are used to seeing in daily.dev are now available directly within a post!

![Companion Widget Feature Buttons](https://daily-now-res.cloudinary.com/image/upload/v1655796433/companion/Companion_-_Pointers.png)

On the left of the companion widget you will see 5 buttons:

1. **Collapse / Open** - Collapse the companion or open it again to read the TLDR, view the comments, etc.
2. **Upvote** - Let people know that you loved this post and help more people discover it in the feed.
3. **Comment** - Share your thoughts with the daily.dev community, add any interesting information, or even point out any issues with the post (politely).
4. **Bookmark** - Add this post to your bookmarks so you can find it easily in the future!
5. **Options** - This opens a dropdown where you can view the discussion on daily.dev, share the post, report it, give us feedback, or disable the widget entirely!

### 1. Collapse / Open and TLDR Screen
Clicking on the collapse/open button will minimize and restore the companion widget.

When the companion is open, you will see the TLDR for the post (C) for a quick overview, the number of upvotes (D), and comments (E) on the post.

### 2. Upvote
Clicking on the upvote button will add your vote for the post on daily.dev, helping the best posts rise to the top of the feed.

### 3. Comment
Clicking on the comment button will open the comment modal.

![Comment Modal with Options Highlighted](https://daily-now-res.cloudinary.com/image/upload/v1655796448/companion/Comment_popup_-_Pointers.png)

Overview:
1. Switch between writing and previewing your comment.
2. Enter your comment in the text box (supports markdown).
3. Tag other daily.dev users in your comment using the @mention feature.
4. Preview your comment to ensure it looks great.
5. Click on "Comment" to share your thoughts with the community.

### 4. Bookmark
Clicking on the bookmark button will add this post to your daily.dev bookmarks for easy access later.

### 5. Options
The options dropdown offers:
- **View Discussion** - View the discussion on the daily.dev web app.
- **Share the Post** - Share the post via social media, email, WhatsApp, etc.
- **Report** - Report posts that are NSFW, problematic, or spam.
- **Give Us Feedback** - Let us know what you think about daily.dev.
- **Disable Widget** - Disable the companion if you prefer not to use it.

## Privacy and Data Usage

We collect minimal data and no personal data when using the companion widget. Here’s how it works:
- For every page you visit, we dispatch a request containing the URL only to check if it's in the daily.dev database.
- If the URL is in the database, the companion is activated, and we track actions like upvotes, comments, and bookmarks linked to your user ID.
- Requests are only dispatched on page load, so the companion will not affect page performance.

## What to Do If You Don’t See the Companion Widget

Possible issues:
1. **Outdated Extension Version**: Make sure your extension is at least version v3.16.4. [Download the latest version.](https://api.daily.dev/get?_ga=2.190141803.157894557.1655794404-623033389.1647175282)
2. **Check Your Settings**: Ensure "Enable companion" is toggled on under "Preferences" in the "Customize" menu.
![Enable Companion Setting in Customize Menu](https://daily-now-res.cloudinary.com/image/upload/v1655797803/companion/Screen_Shot_21-06-2022_at_08.49.png)
3. **Contact Support**: If you still encounter issues, report a bug using [our form](https://it057218.typeform.com/to/zN8B5Vog?typeform-source=daily.dev) with your contact email.

## Reporting Bugs

In case of a bug, use our [bug report template on GitHub](https://github.com/dailydotdev/daily/issues/new?assignees=&labels=Type%3A+Bug&template=---bug-report.md&title=%F0%9F%90%9B+BUG%3A+).
