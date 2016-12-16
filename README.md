##Valerio P4

Hello and thank you for reviewing this project. I have worked hard on it since my last submission,
and i think i did a better job this time.

First of all, the main index.html and the pizza site are linked. I didn't include the other html pages as it would have
complicated the build system needlessly, considering the scope and objective of this project.

##Testing index.html

The project files have been reworked and refactored to make sense in the current environment, so opening the page with the
file protocol won't make them  work.
However, to access the unoptimized page is enough to run the project in dev mode.
The rubric doesn't specify wheter or not i could do this, so i thought taking a more realistic approach to the project
was possible and ideal.

To get up and running :

- cd to the current dir, and run npm install to get all the needed node modules.
- to enter dev mode, run npm start -s
- to build the project for deployment run npm run build -s

To check the pagespeed result for the deployment version, simply use tools like ngrok, downloading ngrok, cding to is download
location, and running ngrok http 3000 will be all that's needed to get a link for pagespeed tests.

#Testing pizza.html

The page and assets are linked to the main page, so just clicking on the url will be enough to reach it. Main modifications
to get the page to run properly, include refactoring of the changePizzaSide function, a reduction of the number of pizzas
being spawned, and a refactoring of the updatePositions function.
