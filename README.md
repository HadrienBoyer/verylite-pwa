# \VeryLite-PWA

<div align="center"><img src="/public/images/title.png" /></div>

---
Create a very lightweight PWA ([Progressive Web App](https://en.wikipedia.org/wiki/Progressive_web_app)) that is aim to pass the 100% score in [Google Lighthouse](https://en.wikipedia.org/wiki/Google_Lighthouse).

*Follow the instructions bellow, and enjoy.*

## Make it run

**Clone the repo, and run it manually with the following command line:**

1. Go to the root directory of the project: `cd verylite-pwa`
2. Install the Node dependencies with `npm install`
3. Finally, run `npm run server-debug` and launch with your favorite browser this URL: [http://localhost](https://localhost)
4. If it's working, you can use the command `npm run server` to run the server without debugging.
5. If not, you can try to open Google Chrome on Mac without the `https` restrictions:

```bash
  open 'Applications/Google Chrome.app' --args --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost
```

If you need to generate the certs for your localhost, you can use:

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

***Other options are available:***

- [Follow the procedures of this Gist by @cecilemuller.](https://gist.github.com/cecilemuller/9492b848eb8fe46d462abeb26656c4f8#file-2019-https-localhost-md)
- [You can use plugins to generate your key/certificate pair, like *Swissknife for VSCode*.
Open the command pallette and click "Self signed certificate."](https://marketplace.visualstudio.com/items?itemName=luisfontes19.vscode-swissknife)

• *To test using Chrome with invalid certs use the following to open the browser:*

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost
```

### Contributing

- Clone the repository and make a new pull request
- Create a new pull request on github and follow the pull request guidelines
- Add new feature and contact me to add it to the project :)

### Inspiration

1. **PWA-101**: help/base boilerplate for this repo, thanks.
