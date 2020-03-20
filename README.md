This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Budget Planner deployment explanation on github Pages

After git clone the master branch to your local, in the project directory, you can run:

### `npm start`

#### `Auth0 configuration`

For this project, I used Auth0 for authentication. In order to run the code in your local environment, you need to register [Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D) and create Application with setting following params: <br />
REACT_APP_AUTH0_DOMAIN: Auth0 domain <br />
REACT_APP_AUTH0_CLIENT_ID: Autho0 Client ID <br />
REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000/yourrepository <br />
REACT_APP_AUTH0_RETURNTO_URL=http://localhost:3000/yourrepository <br />
REACT_APP_REPOSITORY: yourrepository <br />

**yourrepository is optional but adding it can make the github page deployment easier**

For details, please reference this tutorial: [https://auth0.com/docs/quickstart/spa/react](https://auth0.com/docs/quickstart/spa/react)<br />

Once Auth0 is done, you can copy the domain and client id into the .env file and then you can run **npm start** to run the project locally.

### `npm run deploy`

This will deploy the project into github page in your repository. <br />
After deployment, you can open http://gitUserName.github.io/yourrepository to view it in the browser.

**Notice:** since github page doesn't run project under root, you need to add .env file and add the environment variable in the .env before deployment:<br />
REACT_APP_AUTH0_DOMAIN: Auth0 domain <br />
REACT_APP_AUTH0_CLIENT_ID: Autho0 Client ID <br />
REACT_APP_AUTH0_CALLBACK_URL: http://gitUserName.github.io/yourrepository <br />
REACT_APP_AUTH0_RETURNTO_URL: http://gitUserName.github.io/yourrepository <br />
REACT_APP_REPOSITORY: yourrepository <br />

_I set the callback url to be identical with return to url to avoid github pages client-side routing issue_ <br />
**You can also add these environment variables as repository Secrets and setup github actiosn to utilize them**

You also need to change the homepage in package.json:

"homepage": [http://gitUserName.github.io/yourrepository]

You can reference this tutorial for more details for github page deployment:
[https://create-react-app.dev/docs/deployment/](https://create-react-app.dev/docs/deployment/)

## Deploy to Heroku

**Heroku is recommended since it handles client-side routing better and is easier to utilzie environment variables**
<br />You can either deploy this project to Heroku using Heroku Dashboard or Heroku CLI<br />
Please reference this tutorial for Heroku deployment: [https://blog.heroku.com/deploying-react-with-zero-configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)

**Notice:** you can delete the homepage in package.json since Heroku can run under root. <br />.env file can also be deleted since you can add env variables through Heroku Dashboard or CLI

I also deployed this project to heroku for your reference: [https://reactbudget.herokuapp.com/](https://reactbudget.herokuapp.com/)
