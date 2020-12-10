---
title: Search for user
sidebar_label: Search for user
slug: /users/search
id: user-search
---

### Description:
This endpoint allows you to search for users.

### Endpoint

```
/users/search?q={query}
```

### Sample response:
```json
[
   {
      "isInfrastructureUser": false,
      "id": 8105878,
      "facebookId": null,
      "avatarUrl": "https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/6bc8e706-a8e5-49be-adea-a83ed845aea7-large.jpg",
      "avatarThumbnailUrl": "https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/6bc8e706-a8e5-49be-adea-a83ed845aea7-small.jpg",
      "login": "RiversideRocks",
      "name": "Riverside Rocks",
      "color": "#ffebc9",
      "description": "Welcome!",
      "hasCoverImage": true,
      "coverColor":" rgb(12,60,124)",
      "thanksCount": 13,
      "utcOffset": -300,
      "featuredProjectId": null
   }
]
```