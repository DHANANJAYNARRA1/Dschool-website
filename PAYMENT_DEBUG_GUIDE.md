# Payment Flow Debug Guide

## Changes Made

### 1. Added Console Logging
All payment flow pages now have detailed console.log() statements to help debug:

**Registration Page:**
- Logs when form is submitted
- Logs program ID and program data
- Logs form data
- Logs when data is stored in sessionStorage
- Logs navigation attempt

**Checkout Page:**
- Logs when page loads
- Logs sessionStorage data (raw and parsed)
- Logs if registration data is missing
- Logs program data validation
- Logs payment submission
- Logs navigation to success page

### 2. Improved Error Handling
- Better redirects with `replace` flag to prevent back button issues
- Validation checks for program data
- Clear error messages in console

### 3. Fixed Navigation
- Using `replace: true` for redirects
- Proper fallback to `/programs` if data is invalid

## How to Test

### Step 1: Open Browser Console
Press `F12` or right-click > Inspect > Console tab

### Step 2: Go to LION Program
Navigate to: `http://localhost:5173/programs/lion` (or your app URL)

### Step 3: Click "Register Now"
You should see in console:
- URL changes to `/register/lion`
- No errors

### Step 4: Fill Registration Form
Fill all required fields (marked with *):
- Full Name
- Email
- Phone
- City, State, Pincode
- Address
- Highest Qualification (select from dropdown)
- Years of Experience (select from dropdown)

### Step 5: Submit Registration
Click "Proceed to Payment" button

**Expected Console Output:**
```
Form submitted!
Program ID: lion
Program: {name: "LION Program", price: 25000}
Form Data: {fullName: "...", email: "...", ...}
Data stored in sessionStorage
Navigating to /checkout
```

**Expected Behavior:**
- URL changes to `/checkout`
- Order summary shows program name and price

### Step 6: If Checkout Page Shows (Success!)
You should see in console:
```
=== CHECKOUT PAGE LOADED ===
SessionStorage data: {"fullName":"...","program":{...},...}
Parsed data: {fullName: "...", ...}
Registration data exists: {fullName: "...", ...}
Program data: {name: "LION Program", price: 25000}
```

### Step 7: Complete Payment
1. Select payment method (Card/UPI/Net Banking)
2. Fill payment details:
   - For Card: Any number like `1234 5678 9012 3456`, expiry `12/25`, CVV `123`
   - For UPI: Any UPI ID like `test@upi`
   - For Net Banking: Select any bank
3. Click "Pay ₹29,500"

**Expected Console Output:**
```
=== PAYMENT SUBMITTED ===
Payment processed, clearing session and navigating to success page
```

**Expected Behavior:**
- Button shows "Processing..." for 2 seconds
- URL changes to `/success`
- Success page shows confirmation

## Troubleshooting

### Issue: Redirects to /programs after registration
**Check Console For:**
- "No registration data found in sessionStorage!"
- "Program data is missing!"

**Possible Causes:**
- sessionStorage not working (browser privacy settings)
- Program ID mismatch
- Data not being saved

**Solution:**
In console, check: `sessionStorage.getItem('registrationData')`
Should return JSON string with your data

### Issue: Form won't submit
**Check Console For:**
- HTML5 validation errors (look for red outlines on inputs)
- JavaScript errors

**Possible Causes:**
- Required fields not filled
- Email format invalid
- Phone number invalid

**Solution:**
- Fill ALL fields marked with *
- Use valid email format
- Fill dropdown selections

### Issue: Payment button doesn't work
**Check Console For:**
- Form validation errors
- "=== PAYMENT SUBMITTED ===" message

**Possible Causes:**
- Payment form fields not filled
- Required fields missing

**Solution:**
- Fill all payment details
- Check browser console for specific errors

### Issue: Stuck on "Processing..."
**Possible Causes:**
- Navigation blocked by browser
- JavaScript error during timeout

**Solution:**
- Check console for errors
- Manually navigate to `/success`

## Manual sessionStorage Test

You can manually test the flow in browser console:

```javascript
// 1. Store test data
sessionStorage.setItem('registrationData', JSON.stringify({
  fullName: "Test User",
  email: "test@example.com",
  phone: "+91 1234567890",
  programId: "lion",
  program: { name: "LION Program", price: 25000 }
}));

// 2. Verify it was saved
console.log(sessionStorage.getItem('registrationData'));

// 3. Navigate to checkout
window.location.href = '/checkout';
```

If this works, the issue is in the Registration form submission.
