---
title: 👀 Look over here!
sidebar_label: 👀 Look over here! 
slug: /
id: readme
---

Welcome to the Glitch API docs.

**Note:** this is not ran by Glitch.

This website contains known API routes, cool features, new Glitch announcements, etc. We also have a blog which is located [here](/blog)

The base url for all endpoints is currently `api.glitch.com`

:::caution

The Glitch API is very unstable and can change anytime. If you find anything that changed/thats new, please make a Pull Request.

:::

### Getting your Persistent Token
Your persistent token must be kept secret. it's like your Glitch account password for Glitch's API. Go to [Glitch's editor](https://glitch.com/edit/#!/) (does not matter which project), and open the DevTools console. Run the following command in it:

```
JSON.parse(localStorage.cachedUser).persistentToken
```

The output should look like this:

```
"v9za2z1-44rcm5i-8bvosjz-37q46h4-wxzmsz1"
```

Now remove the quotation marks:

```
v9za2z1-44rcm5i-8bvosjz-37q46h4-wxzmsz1
```

There is your Persistent Token!
Keep it secret! If it gets leaked, email [support@glitch.com](mailto:support@glitch.com)