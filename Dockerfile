FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/angular18/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
