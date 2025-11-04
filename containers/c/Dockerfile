FROM gcc:13-alpine AS build
WORKDIR /app
COPY main.c .
RUN gcc main.c -o demo

FROM alpine:3.20
RUN apk add --no-cache netcat-openbsd
WORKDIR /app
COPY --from=build /app/demo ./
COPY serve.sh ./
RUN chmod +x serve.sh
EXPOSE 7001
CMD ["/app/serve.sh"]
