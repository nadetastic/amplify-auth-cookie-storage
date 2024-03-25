# Cookie Storage

Each app should be using an Amplify Configuration witht he same userPool id as well as the same clientId

Example:

```js
userPoolId: 'your_user_pool_id',
userPoolClientId: 'your_user_pool_client_id'
```

Cookie storage is configured for the token storage mechanisim that can use the same domain or any domain, ex "\*"
