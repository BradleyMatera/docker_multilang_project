#include <stdio.h>
#include <time.h>

int main(void) {
  time_t now = time(NULL);
  struct tm *tm_info = gmtime(&now);
  char buffer[32];
  strftime(buffer, sizeof(buffer), "%Y-%m-%dT%H:%M:%SZ", tm_info);
  printf("{\"lang\":\"c\",\"message\":\"Hello from C container\",\"time\":\"%s\"}\n", buffer);
  return 0;
}
