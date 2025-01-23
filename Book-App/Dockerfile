# Step 1: Build the React Vite app
FROM node:20 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Step 2: Serve the app with a static server
FROM nginx:stable-alpine AS production

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy the built files from the previous stage
COPY --from=build /app/dist .

# Expose the port Nginx will run on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
