# Payment Integration Guide for ResoluteRise CBO

This guide will help you integrate real payment processing with Stripe, PayPal, and M-Pesa for the ResoluteRise website.

## Current Status

✅ **UI/UX**: Complete donation form with payment method selection  
✅ **M-Pesa**: Manual instructions provided (Business: 522533, Account: 8006859)  
⚠️ **Stripe & PayPal**: Currently mock implementations - need real API integration

## Prerequisites

Before integrating payment processors, you'll need:

1. **Business Registration**: Ensure ResoluteRise CBO is legally registered
2. **Tax Registration**: KRA PIN and tax compliance certificates
3. **Bank Account**: Business bank account for receiving payments
4. **Business Documentation**: Certificate of incorporation, business license

## 1. Stripe Integration

### Step 1: Create Stripe Account

1. Visit [stripe.com](https://stripe.com) and create a business account
2. Complete business verification (requires legal documents)
3. Add bank account details for payouts
4. Note: Stripe is available in Kenya as of 2024

### Step 2: Get API Keys

```bash
# Test Keys (for development)
STRIPE_PUBLISHABLE_KEY_TEST=pk_test_...
STRIPE_SECRET_KEY_TEST=sk_test_...

# Live Keys (for production)
STRIPE_PUBLISHABLE_KEY_LIVE=pk_live_...
STRIPE_SECRET_KEY_LIVE=sk_live_...
```

### Step 3: Install Stripe SDK

```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### Step 4: Environment Configuration

Create/update `.env.local`:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
VITE_APP_URL=http://localhost:5173
```

### Step 5: Create Stripe Components

**Create `client/components/StripePayment.tsx`:**

```typescript
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface StripePaymentProps {
  amount: number;
  donorInfo: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const CheckoutForm: React.FC<StripePaymentProps> = ({
  amount,
  donorInfo,
  onSuccess,
  onError
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      // Create payment intent on your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          currency: 'kes',
          donor: donorInfo
        }),
      });

      const { client_secret } = await response.json();

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        client_secret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
            billing_details: {
              name: donorInfo.name,
              email: donorInfo.email,
            },
          },
        }
      );

      if (error) {
        onError(error.message || 'Payment failed');
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (err) {
      onError('Payment processing error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 border rounded-lg mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#374151',
                '::placeholder': { color: '#9CA3AF' },
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : `Pay KSh ${amount.toLocaleString()}`}
      </button>
    </form>
  );
};

const StripePayment: React.FC<StripePaymentProps> = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
);

export default StripePayment;
```

### Step 6: Create Server Endpoint

**Create `netlify/functions/create-payment-intent.ts`:**

```typescript
import { Handler } from "@netlify/functions";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount, currency, donor } = JSON.parse(event.body!);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        donor_name: donor.name,
        donor_email: donor.email,
        organization: "ResoluteRise CBO",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ client_secret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Payment processing failed" }),
    };
  }
};
```

## 2. PayPal Integration

### Step 1: Create PayPal Developer Account

1. Visit [developer.paypal.com](https://developer.paypal.com)
2. Create business account and get approved
3. Create application to get API credentials

### Step 2: Get API Credentials

```bash
# Sandbox (for testing)
PAYPAL_CLIENT_ID_SANDBOX=your_sandbox_client_id
PAYPAL_CLIENT_SECRET_SANDBOX=your_sandbox_secret

# Live (for production)
PAYPAL_CLIENT_ID_LIVE=your_live_client_id
PAYPAL_CLIENT_SECRET_LIVE=your_live_secret
```

### Step 3: Install PayPal SDK

```bash
npm install @paypal/react-paypal-js
```

### Step 4: Create PayPal Component

**Create `client/components/PayPalPayment.tsx`:**

```typescript
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalPaymentProps {
  amount: number;
  donorInfo: {
    name: string;
    email: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({
  amount,
  donorInfo,
  onSuccess,
  onError
}) => {
  const initialOptions = {
    clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
    currency: 'USD', // PayPal requires USD for most countries
    intent: 'capture',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: (amount / 130).toFixed(2), // Convert KES to USD (approximate)
              },
              description: 'Donation to ResoluteRise CBO',
            }],
          });
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order!.capture();
            onSuccess();
          } catch (error) {
            onError('PayPal payment failed');
          }
        }}
        onError={() => onError('PayPal error occurred')}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
```

## 3. M-Pesa Integration (Advanced)

For automated M-Pesa integration, you'll need:

### Step 1: Register with Safaricom

1. Apply for M-Pesa Business API access
2. Get Lipa na M-Pesa Online credentials
3. Obtain Consumer Key, Consumer Secret, and Passkey

### Step 2: Create M-Pesa Integration

**Create `netlify/functions/mpesa-stk-push.ts`:**

```typescript
import { Handler } from "@netlify/functions";
import axios from "axios";

const generateAccessToken = async () => {
  const auth = Buffer.from(
    `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`,
  ).toString("base64");

  const response = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    { headers: { Authorization: `Basic ${auth}` } },
  );

  return response.data.access_token;
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { amount, phone } = JSON.parse(event.body!);
    const accessToken = await generateAccessToken();

    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, -3);
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`,
    ).toString("base64");

    const stkPushResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: `${process.env.SITE_URL}/api/mpesa-callback`,
        AccountReference: "ResoluteRise Donation",
        TransactionDesc: "Donation to ResoluteRise CBO",
      },
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    return {
      statusCode: 200,
      body: JSON.stringify(stkPushResponse.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "M-Pesa request failed" }),
    };
  }
};
```

## 4. Update Support.tsx

**Replace the mock payment handling in `client/pages/Support.tsx`:**

```typescript
// Add imports
import StripePayment from "@/components/StripePayment";
import PayPalPayment from "@/components/PayPalPayment";

// Update handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
    if (paymentMethod === "stripe") {
      // Show Stripe payment component
      setShowStripePayment(true);
    } else if (paymentMethod === "paypal") {
      // Show PayPal payment component
      setShowPayPalPayment(true);
    } else if (paymentMethod === "mpesa") {
      // Trigger M-Pesa STK push
      const response = await fetch("/api/mpesa-stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(amount),
          phone: donorInfo.phone,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        throw new Error("M-Pesa payment failed");
      }
    }
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## 5. Environment Variables

Add to your production environment:

```env
# Stripe
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key

# PayPal
PAYPAL_CLIENT_SECRET=your_paypal_secret
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id

# M-Pesa (if implementing)
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_PASSKEY=your_passkey
MPESA_SHORTCODE=522533

# Site URL
SITE_URL=https://www.resoluterisecbo.com
```

## 6. Security Considerations

1. **Never expose secret keys** in client-side code
2. **Validate all payments** on the server side
3. **Use HTTPS** for all payment processing
4. **Implement webhooks** for payment confirmation
5. **Store transaction records** securely
6. **PCI compliance** for card payments

## 7. Testing

### Test Cards (Stripe)

- **Success**: 4242 4242 4242 4242
- **Declined**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

### PayPal Testing

Use PayPal sandbox accounts for testing

### M-Pesa Testing

Use Safaricom sandbox environment

## 8. Go Live Checklist

- [ ] Business account verification complete
- [ ] All required legal documents submitted
- [ ] Test transactions successful
- [ ] Webhook endpoints configured
- [ ] Security review completed
- [ ] Environment variables updated
- [ ] SSL certificate installed
- [ ] Payment confirmation emails configured

## Support

For implementation assistance:

- **Stripe**: [stripe.com/docs](https://stripe.com/docs)
- **PayPal**: [developer.paypal.com](https://developer.paypal.com)
- **M-Pesa**: [developer.safaricom.co.ke](https://developer.safaricom.co.ke)

## Cost Structure

### Stripe

- 3.8% + KES 15 per successful card charge
- No monthly fees

### PayPal

- 4.4% + fixed fee per transaction
- No monthly fees

### M-Pesa

- Negotiated rates with Safaricom
- Typically 1-3% per transaction

---

**Next Steps**: Start with Stripe integration as it's most straightforward for international donations, then add PayPal for broader reach. M-Pesa integration requires business approval from Safaricom.
