# Payment Flow Test Instructions

## Flow Diagram
1. Program Page → 2. Registration Page → 3. Checkout Page → 4. Success Page

## Test Steps:

### Step 1: Navigate to a Program
- Go to: `/programs/lion`
- Click: "Register Now" button
- Expected: Should navigate to `/register/lion`

### Step 2: Fill Registration Form
- Fill all required fields (marked with *)
- Click: "Proceed to Payment"
- Expected: Should navigate to `/checkout`

### Step 3: Payment
- Select payment method (Card/UPI/Net Banking)
- Fill payment details
- Click: "Pay ₹[amount]"
- Expected: Should show "Processing..." then navigate to `/success`

## Common Issues:

1. **Registration page not loading**: Check if programId is valid
2. **Checkout page redirects to programs**: Registration data not saved in sessionStorage
3. **Payment button does nothing**: Form validation failing
4. **Success page not showing**: Navigation issue

## Debug in Browser Console:

Open browser console (F12) and check for:
- "Registration data stored successfully" (after registration submit)
- Any red error messages
- sessionStorage data: `sessionStorage.getItem('registrationData')`
