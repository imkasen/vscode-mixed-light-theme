# Use a lightweight base image
FROM alpine:latest

# Set environment variables
ENV MY_APP_VERSION 1.0.0
ENV MY_APP_PORT 8080

# Create a working directory
WORKDIR /app

# Copy application files
COPY . /app

# Install dependencies (example for a Node.js app)
RUN apk add --no-cache nodejs npm
RUN npm install

# Expose the application port
EXPOSE $MY_APP_PORT

# Run the application (example for a Node.js app)
CMD ["node", "app.js"]


# Multi-stage build example (for a Go application)

# Build stage
FROM golang:1.18-alpine AS builder
WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o myapp .

# Final stage
FROM alpine:latest
WORKDIR /app
COPY --from=builder /build/myapp .
CMD ["./myapp"]


# Example with healthcheck
HEALTHCHECK --interval=30s --timeout=10s CMD curl -f http://localhost:8080 || exit 1


# Example with volumes
VOLUME /app/data


# Example with user and group
RUN addgroup -S mygroup && adduser -S myuser -G mygroup
USER myuser


# Example showing LABEL instruction
LABEL maintainer="your.email@example.com"
LABEL version="1.0"
LABEL description="A simple Dockerfile example"



# Example with ONBUILD trigger (useful for base images)
ONBUILD ADD . /app
ONBUILD RUN npm install



# Example demonstrating SHELL instruction
SHELL ["/bin/bash", "-c"]



# Example demonstrating ARG instruction (build-time arguments)
ARG BUILD_DATE
LABEL build_date=$BUILD_DATE


# Example demonstrating adding a CA certificate
ADD my_ca_cert.crt /usr/local/certs/
RUN update-ca-certificates


# Best practice: Pin versions for all packages and tools


# Ensure the container runs as a non-root user (for improved security)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Start the application (replace with your specific command)
CMD ["echo", "Hello from Docker!"]
