FROM node:16

WORKDIR /app

RUN npm install -g pnpm

COPY . /app

RUN pnpm install

CMD ["pnpm", "start"]
