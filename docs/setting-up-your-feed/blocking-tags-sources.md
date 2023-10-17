---
sidebar_position: 3
---

# Blocking tags and sources

Customizing your daily.dev feed has never been easier, but sometimes there are specific tags or sources that you simply don't want to see. That's where blocking comes in handy.

Watch this quick overview video to quickly understand how to block sources and tags for a more tailored feed experience.

<iframe width="700" height="400" src="https://www.youtube.com/embed/10ECCjEdHK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How does blocking work?

Blocking empowers you to:

1. Remove all posts that contain a [specific tag](#blocking-tags) : Say goodbye to unwanted content by blocking specific tags that don't interest you.
2. Remove all posts that come from a [specific source](#blocking-sources) : Keep your feed free from content from specific sources that you don't prefer.

:::info
Please note that blocking is only applied to posts displayed in your "My Feed" feed. It does not affect content in the Popular, Most Upvoted, or Best Discussions feeds.

To make the most out of the blocking features, be sure to set up your personal feed. Customize your daily.dev experience to suit your preferences and enjoy a curated feed tailored just for you.
:::

## Blocking tags and sources from the feed

Blocking tags and sources can be done directly from the feed. Whenever you see a post with a tag/source you wish to block, click on the more options button (⋮) (1)

<img src="https://daily-now-res.cloudinary.com/image/upload/v1663521933/docs-v2/advanced-filters-and-blocking-b1.jpg" alt='Options button located top right of a post card (1)' width="900" height="900" />

- **To block a tag:** Choose “Not interested in (tag_name)“ (2)
- **To block a source:** Choose "Don't show posts from (source_name)" (3)

<img src="https://res.cloudinary.com/dindl96sm/image/upload/v1696951495/ivg7czqjqsrvqif9amby.png" alt='Options menu open highlighting three "not interested in" tags (2) and one "Dont show posts from" (3)' width="900" height="900" />

Once clicked, the blocked tags and sources will be removed from your feed.

You will also see a toast notification confirming you have blocked a tag or source. 

If you have blocked a tag or source by mistake you can click "Undo" in the toast to reverse the action.

:::tip
If you can't find a post from a specific tag or source you wish to block, try using the [search feature](/docs/key-features/search). 
:::

## Unblocking tags and sources

To unblock tags or sources in your daily.dev feed, follow these simple steps:

1. Click on the "My Feed" filter button to open the feed options menu.
2. Click on "Blocked Items" in the options menu.
3. You will see a list of all the blocked tags and sources that you currently have selected.
4. Click on the "unblock" icon next to a blocked item to unblock it.

<img src="https://daily-now-res.cloudinary.com/image/upload/v1681289318/docs/Update%20April%202023/Screenshot_2023-04-12_at_11.48.32.png" alt='Options menu open highlighting three how to unblock items' width="900" height="900" />

Items with the unblocked tag or source will start appearing in your feed again. With these easy steps, you can easily manage and customize your daily.dev feed to suit your preferences and interests.

## Advanced information about how blocking works

### Blocking tags

Tags can have the following states:
* Following / Not following
* Blocked 


| Tag A (State)     | Tag B (State)     | Will you see the post?     |
| ---               | ---               | ---                           |
| Following         | Following         | ✅ Yes                        |
| Following         | Not following     | ✅ Yes                        |
| Not following     | Not following     | ❌ No                         |
| Not following     | Blocked           | ❌ No                         |
| Following         | Blocked           | ❌ No                         |


### Blocking sources

A source can have the following states:
* Following (default for all sources)
* Blocked 

| Source (State)    | Will you see the post?     |
| ---               | ---                           |
| Following         | ✅ Yes                        |
| Blocked           | ❌ No                         |
