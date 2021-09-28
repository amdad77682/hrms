# Notification System Proposal 

Firstly i have to told you that i was appllied for fornt-end (reactJs). Though i was previously work for some backend microservice so i will share your the full plan how can we bulild up a proper hrms along with notifications

  ### Scopes in Integration
  
   #### Front-End
    -Tech should be used: Nextjs/ReacJs, Javascript/Typescript, Firebase, TailwindCSS 
    -there is a login system, after login the login token saved in cookie, login token could provide the user role(Employee/Mamager/Hr Manager) when i decript with JWT
    -after login user can see the leave applications that he/she applied for, manager can a accept/reject applications from all application sections
    -Every employee can get push notification for any updates of application depending on preffered settings
    
    


   #### Back-End
     -Tech should be used: Nodejs, mongodb
     -Some apis for leave applications, employee login, employee profile edit update and details.
     -profile edit api should has SMS notitifaication, Email notification and FCM push notification
     -accept/reject application api should has SMS notitifaication, Email notification and FCM push notification
     
 
   Model for notification
     
    
    interface Inotification {
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
   
  1. title could be "Accpet Leave application"
  2. body could be "Your application is rejected due to..."
  3. types are "leave_accept" | "leave_reject"| "leave_application" |"profile_update"
  4. to could be the user name
  5. resource_id could be the leave application id
  6. image_url if any image need 
  7. redirect_url onclick redirect
  8. timestamp notification time
  
 ## Notification According to topice
 
  Subcription Topices
           
        - topice/update-info/<username>
        - topice/leave-application/all
        - topice/leave-application-update/<username>
    
    
# Implementation 


## User Journey should be
   ### login as a Employee
      -can see his own applied leaves
      -can apply for leave
      -get updates about applications(accept/reject) via push notification
   ### login as a Manager
      -can see his own applied leaves
      -can apply for leave
      -get updates about applications(accept/reject) via push notification
      -also get updates about Employee applications that are assigned to him via push notification and notification list
      -also the applied applications are visible in all applied leave list
   ### login as a HR Manager
      -can see his own applied leaves
      -can apply for leave
      -get updates about applications(accept/reject) via push notification
      -also get updates about Employee applications that are assigned to him via push notification and notification list
      -also  the applied applications are visible in all applied leave list
      
 
## Technology Used
      -Nextjs
      -Typescript
      -Firebase
      -tailwindCSS
      -redux
      -styled-component
  









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




