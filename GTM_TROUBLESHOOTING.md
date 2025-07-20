# Google Tag Manager Troubleshooting Guide

## 🚨 Issue: GTM Not Loading in Network Tab

### Possible Causes & Solutions:

#### 1. **Browser Cache Issue**
**Symptoms**: GTM script not showing in Network tab
**Solution**: 
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache completely
- Open in incognito/private mode

#### 2. **Ad Blocker Interference**
**Symptoms**: GTM blocked by ad blockers
**Solution**:
- Disable ad blockers temporarily
- Add `googletagmanager.com` to whitelist
- Check browser extensions that might block tracking

#### 3. **Container ID Issues**
**Symptoms**: Wrong or invalid container ID
**Solution**:
- Verify container ID: `GTM-TMST5FX3`
- Check GTM dashboard for correct ID
- Ensure no typos in the code

#### 4. **Script Loading Order**
**Symptoms**: Conflicts with other scripts
**Solution**:
- GTM should be first script in `<head>`
- Remove conflicting Google Analytics code
- Check for JavaScript errors in console

### 🔍 Testing Steps:

#### Step 1: Check Console for Errors
```javascript
// In browser console, run:
console.log('DataLayer:', window.dataLayer);
console.log('GTM Object:', window.google_tag_manager);
```

#### Step 2: Manual Network Check
1. Open DevTools → Network tab
2. Check "Preserve log" 
3. Hard refresh the page
4. Look for `gtm.js` request
5. If not found, check "All" filter (not just "JS")

#### Step 3: Test GTM Debug Page
1. Visit: `http://localhost:8080/gtm-debug.html`
2. Check the debug output
3. Run manual tests

#### Step 4: Verify Container ID
1. Log into Google Tag Manager
2. Check container ID in admin settings
3. Ensure it matches: `GTM-TMST5FX3`

### 🛠️ Quick Fixes:

#### Fix 1: Clear Cache and Hard Refresh
```bash
# In browser:
1. Press F12
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"
```

#### Fix 2: Test in Incognito Mode
- Open incognito/private window
- Navigate to your site
- Check if GTM loads

#### Fix 3: Disable Extensions
- Temporarily disable all browser extensions
- Test GTM loading
- Re-enable extensions one by one

#### Fix 4: Check for JavaScript Errors
- Open DevTools → Console
- Look for red error messages
- Fix any JavaScript errors that might block GTM

### 📊 Expected Results:

#### ✅ Working GTM Should Show:
- `gtm.js` request in Network tab
- `window.dataLayer` array in console
- `window.google_tag_manager` object
- No JavaScript errors related to GTM

#### ❌ Common Issues:
- No `gtm.js` request (blocked/cached)
- JavaScript errors in console
- Wrong container ID
- Ad blocker interference

### 🎯 Next Steps:

1. **Test the debug page**: `http://localhost:8080/gtm-debug.html`
2. **Clear browser cache** and test again
3. **Check for ad blockers** and disable temporarily
4. **Verify container ID** in GTM dashboard
5. **Test in incognito mode**

### 📞 If Still Not Working:

1. Check GTM dashboard for container status
2. Verify container ID is correct
3. Test with a different browser
4. Check if your hosting provider blocks GTM
5. Contact GTM support if container ID is invalid

---
**Container ID**: GTM-TMST5FX3
**Debug Page**: `http://localhost:8080/gtm-debug.html`
**Last Updated**: $(date) 