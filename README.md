## Installation
```sh
npm install postimg.cc
```
### Using
```js
const ImageUrl = require("postimg.cc")
(async ()=>{

let url = await ImageUrl("https://example.com/image.png")
  console.log(url)
})()
```