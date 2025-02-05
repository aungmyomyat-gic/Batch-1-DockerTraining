# Step 1: Use the official NGINX base image
FROM nginx:latest

# Step 2: Run a command to update the package manager (example of RUN)
RUN apt-get update && apt-get install -y curl vim figlet git
    
# Step 4: Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Step 3: Copy a custom index.html file into the default NGINX directory
COPY . /usr/share/nginx/html

# Step 5: Expose the port NGINX listens on (default is 80)
EXPOSE 80


