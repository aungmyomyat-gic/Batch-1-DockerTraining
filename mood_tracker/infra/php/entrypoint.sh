#!/bin/sh

echo "Setting permissions..."
chmod -R 777 /var/www/html

echo "Running Laravel migrations..."
php artisan migrate --force

echo "Creating storage symlink..."
php artisan storage:link

echo "Clearing and optimizing cache..."
php artisan optimize:clear
php artisan optimize

echo "Starting PHP-FPM..."
exec php-fpm
