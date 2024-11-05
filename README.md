Step 1  Initialize a New Node.js Projec
   Initialize a New Node.js Project
   Open your terminal/command prompt and create a new folder for your project , Run Comment mkdir my-express-app

Step 2  Run npm init
     Run npm init to create a package.json file. This file holds metadata about your project
     Run Comment - >  npm init -y
Step 3  Install Express
     Install Express , Now, install the Express framework using npm
     Using  comment npm install express

Step 4 Create Your Application Files
     create index.file or setup tha serve using  express js 
Step 5  Run Your Application
     Setup script  part inside package.json add index.js file inide script part "Script" :" node index.js" 
     after that Run commant node run serve it will run whole project 

Step 6  Test Your Server
     Open your web browser and visit http://localhost:3000. You should see the message "Hello World!" displayed.
Step 7 Create Routes: 
     Create Routes: You can create more routes by using
    app.get('/github', (req, res) => {
    res.send('https://github.com');
    });
