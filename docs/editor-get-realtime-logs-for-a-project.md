---
title: Get realtime logs for a project
sidebar_label:  Get realtime logs for a project
slug: /editor/get-realtime-logs-for-a-project
id: editor-get-realtime-logs-for-a-project
---
Get all projects in a collection

### Endpoint

```
wss://api.glitch.com/{projectid}/logs?authorization={persistent_token}
```

### Endpoint Method
`Websocket`

### Authentication required?
Yes. You must send it as the query paramater authorization` with the value of your persistent token

### Sample response:
```json
{
   "process":"signal",
   "timestamp":1607573166246,
   "text":"Node 12"
}
```

:::important

You must send a message with the words `keep alive` every few seconds, otherwise the websocket will disconnect.

:::