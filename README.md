# SAPUI5 Component Reuse Test

## Intro
This is a test app to verify the mechanism to reuse components.

To resuse a component is necessary to:
- Add its source in `webapp/index.html` using attr data-sap-ui-resourceroots (Only in dev env, this is not necessary in SAP App Server):
```html
    <script id="sap-ui-bootstrap"
        src="https://sapui5.hana.ondemand.com/1.52.13/resources/sap-ui-core.js"
        data-sap-ui-libs="sap.m,iamsoft.libs.external.polyfill"
        data-sap-ui-theme="sap_belize"
        data-sap-ui-compatVersion="edge"
        data-sap-ui-preload="async"
        data-sap-ui-resourceroots='{
                "iamsoft.test.component.reuse": "./",
                "iamsoft.libs.external.polyfill": "resources/external-libs/dist/",
                "iamsoft.test.lib": "resources/test-external-libs/dist/"
                }'>
    </script>
```
In this case `Gruntfile.js` contains a mapping between resorces and node_modules.

- Declare component usage in `manifest.js` and give it a name:
```json
    "componentUsages": {
        "myreuse": {
            "name": "iamsoft.test.lib",
            "settings": {},
            "componentData": {}
        }
    }
```

- Encapsulate its usage in a view, using a ComponentContaine:
```xml
    <core:ComponentContainer propagateModel="true" usage="myreuse" async="true"></core:ComponentContainer>
```

## Getting started

1.Install node.js (get it from [nodejs.org](http://nodejs.org/)).
  * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2.Install grunt-cli globally

```sh
npm install grunt-cli -g
```

3.Clone the repository and navigate into it

```sh
git clone https://github.com/sebasgoldberg/test-reuse-component.git
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
