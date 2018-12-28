FROM node:11-alpine as yarn-builder

LABEL author="Virgilio Missão Neto <virgilio.missao@gruponewway.com.br>"

RUN mkdir /app

WORKDIR /app

COPY ./ ./

ENV PATH /root/.yarn/bin:$PATH

RUN apk update \

 && apk add curl bash binutils tar \

 && rm -rf /var/cache/apk/* \

 && /bin/bash \

 && touch ~/.bashrc \

 && curl -o- -L https://yarnpkg.com/install.sh | bash

RUN yarn --production



FROM node:11-alpine

LABEL author="Virgilio Missão Neto <virgilio.missao@gruponewway.com.br>"

WORKDIR /app

COPY --from=yarn-builder /app .

EXPOSE 8080

VOLUME /app/config

CMD node . 