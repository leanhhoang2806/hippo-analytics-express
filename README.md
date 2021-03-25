# hippo-analytics

## ADD DB DATA
To run the app on local docker: 
`docker-compose -f stack.yml up --build`
To Shutdown everything:
`docker-compose -f stack.yml down -v --rmi all`

## Work stuff
2. To install Js package dependencies, move the the folder contains `package.json` which is `/Users/hoang/Documents/work/Risk-Analytic-platform/hippo-analytics/hello-world`

3. To debug a file => `node path-to-file.js`

4. start node server => `node app.js`
```
For anyone running on a Mac, Docker for Mac allows you to connect to localhost from within a container by making requests to http://host.docker.internal
```
https://github.com/aws/aws-sam-cli/issues/669

5. Flyway migration documentation followed to added into this project
https://flywaydb.org/documentation/getstarted/firststeps/commandline
if running into network problem with local docker postgres follow explanation of this link
https://stackoverflow.com/questions/31324981/how-to-access-host-port-from-docker-container/43541732#43541732