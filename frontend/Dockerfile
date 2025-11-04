# syntax=docker/dockerfile:1.6
FROM oven/bun:1 as base
WORKDIR /app
COPY package.json bun.lock .
RUN bun install
COPY . .
EXPOSE 3000
CMD ["bun", "run", "dev"]
