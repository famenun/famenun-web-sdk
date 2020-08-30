
# Famenun SDK

Famenun SDK let's you acess all available APIs for Famenun Apps through high level and well explained SDK APIs.

  - NPM based
  - Well explained APIs and references
  - Open Source

# New Features!

  - Now you can register hooks
  - Some bugs removed

### Installation

Famenun CLI requires [Node.js](https://nodejs.org/) v4+ to run.

Just get your hand on Famenun-CLI from NPM using following command

```sh
$ npm install @famenun/web
```
or
```sh
$ npm i @famenun/web
```

### Usuage

**While using through NPM**
```
import * as SDK from "famenun/web"
(async () => {
  await SDK.init("your-website-id"); // you ll get this from your devs console
})();
```
**While using though js file**
```
<script src="./famenun_web_sdk.js"></script>
<script>
  (async () => {
    await __famenun__.init("your-website-id"); // you ll get this from your devs console
  })();
</script>
```

### Development

Want to contribute? Great!
We need contributers
play with repo and let us know

### Todos

 - Write All Tests
 - Better code

### Important Resources

 - [Famenun For Developers](https://developers.famenun.com/)
 - [Famenun App Docs](https://developers.famenun.com/docs)

License
----

MIT


**Free Utility, We all love that!**
