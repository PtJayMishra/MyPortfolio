From node:20-alpine
Workdir /app
Copy package*.json ./
Run npm install
Copy . .    

EXPOSE 5173
 CMD [ "npm" , "run", "dev" ]