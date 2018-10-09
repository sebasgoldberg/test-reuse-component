# openui5-basic-template-app
This is a basic app template which you can use as a starting point to build OpenUI5 apps.

## Getting started

1.Install node.js (get it from [nodejs.org](http://nodejs.org/)).
  * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2.Install grunt-cli globally

```sh
npm install grunt-cli -g
```

3.Clone the repository and navigate into it

```sh
git clone https://github.com/sebasgoldberg/openui5-basic-template-app.git
cd openui5-basic-template-app
```

4.Install all npm dependencies

```sh
npm install
```

5.Run grunt to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).

```sh
grunt
```

7.Open the app in your browser: [http://localhost:8082](http://localhost:8081)

## Some notes

1.You can code using ES8.

2.Is possible to use async/await (babel-polyfills already imported in Component).

3.Transpiled version is served in port 8081, and Dist version in port 8082 (see grunt file).

4.UI5 preload compatible version was set for the current LTS version: 1.52.

5.Remember to change to your own namespace.
