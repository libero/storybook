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
# Stage: Storybook environment
#
FROM node AS storybook

COPY --from=npm /app/ .
COPY .storybook/ .storybook/



#
# Stage: Development environment
#
FROM storybook AS dev
ENV NODE_ENV=development
EXPOSE 8080

CMD ["npx", "start-storybook", "--port", "8080"]

HEALTHCHECK --interval=30s --timeout=1s \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1
