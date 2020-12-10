---
title: Get a project
sidebar_label: Get a project
slug: /project/get-project
id: project-get-project
---
Get a project using its domain.

### Endpoint

```
/projects/hello-markdown
```

### Endpoint Method
`GET`

### Authentication required?
No.

### Sample response:
```json
{
   "private":false,
   "id":"9b9b56a6-87d3-40c6-b4bc-b19287e5f693",
   "description":"Server-side markdown renderer, using hello-webpage",
   "domain":"hello-markdown",
   "baseId":"929980a8-32fc-4ae7-a66f-dddb3ae4912c",
   "privacy":"public",
   "createdAt":"2020-10-28T19:15:55.290Z",
   "updatedAt":"2020-12-02T19:13:53.989Z",
   "deletedAt":null,
   "suspendedReason":"",
   "lastAccess":"2020-12-09T10:29:23.195Z",
   "avatarUpdatedAt":"2020-10-28T19:16:00.492Z",
   "showAsGlitchTeam":false,
   "isEmbedOnly":false,
   "notSafeForKids":false,
   "archivedAt":null,
   "users":[
      {
         "isInfrastructureUser":false,
         "id":8045597,
         "facebookId":null,
         "avatarUrl":"https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/2914b08d-6d67-4702-96b8-155c2bf67b69-large.jpg",
         "avatarThumbnailUrl":"https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/user-avatar/2914b08d-6d67-4702-96b8-155c2bf67b69-small.jpg",
         "login":"aboutDavid",
         "name":"David",
         "color":"#f9a47a",
         "description":"Uh hi! I'm David.",
         "hasCoverImage":false,
         "coverColor":null,
         "thanksCount":11,
         "utcOffset":-300,
         "featuredProjectId":null,
         "projectPermission":{
            "userId":8045597,
            "projectId":"9b9b56a6-87d3-40c6-b4bc-b19287e5f693",
            "accessLevel":30,
            "lastAccess":"2020-12-02T19:13:55.386Z",
            "createdAt":"2020-10-28T19:15:55.295Z",
            "updatedAt":"2020-12-02T19:13:55.396Z"
         }
      }
   ],
   "teams":[
      
   ]
}
```