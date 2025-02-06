# Define Ubuntu version as a build argument
ARG UBUNTU_VERSION=22.04
ARG WORK_DIR=/app

# Stage 1: Builder
FROM ubuntu:${UBUNTU_VERSION} AS builder

# Set working directory
WORKDIR /app

# Copy application source code
COPY . .

RUN touch file-1.txt

RUN ls -alth

# Stage 2: Final Image
FROM ubuntu:${UBUNTU_VERSION} AS final

WORKDIR /app

COPY --from=builder /app/file-1.txt .



