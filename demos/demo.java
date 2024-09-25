// demo.java - Java syntax showcase

import java.util.*;
import java.io.*;
import java.time.*;

public class demo {

    // Constants
    static final double PI = 3.14159;
    static final int MAX_SIZE = 100;

    // Enums
    enum Color { RED, GREEN, BLUE }

    // Interfaces
    interface Shape {
        double getArea();
    }

    // Classes
    static class Dog {
        private String name;
        private String breed;

        // Constructor
        public Dog(String name, String breed) {
            this.name = name;
            this.breed = breed;
        }

        // Method
        public void bark() {
            System.out.println("Woof!");
        }

        // Getter
        public String getName() {
            return name;
        }

        // Setter
        public void setName(String name) {
            this.name = name;
        }
    }

    // Generics
    static class MyGenericClass<T> {
        private T data;

        public MyGenericClass(T data) {
            this.data = data;
        }

        public T getData() {
            return data;
        }
    }

    // Nested Classes
    static class OuterClass {
        private int outerVar;

        class InnerClass {
            public void accessOuterVar() {
                System.out.println("Outer variable: " + outerVar);
            }
        }
    }

    // Lambda Expressions
    interface MyFunctionalInterface {
        int operate(int a, int b);
    }

    // Annotations
    @SuppressWarnings("unchecked")
    static void legacyMethod() {
        // ...
    }

    public static void main(String[] args) {
        // Variables and Data Types
        int integerVar = 10;
        float floatVar = 3.14159f;
        double doubleVar = 3.14159;
        char charVar = 'A';
        boolean booleanVar = true;
        String stringVar = "Hello, world!";

        // Arrays
        int[] intArray = {1, 2, 3, 4, 5};

        // Operators
        int a = 10;
        int b = 5;

        // Control Flow
        if (a > b) {
            System.out.println("a is greater than b");
        } else if (a < b) {
            System.out.println("a is less than b");
        } else {
            System.out.println("a is equal to b");
        }

        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        int j = 0;
        while (j < 5) {
            System.out.println(j);
            j++;
        }

        int k = 0;
        do {
            System.out.println(k);
            k++;
        } while (k < 5);

        switch (a) {
            case 10:
                System.out.println("a is 10");
                break;
            case 20:
                System.out.println("a is 20");
                break;
            default:
                System.out.println("a is neither 10 nor 20");
        }

        // Enhanced for loop (for-each loop)
        for (int num : intArray) {
            System.out.println(num);
        }

        // Collections
        List<String> stringList = new ArrayList<>();
        stringList.add("apple");
        stringList.add("banana");
        stringList.add("orange");

        Set<Integer> intSet = new HashSet<>();
        intSet.add(1);
        intSet.add(2);
        intSet.add(3);

        Map<String, Integer> myMap = new HashMap<>();
        myMap.put("key1", 1);
        myMap.put("key2", 2);

        // Exception Handling
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.err.println("Caught ArithmeticException: " + e.getMessage());
        }

        // Threads
        Thread myThread = new Thread(() -> {
            System.out.println("Hello from a thread!");
        });
        myThread.start();

        // I/O
        try (BufferedReader reader = new BufferedReader(new FileReader("demo.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.err.println("Caught IOException: " + e.getMessage());
        }

        // Date and Time
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        LocalDateTime dateTime = LocalDateTime.now();

        // String Manipulation
        String str = "Hello, world!";
        System.out.println("Length of string: " + str.length());
        System.out.println("String in uppercase: " + str.toUpperCase());
        System.out.println("String in lowercase: " + str.toLowerCase());
        System.out.println("String contains 'world': " + str.contains("world"));

        // Class usage
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        myDog.bark();
        System.out.println("My dog's name: " + myDog.getName());
        myDog.setName("Max");
        System.out.println("My dog's new name: " + myDog.getName());

        // Generics usage
        MyGenericClass<Integer> intGeneric = new MyGenericClass<>(10);
        System.out.println("Integer generic value: " + intGeneric.getData());
        MyGenericClass<String> stringGeneric = new MyGenericClass<>("hello");
        System.out.println("String generic value: " + stringGeneric.getData());

        // Nested class usage
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.accessOuterVar();

        // Lambda expression usage
        MyFunctionalInterface adder = (a1, b1) -> a1 + b1;
        int result = adder.operate(5, 3);
        System.out.println("Result of lambda expression: " + result);

        // Annotation usage
        legacyMethod();
    }
}
