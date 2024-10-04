// package main is special. It defines a standalone executable program, not a library.
package main
import ( // import statment is used to include other packages
    "fmt" // formats package
    "time" // time package
)

func main() { // calling the main function
    fmt.Println("Hello ASL! The date is:", time.Now()) // fmt is the format string infront and then its print and java as normal
}

// https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-go
// https://golang.org/doc/effective_go.html#commentary
// https://golang.org/doc/effective_go.html#formatting
// https://golang.org/doc/effective_go.html#names
// https://golang.org/doc/effective_go.html#control-structures