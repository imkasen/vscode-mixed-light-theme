// demo.c - C syntax showcase

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <time.h>

// Constants
#define PI 3.14159
#define MAX_SIZE 100

// Enums
enum Color { RED, GREEN, BLUE };

// Structs
struct Point {
    int x;
    int y;
};

// Unions
union Data {
    int i;
    float f;
    char str[20];
};

// Function prototypes
int add(int x, int y);
void swap(int *x, int *y);
void printArray(int arr[], int size);
void printString(char *str);
struct Point createPoint(int x, int y);
void printPoint(struct Point p);
void printTime();
void dynamicMemoryAllocation();
void fileIO();

int main() {
    // Variables and Data Types
    int integerVar = 10;
    float floatVar = 3.14159f;
    double doubleVar = 3.14159;
    char charVar = 'A';
    char stringVar[MAX_SIZE] = "Hello, world!";

    // Pointers
    int *intPtr = &integerVar;

    // Arrays
    int intArray[5] = {1, 2, 3, 4, 5};

    // Operators
    int a = 10;
    int b = 5;

    // Control Flow
    if (a > b) {
        printf("a is greater than b\n");
    } else if (a < b) {
        printf("a is less than b\n");
    } else {
        printf("a is equal to b\n");
    }

    for (int i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    printf("\n");

    int j = 0;
    while (j < 5) {
        printf("%d ", j);
        j++;
    }
    printf("\n");

    int k = 0;
    do {
        printf("%d ", k);
        k++;
    } while (k < 5);
    printf("\n");

    switch (a) {
        case 10:
            printf("a is 10\n");
            break;
        case 20:
            printf("a is 20\n");
            break;
        default:
            printf("a is neither 10 nor 20\n");
    }

    // Function calls
    int sum = add(5, 3);
    printf("Sum: %d\n", sum);

    swap(&a, &b);
    printf("Swapped values: a = %d, b = %d\n", a, b);

    printArray(intArray, 5);
    printString(stringVar);

    struct Point p = createPoint(10, 20);
    printPoint(p);

    printTime();

    dynamicMemoryAllocation();

    fileIO();

    return 0;
}

// Function definitions
int add(int x, int y) {
    return x + y;
}

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

void printArray(int arr[], int size) {
    printf("Array elements: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

void printString(char *str) {
    printf("String: %s\n", str);
}

struct Point createPoint(int x, int y) {
    struct Point p;
    p.x = x;
    p.y = y;
    return p;
}

void printPoint(struct Point p) {
    printf("Point coordinates: x = %d, y = %d\n", p.x, p.y);
}

void printTime() {
    time_t t = time(NULL);
    struct tm tm = *localtime(&t);
    printf("Current time: %d-%02d-%02d %02d:%02d:%02d\n", tm.tm_year + 1900, tm.tm_mon + 1, tm.tm_mday, tm.tm_hour, tm.tm_min, tm.tm_sec);
}

void dynamicMemoryAllocation() {
    int *ptr = (int *)malloc(sizeof(int));
    if (ptr == NULL) {
        printf("Memory allocation failed!\n");
        exit(1);
    }
    *ptr = 10;
    printf("Value at dynamically allocated memory: %d\n", *ptr);
    free(ptr);
}

void fileIO() {
    FILE *fp = fopen("demo.txt", "w");
    if (fp == NULL) {
        printf("Error opening file!\n");
        exit(1);
    }
    fprintf(fp, "This is some text written to the file.\n");
    fclose(fp);
}
