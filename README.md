# Frontend to Wordpress CMS

## Getting started

1. Clone repo
```bash
git clone https://github.com/rokkomini/cms_frontend.git
```
2. Install NPM packages
```bash
npm install
```
3. Add .env file at the root of your project and change "API" to your API
```javascript
REACT_APP_API_URI=API
```
4. Wordpress.com is required to run this app, either your own account or contact admin to get access.
----
## Run locally

```bash
npm start
```

The project should launch on your localhost.

-----
## Deployment

Deployment was made with [Vercel](https://vercel.com/)

- Create your account
- link your Vercel account with Github 
- choose which repository to deploy
- add environment variable (what is stored in .env) [see guide](https://vercel.com/docs/concepts/projects/environment-variables)
- Deploy project
- **Push to main branch to deploy changes**

----
