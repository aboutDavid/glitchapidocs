---
title: Get all projects in a collection
sidebar_label:  Get all projects in a collection
slug: /collection/get-all-projects
id: collection-get-all-projects
---
Get all projects in a collection

### Endpoint

```
/v1/collections/by/fullUrl/projects?orderKey=createdAt&orderDirection=ASC&fullUrl={username}/{collection_name}
```

### Endpoint Methond
`GET`

### Authentication required?
No.

### Sample response:
```json
{
   "items":[
      {
         "private":false,
         "id":"725de3a9-298a-4bc3-a7a6-e59f4c94eee8",
         "description":"Create your own Ghost 3 blog by remixing this project",
         "domain":"ghost",
         "baseId":"543dcaed-98ef-4deb-a8b4-415c8c2cae0d",
         "gitRepoUrl":null,
         "privacy":"public",
         "suspendedReason":"",
         "avatarUpdatedAt":"2019-10-24T21:45:19.489Z",
         "showAsGlitchTeam":false,
         "isEmbedOnly":false,
         "remixChain":[
            "5acf512a-88cf-49e7-96a7-97106fa47ba2",
            "47de33c8-3df7-4b66-adf2-fdb2279c3913",
            "90c3fc67-fc2a-4d4d-9894-e43af3dfa680",
            "21b89e23-abbc-4059-b8e5-c55580be6ece",
            "ed2c81c1-dd1a-47b7-9f1d-dac2310fd165",
            "7e0ff2cf-0beb-4d19-ab50-27c8ff515482",
            "543dcaed-98ef-4deb-a8b4-415c8c2cae0d"
         ],
         "notSafeForKids":false,
         "createdAt":"2019-10-24T21:45:23.727Z",
         "updatedAt":"2020-07-30T20:54:53.768Z",
         "permissions":[
            {
               "userId":334152,
               "accessLevel":30
            }
         ],
         "features":[
            
         ],
         "note":"",
         "projectOrder":-12,
         "teamIds":[
            74
         ],
         "allFeatureNames":[
            
         ]
      }
   ]
}
```