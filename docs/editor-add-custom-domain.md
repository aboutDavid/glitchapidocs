---
title: Add a custom domain to your project
sidebar_label: Add a custom domain to your project
slug: /editor/add-custom-domain
id: editor-add-custom-domain
---
Adds a custom domain to your project

### Endpoint

```
/v1/projects/{project_id}/domains
```

### Endpoint Method
`POST`

### Authentication required?
Yes. You must set the `Authorization` header to your persistent token. You can learn how to find it [here](/docs/#getting-your-persistent-token).

### Sample response:
```json
{
   "hostname":"aboutdavid.me",
   "preview_hostname":"6o92gzk77jyxwkyq.preview.edgeapp.net",
   "dns_configured":false
}
```