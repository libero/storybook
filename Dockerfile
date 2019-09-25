FROM node:10.16.3-alpine AS node
WORKDIR /app



#
# Stage: NPM install
#
FROM node AS npm

COPY package.json \
    package-lock.json \
    ./

RUN npm install



#
# Stage: Development environment
#
FROM node AS dev
ENV NODE_ENV=development

COPY --from=npm /app/ .

CMD while :; do :; done & kill -STOP $! && wait $!
