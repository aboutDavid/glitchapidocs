---
title: List all custom domains for a project
sidebar_label: List all custom domains for a project
slug: /editor/list-all-custom-domains
id: editor-list-all-custom-domains
---
This endpoint lists all custom domains for a project

### Endpoint

```
/v1/projects/{project_id}/domains
```

### Endpoint Method
`GET`

### Authentication required?
Yes. You must set the `Authorization` header to your persistent token. You can learn how to find it [here](/docs/#getting-your-persistent-token).

### Sample response:
```json
{
   "items": [
      {
         "hostname":"aboutdavid.me"
      },
      {
         "hostname":"notebook.aboutdavid.me"
      },
      {
         "hostname":"chameleon.js.org"
      }
   ]
}
```