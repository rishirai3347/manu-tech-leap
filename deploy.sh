#!/bin/bash

# Deployment Script for Hostinger
# This script builds the application and prepares it for deployment

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! dist folder not found."
    exit 1
fi

# Copy .htaccess to dist folder
echo "📄 Copying .htaccess file..."
cp .htaccess dist/

# Create deployment package
echo "📦 Creating deployment package..."
cd dist
zip -r ../deployment-package.zip .
cd ..

echo "✅ Deployment package created: deployment-package.zip"
echo ""
echo "📋 Next steps:"
echo "1. Upload the contents of the 'dist' folder to your Hostinger public_html directory"
echo "2. Or upload the 'deployment-package.zip' file and extract it on the server"
echo "3. Ensure .htaccess file is in the root directory"
echo "4. Test your website"
echo ""
echo "🌐 Your website should be live at your domain!" 