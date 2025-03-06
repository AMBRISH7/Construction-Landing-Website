# Use official Nginx image
FROM nginx:latest

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx content
RUN rm -rf ./*

# Copy Landing Page files to the container
COPY . .

# Expose port 80 for web access
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
