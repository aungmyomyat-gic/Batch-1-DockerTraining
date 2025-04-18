# Stage 1: Build Dependencies
FROM php:8.2-fpm-alpine AS builder

# Install required dependencies
RUN apk add --no-cache unzip libzip-dev zip \
    && docker-php-ext-install zip pdo pdo_mysql

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Install dependencies
RUN composer install --no-dev --optimize-autoloader

# Stage 2: Production Image
FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

# Install required PHP extensions
RUN apk add --no-cache libzip-dev \
    && docker-php-ext-install zip pdo pdo_mysql

# Copy application from builder
COPY --from=builder /var/www/html /var/www/html

# Copy entrypoint script
COPY ./infra/php/entrypoint.sh /etc/entrypoint.sh

# Give execute permission to the entrypoint script
RUN chmod +x /etc/entrypoint.sh

# Expose PHP-FPM port
EXPOSE 9000

# Set entrypoint
ENTRYPOINT ["/etc/entrypoint.sh"]
