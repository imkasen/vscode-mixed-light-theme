// demo.go - Go syntax showcase

package main

import (
	"fmt"
	"math"
	"os"
	"runtime"
	"strconv"
	"strings"
	"sync"
	"time"
)

// Constants
const (
	Pi       = 3.14159
	EarthDay = 24 * time.Hour
)

// Variables
var (
	globalVariable int = 10
)

// Data Types
var (
	integerVar    int     = 10
	floatVar      float64 = 3.14159
	stringVar     string  = "Hello, world!"
	booleanVar    bool    = true
	runeVar       rune    = 'A'
	complexVar    complex128 = 1 + 2i
	pointerVar    *int    = &integerVar
	arrayVar      [3]int  = [3]int{1, 2, 3}
	sliceVar      []int   = []int{4, 5, 6}
	mapVar        map[string]int = map[string]int{"key1": 1, "key2": 2}
	structVar     struct {
		Name string
		Age  int
	} = struct {
		Name string
		Age  int
	}{"John", 30}
	interfaceVar interface{} = "anything"
)

// Type Definitions
type (
	MyInt int
	MyFloat float64
)

// Functions
func add(x int, y int) int {
	return x + y
}

func swap(x, y string) (string, string) {
	return y, x
}

func namedReturn(x, y int) (sum, diff int) {
	sum = x + y
	diff = x - y
	return
}

func variadicFunction(nums ...int) int {
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}

func deferredFunction() {
	defer fmt.Println("Deferred execution")
	fmt.Println("Normal execution")
}

func panicAndRecover() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered from panic:", r)
		}
	}()

	fmt.Println("Before panic")
	panic("Something went wrong!")
	fmt.Println("After panic (unreachable)")
}

// Pointers
func pointerDemo() {
	i := 42
	p := &i
	fmt.Println("Value of i:", i)
	fmt.Println("Address of i:", p)
	fmt.Println("Value pointed to by p:", *p)
	*p = 21
	fmt.Println("New value of i:", i)
}

// Structs
func structDemo() {
	type Person struct {
		Name string
		Age  int
	}

	john := Person{Name: "John", Age: 30}
	fmt.Println("John's details:", john)
	fmt.Println("John's name:", john.Name)

	jane := Person{"Jane", 25}
	fmt.Println("Jane's details:", jane)

	p := &john
	fmt.Println("John's age (using pointer):", p.Age)
}

// Arrays and Slices
func arrayAndSliceDemo() {
	var arr [5]int = [5]int{1, 2, 3, 4, 5}
	fmt.Println("Array:", arr)

	slice := []int{6, 7, 8, 9, 10}
	fmt.Println("Slice:", slice)

	slice2 := slice[1:4]
	fmt.Println("Slice2 (sliced from slice):", slice2)

	slice3 := make([]int, 5, 10)
	fmt.Println("Slice3 (created with make):", slice3, "len:", len(slice3), "cap:", cap(slice3))

	slice3 = append(slice3, 11, 12, 13)
	fmt.Println("Slice3 (after append):", slice3, "len:", len(slice3), "cap:", cap(slice3))
}

// Maps
func mapDemo() {
	m := make(map[string]int)
	m["key1"] = 1
	m["key2"] = 2
	fmt.Println("Map:", m)

	v, ok := m["key3"]
	fmt.Println("Value for key3:", v, "Exists:", ok)

	delete(m, "key1")
	fmt.Println("Map after deleting key1:", m)
}

// Interfaces
func interfaceDemo() {
	type Shape interface {
		Area() float64
	}

	type Rectangle struct {
		Width  float64
		Height float64
	}

	type Circle struct {
		Radius float64
	}

	func (r Rectangle) Area() float64 {
		return r.Width * r.Height
	}

	func (c Circle) Area() float64 {
		return math.Pi * c.Radius * c.Radius
	}

	r := Rectangle{Width: 5, Height: 10}
	c := Circle{Radius: 7}

	shapes := []Shape{r, c}
	for _, shape := range shapes {
		fmt.Println("Area:", shape.Area())
	}
}

// Type Assertions
func typeAssertionDemo() {
	var i interface{} = "hello"

	s, ok := i.(string)
	fmt.Println("String value:", s, "OK:", ok)

	f, ok := i.(float64)
	fmt.Println("Float64 value:", f, "OK:", ok)

	// Type switch
	switch v := i.(type) {
	case string:
		fmt.Println("String value:", v)
	case int:
		fmt.Println("Int value:", v)
	default:
		fmt.Println("Unknown type")
	}
}

// Goroutines
func goroutineDemo() {
	go func() {
		fmt.Println("Hello from a goroutine!")
	}()

	time.Sleep(time.Second)
}

// Channels
func channelDemo() {
	ch := make(chan string)

	go func() {
		ch <- "Hello from a goroutine!"
	}()

	msg := <-ch
	fmt.Println("Received message:", msg)
}

// Buffered Channels
func bufferedChannelDemo() {
	ch := make(chan int, 2)

	ch <- 1
	ch <- 2

	fmt.Println("Channel values:", <-ch, <-ch)
}

// Select Statement
func selectDemo() {
	ch1 := make(chan string)
	ch2 := make(chan string)

	go func() {
		time.Sleep(time.Second)
		ch1 <- "Message from ch1"
	}()

	go func() {
		time.Sleep(2 * time.Second)
		ch2 <- "Message from ch2"
	}()

	select {
	case msg1 := <-ch1:
		fmt.Println("Received message from ch1:", msg1)
	case msg2 := <-ch2:
		fmt.Println("Received message from ch2:", msg2)
	case <-time.After(3 * time.Second):
		fmt.Println("Timeout")
	}
}

// Mutexes
func mutexDemo() {
	var counter int
	var mutex sync.Mutex

	for i := 0; i < 1000; i++ {
		go func() {
			mutex.Lock()
			defer mutex.Unlock()
			counter++
		}()
	}

	time.Sleep(time.Second)
	fmt.Println("Counter value:", counter)
}

// Error Handling
func errorHandlingDemo() {
	f, err := os.Open("nonexistent_file.txt")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer f.Close()

	// ... process the file ...
}

// Custom Errors
type MyError struct {
	Message string
}

func (e *MyError) Error() string {
	return e.Message
}

func customErrorDemo() {
	if err := myFunction(); err != nil {
		fmt.Println("Error:", err)
	}
}

func myFunction() error {
	return &MyError{Message: "Something went wrong"}
}

// Generics (Go 1.18+)
func genericFunction[T any](x T) T {
	return x
}

func genericMapKeys[K comparable, V any](m map[K]V) []K {
	keys := make([]K, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}
	return keys
}

// Fuzzing (Go 1.18+)
func FuzzReverse(f *testing.F) {
	testcases := []string{"hello", "world", ""}
	for _, tc := range testcases {
		f.Add(tc) // Seed corpus
	}
	f.Fuzz(func(t *testing.T, orig string) {
		rev := Reverse(orig)
		doubleRev := Reverse(rev)
		if orig != doubleRev {
			t.Errorf("Before: %q, after: %q", orig, doubleRev)
		}
		if utf8.ValidString(orig) && !utf8.ValidString(rev) {
			t.Errorf("Reverse produced invalid UTF-8 string %q", rev)
		}
	})
}


func main() {
	fmt.Println("Hello, world!")

	// Operators
	a := 10
	b := 5
	fmt.Println("a + b =", a+b)
	fmt.Println("a - b =", a-b)
	fmt.Println("a * b =", a*b)
	fmt.Println("a / b =", a/b)
	fmt.Println("a % b =", a%b)
	fmt.Println("a & b =", a&b)
	fmt.Println("a | b =", a|b)
	fmt.Println("a ^ b =", a^b)
	fmt.Println("a << 1 =", a<<1)
	fmt.Println("a >> 1 =", a>>1)

	// Control Flow
	if a > b {
		fmt.Println("a is greater than b")
	} else if a < b {
		fmt.Println("a is less than b")
	} else {
		fmt.Println("a is equal to b")
	}

	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	j := 0
	for j < 5 {
		fmt.Println(j)
		j++
	}

	k := 0
	for {
		fmt.Println(k)
		k++
		if k >= 5 {
			break
		}
	}

	arr := []int{1, 2, 3, 4, 5}
	for index, value := range arr {
		fmt.Println("Index:", index, "Value:", value)
	}

	m := map[string]int{"key1": 1, "key2": 2}
	for key, value := range m {
		fmt.Println("Key:", key, "Value:", value)
	}

	switch a {
	case 10:
		fmt.Println("a is 10")
	case 20:
		fmt.Println("a is 20")
	default:
		fmt.Println("a is neither 10 nor 20")
	}

	// Type Conversions
	strNum := "123"
	num, err := strconv.Atoi(strNum)
	if err != nil {
		fmt.Println("Error converting string to int:", err)
	} else {
		fmt.Println("Converted number:", num)
	}

	floatNum := 3.14
	intNum := int(floatNum)
	fmt.Println("Converted float to int:", intNum)

	// String Manipulation
	str := "Hello, world!"
	fmt.Println("Length of string:", len(str))
	fmt.Println("String in uppercase:", strings.ToUpper(str))
	fmt.Println("String in lowercase:", strings.ToLower(str))
	fmt.Println("String contains 'world':", strings.Contains(str, "world"))

	// Concurrency
	runtime.GOMAXPROCS(runtime.NumCPU())
	fmt.Println("Number of CPUs:", runtime.NumCPU())

	// Call other functions
	sum := add(5, 3)
	fmt.Println("Sum:", sum)

	s1, s2 := swap("Hello", "World")
	fmt.Println("Swapped strings:", s1, s2)

	sum, diff := namedReturn(10, 5)
	fmt.Println("Sum:", sum, "Diff:", diff)

	total := variadicFunction(1, 2, 3, 4, 5)
	fmt.Println("Total:", total)

	deferredFunction()

	// Uncomment to see panic and recover in action
	// panicAndRecover()

	pointerDemo()
	structDemo()
	arrayAndSliceDemo()
	mapDemo()
	interfaceDemo()
	typeAssertionDemo()
	goroutineDemo()
	channelDemo()
	bufferedChannelDemo()
	selectDemo()
	mutexDemo()
	errorHandlingDemo()
	customErrorDemo()

	// Generics
	intValue := genericFunction(10)
	fmt.Println("Generic function (int):", intValue)
	stringValue := genericFunction("hello")
	fmt.Println("Generic function (string):", stringValue)

	stringMap := map[string]int{"key1": 1, "key2": 2}
	stringKeys := genericMapKeys(stringMap)
	fmt.Println("Generic map keys (string):", stringKeys)

	// Fuzzing - See FuzzReverse function above
}
