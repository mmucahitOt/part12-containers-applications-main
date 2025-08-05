FROM node:20-alpine AS build_stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build_stage /usr/src/app/dist /usr/share/nginx/html