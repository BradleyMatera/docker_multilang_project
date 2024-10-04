
import java.time.LocalDateTime; // import time package
import java.time.format.DateTimeFormatter; // import time format package

public class Hello { // class name should be the same as the file name

    public static void main(String[] args) {// parameters are passed as an array of strings
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss"); // the array
        LocalDateTime now = LocalDateTime.now(); // the local date and time
        System.out.println("Hello ASL! The date is: " + dtf.format(now)); // system.out.println is used to print the output
    }
}

// sources: https://www.w3schools.com/java/java_getstarted.asp
// https://www.w3schools.com/java/java_date.asp
// https://www.w3schools.com/java/java_date_time.asp
// https://www.w3schools.com/java/java_dateformat.asp
