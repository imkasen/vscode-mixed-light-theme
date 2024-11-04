# Set the minimum required CMake version
cmake_minimum_required(VERSION 3.10)

# Set the project name
project(DemoProject)

# Set the C++ standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Add a compile definition
add_definitions(-DDEBUG)

# Set a variable
set(MY_VARIABLE "Hello, world!")

# Message printing
message(STATUS "My variable: ${MY_VARIABLE}")

# Create an executable
add_executable(program1 program1.cpp)

# Create a library
add_library(mylib STATIC mylib.cpp)

# Link a library to an executable
target_link_libraries(program1 mylib)

# Include directories
include_directories(include)

# Link directories
link_directories(lib)

# Add a custom command
add_custom_command(TARGET program1 POST_BUILD
                   COMMAND echo "Executable built!")

# Install the executable
install(TARGETS program1 DESTINATION bin)

# Create a subdirectory
add_subdirectory(subdir)

# Find a package
find_package(Threads REQUIRED)

# Use a found package
target_link_libraries(program1 Threads::Threads)

# Configure a header file
configure_file(config.h.in config.h)

# Check for a symbol
check_symbol_exists(some_symbol some_header.h HAVE_SOME_SYMBOL)

# Conditional compilation
if(HAVE_SOME_SYMBOL)
    add_definitions(-DHAVE_SOME_SYMBOL)
endif()

# Option for the user
option(BUILD_TESTS "Build the test suite" ON)

# Add tests if enabled
if(BUILD_TESTS)
    enable_testing()
    add_test(NAME Test1 COMMAND program1)
endif()

# Function definition
function(print_message message)
    message(STATUS ${message})
endfunction()

# Function call
print_message("This is a message from a function.")

# Set a variable based on the platform
if(WIN32)
    set(EXECUTABLE_EXTENSION ".exe")
else()
    set(EXECUTABLE_EXTENSION "")
endif()

# Use generator expressions
set(SOURCES program1.cpp $<$<CONFIG:Debug>:debug_code.cpp>)
add_executable(program1 ${SOURCES})


# Set properties on targets
set_target_properties(program1 PROPERTIES
    OUTPUT_NAME "myprogram"
    COMPILE_FLAGS "-Wall -Wextra"
)



# Example usage of target_include_directories
target_include_directories(program1 PUBLIC include)
target_include_directories(program1 PRIVATE src)

# Example of install rules
install(FILES program1 DESTINATION bin)

# Example of file operation
file(COPY config.h DESTINATION bin)

#Example of math
math(EXPR RESULT "5 * 6")
message(STATUS "Result of 5 * 6: ${RESULT}")



# create empty files for demonstration
add_custom_target(create_files)
add_custom_command(TARGET create_files
                  COMMAND ${CMAKE_COMMAND} -E touch program1.cpp mylib.cpp include/header.h src/source.cpp config.h.in subdir/CMakeLists.txt)
# Subdirectory CMakeLists.txt
# Create subdir/CMakeLists.txt with content
file(WRITE subdir/CMakeLists.txt
"
add_library(sublib STATIC sublib.cpp)
target_include_directories(sublib PUBLIC include)
add_executable(program2 program2.cpp)
target_link_libraries(program2 sublib)

#create empty file for the sublib
add_custom_command(TARGET sublib PRE_BUILD COMMAND ${CMAKE_COMMAND} -E touch sublib.cpp program2.cpp)

")
# add the sublib to main project
target_link_libraries(program1 sublib)
