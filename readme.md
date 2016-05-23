#######nodejs server#######
  cd server
  npm install
  node server.js
  > http://localhost:5000/sessions
  > http://localhost:5000/sessions/3





#######ionic client#######
  cd client
  ionic serve
  > http://localhost:8000





#######run it in android#######
1. install ionic
2. install android sdk (your can install android studio which include sdk)
3. create a avd(better with android 23 - v6.0)
4. change the restful url from localhost to 10.0.2.2
5. ionic platform add android
6. ionic build android
7. ionic emulate android (if app not installed, just Ctrl C and rerun the command)
