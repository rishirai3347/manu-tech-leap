# Hostinger Deployment Guide

## Prerequisites
- Hostinger hosting account (Shared Hosting or VPS)
- Domain name (optional, can use subdomain)
- Git repository (recommended for version control)

## Step 1: Prepare Your Application

### 1.1 Build the Application
```bash
npm run build
```
This creates a `dist` folder with optimized production files.

### 1.2 Test Locally
```bash
npm run preview
```
Verify everything works correctly before deployment.

## Step 2: Hostinger Setup

### 2.1 Access Hostinger Control Panel
1. Log in to your Hostinger account
2. Go to "Hosting" → Select your hosting plan
3. Click "Manage" → "File Manager"

### 2.2 Navigate to Public Directory
- For shared hosting: Navigate to `public_html` folder
- For VPS: Navigate to your web server's document root (usually `/var/www/html`)

### 2.3 Upload Files
1. **Method 1: File Manager (Recommended for small sites)**
   - Upload all contents of your `dist` folder to `public_html`
   - Upload the `.htaccess` file to `public_html`

2. **Method 2: FTP/SFTP (Recommended for larger sites)**
   - Use FileZilla or any FTP client
   - Host: Your hosting server
   - Username: Your hosting username
   - Password: Your hosting password
   - Port: 21 (FTP) or 22 (SFTP)
   - Upload all `dist` contents to `public_html`

## Step 3: Domain Configuration

### 3.1 Point Domain to Hostinger
1. In Hostinger control panel, go to "Domains"
2. Add your domain or subdomain
3. Update DNS settings if using external domain

### 3.2 SSL Certificate
1. Go to "SSL" in Hostinger control panel
2. Enable "Free SSL Certificate"
3. Wait for activation (usually 5-10 minutes)

## Step 4: Verify Deployment

### 4.1 Test Your Website
- Visit your domain
- Test all pages and functionality
- Check mobile responsiveness
- Verify contact forms work

### 4.2 Performance Check
- Use Google PageSpeed Insights
- Check Core Web Vitals
- Verify images are optimized

## Step 5: Post-Deployment Setup

### 5.1 Google Analytics (Optional)
- Add Google Analytics tracking code
- Verify tracking is working

### 5.2 Search Console (Optional)
- Submit your sitemap
- Monitor indexing status

## Troubleshooting

### Common Issues:
1. **404 Errors on Routes**: Ensure `.htaccess` file is uploaded
2. **Slow Loading**: Check if Gzip compression is enabled
3. **Mixed Content**: Ensure all resources use HTTPS
4. **CORS Issues**: Check API endpoints configuration

### Support:
- Hostinger 24/7 Live Chat
- Hostinger Knowledge Base
- Community Forums

## Maintenance Schedule

### Weekly:
- Check website functionality
- Monitor performance metrics
- Review error logs

### Monthly:
- Update dependencies
- Backup website files
- Review analytics data
- Check SSL certificate status

### Quarterly:
- Security audit
- Performance optimization
- Content updates
- SEO review 