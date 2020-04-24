// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'oaekdt03yf'
export const apiEndpoint = `https://${apiId}.execute-api.eu-west-3.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-xddzh8er.auth0.com',            // Auth0 domain
  clientId: 'Nq735m5rdsbnPZGZ8yr05DIeqQBk6vnW',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
