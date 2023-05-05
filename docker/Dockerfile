FROM node:20-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN apk update && apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

FROM node:20-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app .
COPY . .
RUN apk update && apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm build
RUN pnpm prune --prod
RUN rm -rf src
EXPOSE 3000