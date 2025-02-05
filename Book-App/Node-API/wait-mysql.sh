#!/bin/sh

echo "Waiting for MySQL to be ready..."
until mysqladmin ping -h "$MYSQL_HOST" -u root -p"${MYSQL_ROOT_PASSWORD}" --silent; do
  echo "MySQL is not ready yet..."
  sleep 5
done

echo "MySQL is ready! Starting the backend..."
exec "$@"
