---
slug: progress-is-progress
title: Progress is Progress
author: Fuwn
author_title: Whirlsplash Core Team
author_url: https://github.com/fuwn
author_image_url: https://avatars.githubusercontent.com/u/50817549?v=4
tags: [status, info]
---

A lot has happened since the [last blog post](2021-04-09-the-state-of-whirl.md).

## What has happened

For starters, the Go rewrite which was previously mentioned has been scraped for now. A complete
rewrite has been performed *once again* in [Rust](https://www.rust-lang.org/) -- the original plan.

I will soon be publishing the current (rewrite) source of Whirl within the
[official GitHub repository](https://github.com/Whirlsplash/whirl) as new development branch.

## Issues that remain

There are still few issues which are present such as a known issue where the client is not properly
transferred over to the Hub (RoomServer) when it is finished communicating with the Distributor
(AutoServer). This issue is only apparent about 50% of the time but it is still of high priority.
You can find it's corresponding GitHub issue [here](https://github.com/whirlsplash/whirl/issues/2).

## But does it work ?

Despite these setbacks, issues, et cetera, the implementation is functional as you can see in the
image below.

<img src="/img/blog/2021-04-21-progress-is-progress/ss-client-connected-to-server.png"
  alt="Client connected to server"
  width="100%" />

The Distributor (AutoServer) is close to 95% functionality (compared to the official servers), where
as the Hub (RoomServer) is estimated to be at ~5 - ~10% functionality.

## Plan (s) going on

In the following weeks, focus will be aimed at (priority as follows);

1. Fixing the Distributor to Hub transfer [issue](https://github.com/whirlsplash/whirl/issues/2)
2. Implementing more of the Hub's known features
    - No specifics, features will be implemented as I see fit and will be based mostly off of their
      priority in the functionality of the Hub (RoomServer).

      E.g., is "a" needed for "b" to work? is "c" important right now?
