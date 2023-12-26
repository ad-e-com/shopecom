FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]

#docker build -t my-angular-app .
#docker run -p 4200:4200 my-angular-app