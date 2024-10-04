#include <stdio.h> // includes studio librarys like import statements, that allow us to use printf
#include <time.h> // the Time library allows us to get the current time

int main() { // initializes the main function
    time_t t; // current time
    time(&t); //now get current time
    printf("Hello ASL! The date is: %s", ctime(&t)); // now print it out
    return 0; // return 0 to indicate that the program ran successfully
}

// sources: https://www.youtube.com/watch?v=WXY-r9s0_Rg
// https://www.w3schools.com/c/c_comments.php
// https://www.tutorialspoint.com/cprogramming/c_comments.htm
