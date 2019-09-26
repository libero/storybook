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

CMD ["sleep", "86400"]

HEALTHCHECK --interval=5s --timeout=1s \
    CMD node --version
