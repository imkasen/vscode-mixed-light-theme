# Comments: This Makefile demonstrates various Makefile syntax elements

# Variables
CC = gcc
CFLAGS = -Wall -g
LDFLAGS = -lm

# Phony targets
.PHONY: all clean install uninstall

# Default target
all: program1 program2

# Include other Makefiles
include other.mk

# Conditional execution
ifeq ($(DEBUG), 1)
	CFLAGS += -DDEBUG
endif

# Target-specific variables
program1: program1.o
	$(CC) $(LDFLAGS) -o $@ $^

program1.o: program1.c
	$(CC) $(CFLAGS) -c $< -o $@

program2: program2.o
	$(CC) $(LDFLAGS) -o $@ $^

program2.o: program2.c
	$(CC) $(CFLAGS) -c $< -o $@

# Static pattern rule
%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@


# Function usage
define print_value
	@echo $(1) = $(value $(1))
endef

print_vars:
	$(call print_value, CC)
	$(call print_value, CFLAGS)


# Shell commands
install: all
	@echo "Installing..."
	@mkdir -p $(DESTDIR)/bin
	@cp program1 program2 $(DESTDIR)/bin

uninstall:
	@echo "Uninstalling..."
	@rm -f $(DESTDIR)/bin/program1 $(DESTDIR)/bin/program2

clean:
	@echo "Cleaning..."
	@rm -f *.o program1 program2

# Eval function
ifeq ($(PLATFORM), windows)
  $(eval EXECUTABLE := program.exe)
else
  $(eval EXECUTABLE := program)
endif

# Target-specific variables with +=
program3: LDFLAGS += -lz
program3: program3.o
	$(CC) $(LDFLAGS) -o $@ $^


# Automatic variables
print-vars:
	@echo "Target: $@"
	@echo "Prerequisites: $^"
	@echo "First prerequisite: $<"
	@echo "All prerequisites (with duplicates): $+"
	@echo "Stem: $*"

# Use of wildcard and vpath
VPATH = src include

source_files := $(wildcard src/*.c)
header_files := $(wildcard include/*.h)

all_sources: $(source_files) $(header_files)
	@echo "Source files: $(source_files)"
	@echo "Header files: $(header_files)"


# define a multi-line command using backslashes
long_command:
	@echo "This is a long command" \
	&& echo "split across multiple lines" \
	&& echo "using backslashes."


# define a multi-line command using define
define create_directories
	mkdir -p dir1
	mkdir -p dir2/subdir
	mkdir -p dir3/subdir/subsubdir
endef

create_dirs:
	$(create_directories)


# .DELETE_ON_ERROR:  Delete target files if an error occurs during the execution of a recipe.
.DELETE_ON_ERROR:


# Special Built-in Target Names
.DEFAULT: all # Define the default target if no target is specified on the command line.
.PRECIOUS: intermediate_file # Don't delete intermediate_file if make is interrupted.
.INTERMEDIATE: intermediate_file # Mark intermediate_file as an intermediate file.
.SECONDARY: secondary_file # Don't delete secondary_file even if it's not a prerequisite of any target.
.PHONY: phony_target # Mark phony_target as a phony target.

intermediate_file:
	@touch $@

secondary_file:
	@touch $@

phony_target:
	@echo "Phony target executed"

# Placeholders
%: %.c # Placeholder rule.
	$(CC) $(CFLAGS) -o $@ $<
