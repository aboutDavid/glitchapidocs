### Modifying a entry
Every page has a `Edit this page` button, which should allow you to edit the page.
![](https://file.coffee/u/e0rpDtj0-l.png)

### Adding a new entry
1. Create a new file in `docs` with the format of `s<ection>-<thing-it-does>.md` where `<section>` is what it is for, like if it gets info about a project, then you would replace `<section>` with `project` and `<thing-it-does>` is what it does, like if it gets the project readme, you would replace `<thing-it-does>` with `project-readme` or something like that.
2. In that file, copy and paste the content of [this gist](https://gist.github.com/aboutDavid/3eea3e8d5d799562e9e8606ccf69b486/raw/7f0105c0b1116339d29ed7f4a1dced70fa0bf8f0/sample-docpage.md) into that file, changing details that was talked about in step 1. Note: make the id section unique and 
3. Add your doc's id to `sidebar.js`. Each section is a JSON key. So to make a new section, just add the following:

```
"Section name": ["<your-unique-doc-id>"]
```

however, you might not have to as there should be a section for your doc.

4. Make a Pull Request.


### Add your self to the contributors list
See [this issue](https://github.com/aboutDavid/glitchapidocs/issues/2)
