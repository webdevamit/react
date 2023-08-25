# Setting up an myapp development environment.

### `Prerequisites`

The following steps will need to be carried out before checking out the myapp source code for the first time:

- Download and Install Node.js from [http://nodejs.org/](http://nodejs.org/) and run the installer. We suggest you use the latest Long Term Support (LTS) version - currently v12.13.1

- You will need to install GIT version from [https://git-scm.com/downloads](https://git-scm.com/downloads).
- Create a local folder like C:\code
- Git clone the myapp source from [https://stash.dts.fm.rbsgrp.net/scm/myapp/myapp.git](git:https://stash.dts.fm.rbsgrp.net/scm/myapp/myapp.git)
- You need to setup GIT for code check in, use link for git setup [Git Cheat Sheet](https://confluence.dts.fm.rbsgrp.net/display/FXO/Git+Cheat+Sheet)
  (Optionally use a git gui e.g. GitKraken or VSCode/SublimeText also have git ui's)
- Install VSCode (Recommended) for Code edit and view from [https://code.visualstudio.com/](https://code.visualstudio.com/)
- For Europa hosts, you need to add an entry to your local hosts file (usually located C:\Windows\System32\drivers\etc). The entry is required to make the browser
  think that hosting is occurring on a FM host. This is required because when we pass the host url (as redirect query string), the redirect url must be FM domain for SSO to set the correct cookies. If SSO see a Europa redirect (e.g. rbsres01) then we cannot access the sso token. Entry to hosts must be a new line in following format (replacing `GBMACVCSW1234` with your Europa host):-
  `127.0.0.1 GBMACVCSW1234.fm.rbsgrp.net http://GBMACVCSW1234.fm.rbsgrp.net #myapp development`

Once the code has been checked out say in `c:\code\myapp` folder, open git console, navigate to myapp root folder `c:\code\myapp` and run following commands.

### `npm install`

npm install runs 4 npm installs on folders automation, desktop, angular and react to install all dependencies of these components. Following are these internal commands

- `npm run install-angular` : Installs the dependencies of angular version of myapp
- `npm run install-react` : Installs the dependencies of react version of myapp
- `npm run install-dev`" : Installs the dependencies of dev-server
- `npm run install-automation` Installs the dependencies of Automation

You can choose to run individual commands to install of this composite command. Say if you are working on something in angular version only, then just run `npm run install-angular && npm start`

### `npm start`

- Runs the myapp angular and react servers in dev mode at port 8081<br>
- The once both angular and react servers are up, angular and react myapp can be accessed from following urls.
- [http://localhost:8081/xclient/myapp](http://localhost:8081/xclient/myapp)
- [http://localhost:8081/xclient/v2/myapp](http://localhost:8081/xclient/myapp)
  > (note: You may experience constant reloads due to SSO redirecting, if so use fully qualified localhost name e.g. `http://server.fm.rbsgrp.net:8081/xclient/myapp`)

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run desktop`

- Starts the myapp desktop which points to your local dev environment

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the all individual apps for production to the `build` folder within themselves.<br>
Like ./desktop/build, ./angular/build and ./react/build.<br>

It correctly bundles all application in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

### `npm run automation`

Runs the automation suite of myapp pointing to your local dev environment.
