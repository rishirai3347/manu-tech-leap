# Google Analytics Troubleshooting Guide

## Current Status ✅
Your Google Analytics setup appears to be **correctly configured**:
- ✅ Measurement ID: `G-5T2N6DX77H` 
- ✅ Tracking code is properly deployed on https://veekdays.com
- ✅ Code is in the correct location (in `<head>` section)
- ✅ Website is accessible and serving content

## Immediate Steps to Diagnose

### 1. Test Real-Time Reports
1. Go to [Google Analytics](https://analytics.google.com)
2. Navigate to **Reports** → **Realtime** → **Overview**
3. Visit https://veekdays.com in another tab
4. **You should see your visit appear within 30 seconds**

### 2. Check for Ad Blockers
- **Disable all browser extensions** (especially ad blockers, privacy tools)
- **Test in incognito/private mode**
- **Try a different browser** (Chrome, Firefox, Safari)

### 3. Use the Test Page
1. Open `ga-test.html` in your browser
2. Follow the testing instructions on the page
3. Check browser console for any errors

## Common Causes of "Data Collection Isn't Active"

### 1. **Ad Blockers & Privacy Extensions** (Most Common)
- **uBlock Origin, AdBlock Plus, Privacy Badger**
- **Browser privacy settings**
- **Corporate firewalls**

**Solution:** Test in incognito mode with extensions disabled

### 2. **Google Analytics Property Configuration**
- **Data stream not properly configured**
- **Filters blocking data**
- **Property settings issues**

**Solution:** 
1. Go to GA Admin → Data Streams
2. Verify the stream is active
3. Check for any filters in Admin → Data Filters

### 3. **Timing Issues**
- **Real-time vs Standard reports** (24-48 hour delay)
- **Property just created** (can take up to 24 hours)

**Solution:** Always check Real-time reports first

### 4. **Domain/URL Issues**
- **www vs non-www** mismatch
- **HTTP vs HTTPS** issues
- **Subdomain configuration**

**Solution:** Verify domain settings in GA property

## Verification Checklist

### ✅ Technical Setup
- [ ] Tracking code is in `<head>` section
- [ ] Measurement ID matches exactly
- [ ] No JavaScript errors in console
- [ ] Website loads without errors

### ✅ Google Analytics Configuration
- [ ] Property is active
- [ ] Data stream is configured correctly
- [ ] No filters blocking data
- [ ] Real-time reports are accessible

### ✅ Testing
- [ ] Tested in incognito mode
- [ ] Disabled all browser extensions
- [ ] Checked multiple browsers
- [ ] Verified real-time data appears

## Debugging Steps

### Step 1: Browser Console Check
1. Open https://veekdays.com
2. Press F12 → Console tab
3. Look for any errors related to:
   - `gtag`
   - `googletagmanager`
   - Google Analytics

### Step 2: Network Tab Check
1. Open F12 → Network tab
2. Refresh the page
3. Look for requests to:
   - `googletagmanager.com`
   - `google-analytics.com`
4. Check if these requests are successful (200 status)

### Step 3: Real-Time Verification
1. Open Google Analytics Real-time reports
2. Visit your website
3. You should see activity within 30 seconds

## Advanced Troubleshooting

### If Still Not Working:

1. **Check Property Settings**
   ```
   GA Admin → Property Settings → Property ID
   Should match: G-5T2N6DX77H
   ```

2. **Verify Data Stream**
   ```
   GA Admin → Data Streams → veekdays.com
   Check: Stream URL, Measurement ID, Status
   ```

3. **Check for Filters**
   ```
   GA Admin → Data Filters
   Ensure no filters are blocking data
   ```

4. **Test with Google Tag Assistant**
   - Install Google Tag Assistant Legacy (Chrome extension)
   - Visit your website
   - Check for any issues

## Expected Behavior

### ✅ Working Correctly:
- Real-time reports show page views within 30 seconds
- No console errors related to gtag
- Network requests to googletagmanager.com are successful
- Standard reports show data after 24-48 hours

### ❌ Not Working:
- Real-time reports show no activity
- Console shows gtag errors
- Network requests to googletagmanager.com fail
- Standard reports show no data after 48 hours

## Next Steps

1. **Test real-time reports immediately**
2. **Use the test page** (`ga-test.html`)
3. **Check browser console** for errors
4. **Test in incognito mode**
5. **Contact Google Analytics support** if issues persist

## Support Resources

- **Google Analytics Help Center**: https://support.google.com/analytics
- **Google Analytics Community**: https://support.google.com/analytics/community
- **Google Tag Manager Help**: https://support.google.com/tagmanager

## Quick Test Commands

```bash
# Check if tracking code is present
curl -s https://veekdays.com | grep "G-5T2N6DX77H"

# Check if website is accessible
curl -I https://veekdays.com

# Test Google Analytics loading
curl -I https://www.googletagmanager.com/gtag/js?id=G-5T2N6DX77H
```

---

**Note:** Most "data collection isn't active" issues are caused by ad blockers or privacy extensions. Always test in incognito mode first! 