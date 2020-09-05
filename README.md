cat <<END > ~/.aws/config
[default]
region=ap-southeast-1
END

sudo apt-get install -y nodejs

npm install -g npm
npm install -g @aws-amplify/cli (get 4.27.3)->update to 4.28.1->4.29.0

no need "amplify configure"as already set ~/.aws/config

Option#1 with React
npx create-react-app workingDirectory
cd workingDirectory
npm start

Option#2 without React
mkdir workingDirectory
cd workingDirectory

Goto Amplify console,
Connect to Git
User: piyapoonsawat@yahoo.com
Pass: git1q2w#E$R

Working with git
Sample of Command
// create a new repository
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/piyapoonsawat/tbxReactBackend.git
git push -u origin master

// push an existing repository
git remote add origin https://github.com/piyapoonsawat/tbxReactBackend.git
git branch -M master
git push -u origin master

//Update
git add .
git commit -m “Rev 1”
git push origin master


amplify init (use AWS profile and select "default" profile)

check amplify dashboard to see the project

"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

amplify add auth (select without social, using email and phone)

Facebook setup: by getting Domain in Cognito,
(1) setup in "Settings -> Basic Information"
(2) in "Facebook Login -> Settings", A valid OAuth redirect URI looks like
"https://tbxbackend9314f854.auth.ap-southeast-1.amazoncognito.com/oauth2/idpresponse"
782963109145090
864e588cceadab268e9b5f95a4bad94d
email,public_profile


Google setup: by getting Domain in Cognito,
(1) create Credential -> Oauth2
(2) in original "https://tbxbackend9314f854.auth.ap-southeast-1.amazoncognito.com"
(3) in redirect "/oauth2/idpresponse"
83368141490-ei2icl3iaeq4vhvtdn6rcjuq6doq9him.apps.googleusercontent.com
AsIwOX52jKH3t3qYukavSDzF
profile email openid

amplify add api 

