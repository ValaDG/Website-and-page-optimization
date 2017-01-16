##WebSite Javascript Environment test

Hello, this project goal is to use webpack and npm scripts to create production ready html js and css, to heavily improve a page performance.

The tools themselves have been put togheter by a pluralsight author, i have left the name in the main npm file.

The original project was created to run whitin the file protocol, it took some rework to adapt it to the current environment.

Some tools used in the build process may be called from a local global installation instead of a project one, so the build process may break. This was just a test, but i managed to achieve a 100 pagespeed score. Go webpack!

To get up and running :

- cd to the current dir, and run npm install to get all the needed node modules.
- to enter dev mode, run npm start -s
- to build the project for deployment run npm run build -s

To check the pagespeed result for the deployment version, simply use tools like ngrok, downloading ngrok, cding to is download
location, and running ngrok http 3000 will be all that's needed to get a link for pagespeed tests.
