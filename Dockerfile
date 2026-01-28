###—————————————————————————————————————#
## BUILD IMAGE                         ##
#—————————————————————————————————————###
FROM node:20-alpine AS build
WORKDIR /app

# install deps with pnpm
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# copy code
COPY . .

# build
RUN pnpm run build
RUN pnpm prune --prod

###—————————————————————————————————————#
## PRODUCTION RUNNER                   ##
#—————————————————————————————————————###
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g pnpm

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

CMD ["node", "dist/main"]
