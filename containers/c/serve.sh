#!/bin/sh
while true; do
  RESPONSE=$(./demo)
  LENGTH=$(printf "%s" "$RESPONSE" | wc -c)
  {
    printf 'HTTP/1.1 200 OK\r\n';
    printf 'Content-Type: application/json\r\n';
    printf 'Content-Length: %s\r\n' "$LENGTH";
    printf 'Connection: close\r\n\r\n';
    printf '%s' "$RESPONSE";
  } | nc -l -p 7001 -q 1;
  sleep 0.1;
done
