FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80
