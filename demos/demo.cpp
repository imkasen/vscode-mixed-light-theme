// demo.cpp - C++ syntax showcase

#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <memory>
#include <functional>
#include <exception>

// Namespace
namespace myNamespace {
    int myVariable = 10;
}

// Enums
enum class Color { Red, Green, Blue };

// Structs
struct Point {
    int x;
    int y;
};

// Classes
class Dog {
public:
    // Constructor
    Dog(const std::string& name, const std::string& breed) : name_(name), breed_(breed) {}

    // Destructor
    ~Dog() { std::cout << "Dog " << name_ << " destroyed." << std::endl; }

    // Method
    void bark() const { std::cout << "Woof!" << std::endl; }

    // Getter
    const std::string& getName() const { return name_; }

    // Setter
    void setName(const std::string& name) { name_ = name; }

private:
    std::string name_;
    std::string breed_;
};

// Templates
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Operator Overloading
struct Complex {
    double real;
    double imag;

    Complex operator+(const Complex& other) const {
        return Complex{real + other.real, imag + other.imag};
    }
};

// Lambda Expressions
auto add = [](int x, int y) { return x + y; };

// Exceptions
void mightThrow() {
    if (true) {
        throw std::runtime_error("Something went wrong!");
    }
}

int main() {
    // Variables and Data Types
    int integerVar = 10;
    float floatVar = 3.14159f;
    double doubleVar = 3.14159;
    char charVar = 'A';
    bool booleanVar = true;
    std::string stringVar = "Hello, world!";

    // Pointers
    int* intPtr = &integerVar;
    std::cout << "Value of integerVar: " << integerVar << std::endl;
    std::cout << "Address of integerVar: " << &integerVar << std::endl;
    std::cout << "Value of intPtr: " << intPtr << std::endl;
    std::cout << "Value pointed to by intPtr: " << *intPtr << std::endl;

    // References
    int& intRef = integerVar;
    std::cout << "Value of intRef: " << intRef << std::endl;
    intRef = 20;
    std::cout << "Value of integerVar after modifying intRef: " << integerVar << std::endl;

    // Arrays
    int intArray[5] = {1, 2, 3, 4, 5};
    std::cout << "intArray[2]: " << intArray[2] << std::endl;

    // Vectors
    std::vector<int> intVector = {6, 7, 8, 9, 10};
    std::cout << "intVector[3]: " << intVector[3] << std::endl;
    intVector.push_back(11);

    // Maps
    std::map<std::string, int> myMap;
    myMap["key1"] = 1;
    myMap["key2"] = 2;
    std::cout << "myMap[\"key1\"]:" << myMap["key1"] << std::endl;

    // Sets
    std::set<int> mySet = {1, 2, 3, 3, 4, 5}; // Duplicates are automatically removed
    std::cout << "mySet size: " << mySet.size() << std::endl;

    // Iterators
    for (auto it = intVector.begin(); it != intVector.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    // Range-based for loop
    for (int& num : intVector) {
        num *= 2;
    }

    // Algorithms
    std::sort(intVector.begin(), intVector.end());

    // Smart Pointers
    std::unique_ptr<Dog> dogPtr = std::make_unique<Dog>("Buddy", "Golden Retriever");
    dogPtr->bark();

    // Function Pointers
    void (*funcPtr)() = mightThrow;

    // Operators
    int a = 10;
    int b = 5;
    std::cout << "a + b: " << a + b << std::endl;
    std::cout << "a - b: " << a - b << std::endl;
    std::cout << "a * b: " << a * b << std::endl;
    std::cout << "a / b: " << a / b << std::endl;
    std::cout << "a % b: " << a % b << std::endl;
    std::cout << "a & b: " << (a & b) << std::endl;
    std::cout << "a | b: " << (a | b) << std::endl;
    std::cout << "a ^ b: " << (a ^ b) << std::endl;
    std::cout << "a << 1: " << (a << 1) << std::endl;
    std::cout << "a >> 1: " << (a >> 1) << std::endl;

    // Control Flow
    if (a > b) {
        std::cout << "a is greater than b" << std::endl;
    } else if (a < b) {
        std::cout << "a is less than b" << std::endl;
    } else {
        std::cout << "a is equal to b" << std::endl;
    }

    for (int i = 0; i < 5; ++i) {
        std::cout << i << " ";
    }
    std::cout << std::endl;

    int j = 0;
    while (j < 5) {
        std::cout << j << " ";
        ++j;
    }
    std::cout << std::endl;

    int k = 0;
    do {
        std::cout << k << " ";
        ++k;
    } while (k < 5);
    std::cout << std::endl;

    switch (a) {
        case 10:
            std::cout << "a is 10" << std::endl;
            break;
        case 20:
            std::cout << "a is 20" << std::endl;
            break;
        default:
            std::cout << "a is neither 10 nor 20" << std::endl;
    }

    // Exception Handling
    try {
        mightThrow();
    } catch (const std::exception& e) {
        std::cerr << "Caught exception: " << e.what() << std::endl;
    }

    // Namespace usage
    std::cout << "myNamespace::myVariable: " << myNamespace::myVariable << std::endl;

    // Enum usage
    Color color = Color::Red;

    // Struct usage
    Point p = {10, 20};
    std::cout << "p.x: " << p.x << ", p.y: " << p.y << std::endl;

    // Class usage
    Dog myDog("Buddy", "Golden Retriever");
    myDog.bark();
    std::cout << "My dog's name: " << myDog.getName() << std::endl;
    myDog.setName("Max");
    std::cout << "My dog's new name: " << myDog.getName() << std::endl;

    // Template usage
    int maxInt = max(5, 10);
    std::cout << "Max int: " << maxInt << std::endl;
    double maxDouble = max(3.14, 2.71);
    std::cout << "Max double: " << maxDouble << std::endl;

    // Operator overloading usage
    Complex c1 = {1.0, 2.0};
    Complex c2 = {3.0, 4.0};
    Complex c3 = c1 + c2;
    std::cout << "c3.real: " << c3.real << ", c3.imag: " << c3.imag << std::endl;

    // Lambda expression usage
    int sum = add(5, 3);
    std::cout << "Sum: " << sum << std::endl;

    return 0;
}
