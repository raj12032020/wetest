### Assumptions:
- The app is old and it doesnt schedule any event.
- Since I dont have an android phone, assuption is the generated apk and - the test will work on phone too
- Also the app has few bugs, so havent covered automating MVP test case
- node and npm are already installed

### Setup
- Clone the project
- and then 
```shell
$ npm install --save-dev @wdio/cli
```

- The appium service is specified as part of the configuration, so no need to install appium seperately.

Install an Emulator or if it is device, update the wdio.conf.js file in the capabilities section

### Running
```
$ npx wdio wdio.conf.js
```

### Finaly
Any difficulty in following this ReadMe file, please ask back