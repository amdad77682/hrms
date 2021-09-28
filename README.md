## Notification System scopes in front end Integration
As i was appllied for fornt end (reactjs) so i will tell you about the scopes that i can do about notification system
 -Create some dummy apis that will provides the employee list, my leave list, all leave list and notification list
 -user can login to the system and can apply for leave, check the current status off leaves, get notification according to the notification preference
 



## Technology Used
  -Nextjs
  -Typescript
  -Firebase
  -tailwindCSS
  -redux
  -styled-component
  


## the basic model for notification 

```interface Inotification {
  _id: string;
  body: string;
  title: string;
  type: string;
  resource_id: string;
  to: string;
  status: string;
  image_url: null | string;
  redirect_url: null | string;
  timestamp: string;
}
```



## Configuration

### Set up a MongoDB database



### Set up environment variables



### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

## Deploy on Vercel


