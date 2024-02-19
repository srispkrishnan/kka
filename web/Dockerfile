FROM node:latest as builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/www .

ENTRYPOINT ["nginx", "-g", "daemon off;"]