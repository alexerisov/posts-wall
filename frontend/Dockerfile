FROM node as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN  npx eslint -c .eslintrc.yml --ext .ts --ext .tsx
RUN npm run build
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]