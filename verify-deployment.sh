#!/bin/bash

# Deployment Verification Script
# Run this after uploading to Hostinger to verify everything works

echo "🔍 Starting deployment verification..."

# Check if domain is provided
if [ -z "$1" ]; then
    echo "❌ Please provide your domain as an argument"
    echo "Usage: ./verify-deployment.sh yourdomain.com"
    exit 1
fi

DOMAIN=$1

echo "🌐 Checking website accessibility..."
if curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" | grep -q "200"; then
    echo "✅ Website is accessible"
else
    echo "❌ Website is not accessible"
fi

echo "🔒 Checking SSL certificate..."
if curl -s -o /dev/null -w "%{http_code}" "https://$DOMAIN" | grep -q "200"; then
    echo "✅ SSL certificate is working"
else
    echo "❌ SSL certificate may have issues"
fi

echo "📱 Checking mobile responsiveness..."
echo "   Visit: https://search.google.com/test/mobile-friendly?url=https://$DOMAIN"

echo "⚡ Checking performance..."
echo "   Visit: https://pagespeed.web.dev/?url=https://$DOMAIN"

echo "🔍 Checking SEO..."
echo "   Visit: https://search.google.com/search-console"

echo ""
echo "📋 Manual checks to perform:"
echo "1. Visit https://$DOMAIN"
echo "2. Test all navigation links"
echo "3. Verify contact forms work"
echo "4. Check mobile responsiveness"
echo "5. Test all pages load correctly"
echo "6. Verify images are displaying"
echo "7. Check for any console errors (F12)"
echo "8. Test on different browsers"

echo ""
echo "🎯 Quick Performance Tips:"
echo "- Enable Gzip compression (already in .htaccess)"
echo "- Optimize images if needed"
echo "- Consider using a CDN for better performance"
echo "- Monitor Core Web Vitals regularly"

echo ""
echo "✅ Verification checklist completed!" 