FROM nginx:1.17.4-alpine as nginx
WORKDIR /usr/share/nginx/html

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
# Stage: Basic Storybook
#
FROM node AS storybook

COPY .eslintignore \
    .eslintrc.js \
    ./
COPY --from=npm /app/ .
COPY .storybook/ .storybook/
COPY src/ src/



#
# Stage: Development environment
#
FROM storybook AS dev
ENV NODE_ENV=development
EXPOSE 8080

COPY .babelrc \
    gulpfile.babel.js \
    ./
COPY test/ test/

CMD ["npx", "start-storybook", "--port", "8080"]

HEALTHCHECK --interval=5s --timeout=1s \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1



#
# Stage: Production build
#
FROM storybook AS build
ENV NODE_ENV=production

RUN npx build-storybook --output-dir build



#
# Stage: Production environment
#
FROM nginx AS prod
EXPOSE 8080

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ .

HEALTHCHECK --interval=5s --timeout=1s \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ping || exit 1
