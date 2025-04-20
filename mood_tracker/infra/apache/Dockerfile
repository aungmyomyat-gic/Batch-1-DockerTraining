# Use official PHP image with Apache
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies & PHP extensions
RUN apt-get update && apt-get install -y \
    git zip unzip libonig-dev libxml2-dev libzip-dev curl \
    && docker-php-ext-install pdo pdo_mysql zip

# Enable Apache Rewrite Module
RUN a2enmod rewrite

# Copy existing application directory contents
COPY . /var/www/html

# Set ownership and permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Set Apache DocumentRoot to Laravel's public folder
COPY ./infra/apache/apache.conf /etc/apache2/sites-available/000-default.conf

# Expose port 80
EXPOSE 80

# Use the default Apache run command
CMD ["apache2-foreground"]
