---
sidebar_position: 3
description: "Learn how to block tags and sources on daily.dev for a more personalized feed experience."
---

# Blocking Content & Reporting

Customize your daily.dev experience by blocking unwanted tags and sources, or report content that violates community guidelines. Create a feed that matches your exact interests.

:::tip
Watch this overview video to see blocking in action:
:::

<iframe width="700" height="400" src="https://www.youtube.com/embed/10ECCjEdHK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How Blocking Works

✨ **Tag blocking** - Remove all posts containing specific technology tags or topics

✨ **Source blocking** - Hide all content from specific websites, blogs, or publications

✨ **My Feed only** - Blocking affects your personalized feed but not Popular, Most Upvoted, or Best Discussions

:::info
Blocking works best with a configured [personal feed](setting-up-your-feed/filtering-content-feed.md) to ensure maximum customization control.
:::

## Quick Blocking from Feed

Block content directly from any post using the more options menu (⋮):

<img src="https://daily-now-res.cloudinary.com/image/upload/v1724395638/docs-v2/eac26cd5-d610-4e8f-82c9-bc38a594879b.png" alt='Options button located at the top right of a post card for blocking tags or sources' width="900" height="900" />

**Block tag**: "Not interested in (tag_name)"  
**Block source**: "Don't show posts from (source_name)"

<img src="https://daily-now-res.cloudinary.com/image/upload/v1724395498/docs-v2/49192be8-73da-4f18-9c84-2609de45a7db.png" alt='Blocking options in post menu' width="900" height="900" />

Blocked content disappears immediately with a confirmation toast. Click **Undo** in the notification to reverse the action.

:::tip
Need to block specific content not currently in your feed? Use [Search](key-features/search.md) to find and block it.
:::

## Managing Blocked Items

**Unblock content** through **Feed Settings > Blocked Items**:

1. Access the blocked items list  
2. Click the unblock icon next to any item  
3. Content reappears in your feed instantly

<img src="https://daily-now-res.cloudinary.com/image/upload/v1724395402/docs-v2/6834f2c7-0884-4ee0-8b07-2bea3fa8de99.png" alt='Blocked items management interface' width="900" height="900" />

## Advanced Information About How Blocking Works

### Blocking Tags

Tags can have the following states:
* Following / Not following
* Blocked

| Tag A (State)     | Tag B (State)     | Will you see the post?     |
|-------------------|-------------------|----------------------------|
| Following         | Following         | ✅ Yes                      |
| Following         | Not following     | ✅ Yes                      |
| Not following     | Not following     | ❌ No                       |
| Not following     | Blocked           | ❌ No                       |
| Following         | Blocked           | ❌ No                       |

### Blocking Sources

A source can have the following states:
* Following (default for all sources)
* Blocked

| Source (State)    | Will you see the post?     |
|-------------------|----------------------------|
| Following         | ✅ Yes                      |
| Blocked           | ❌ No                       |

### Reporting Posts

If you encounter a post that violates the [community guidelines](https://docs.daily.dev/docs/for-content-creators/content-guidelines), you can report it. Click on the more options button (⋮) on the post card and select "Report" to notify the daily.dev team.

![daily.dev post card showing more options menu with report button highlighted for reporting inappropriate content](https://github.com/user-attachments/assets/5d544bf0-7e4d-466b-89f2-4f9e709eece1)

Once you click on "Report," you’ll be asked to confirm your action and select the reason for reporting the post. The daily.dev team will review the report and take appropriate action.


![daily.dev report confirmation dialog showing reason selection options for reporting posts that violate community guidelines](https://github.com/user-attachments/assets/b274c1ca-e630-4eda-814f-cb730a60afd6)
