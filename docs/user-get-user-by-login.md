---
title: Get a user by login
sidebar_label: Get a user by login
slug: /users/get-user-by-login
id: user-get-user-by-login
---
This endpoint allows you to get a user by their login (username)

### Endpoint

```
/v1/users/by/login?login={username}
```

### Endpoint Method
`GET`

### Authentication required?
No.

### Sample response:
```json
{
   "aboutDavid":{
      "isSupport":false,
      "isInfrastructureUser":false,
      "id":8045597,
      "avatarUrl":"https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/2914b08d-6d67-4702-96b8-155c2bf67b69-large.jpg",
      "avatarThumbnailUrl":"https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/2914b08d-6d67-4702-96b8-155c2bf67b69-small.jpg",
      "login":"aboutDavid",
      "name":"David",
      "location":null,
      "color":"#f9a47a",
      "description":"Uh hi! I'm David.",
      "hasCoverImage":false,
      "coverColor":null,
      "thanksCount":11,
      "utcOffset":-300,
      "featuredProjectId":null,
      "createdAt":"2019-10-26T01:48:36.394Z",
      "updatedAt":"2020-12-04T16:11:53.993Z",
      "features":[
         {
            "id":9927,
            "name":"custom_domains",
            "data":null,
            "expiresAt":"2120-02-19T20:25:00.808Z"
         }
      ]
   }
}
```