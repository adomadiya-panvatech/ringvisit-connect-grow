# n8n Webhook Implementation

This document describes the n8n webhook implementation for the Contact and Partner forms.

## Configuration

The webhook URLs and API endpoints are configured in `src/lib/config.ts` as global constants:

```typescript
export const CONFIG = {
  // API Endpoints
  API_ENDPOINTS: {
    CONTACT_SUBMIT: "https://hcmktapi.panvatech.com/api/contact/onetriage/submit",
    PARTNER_SUBMIT: "https://hcmktapi.panvatech.com/api/contact/onetriage/submit",
  },
  
  // n8n Webhook URLs
  WEBHOOKS: {
    CONTACT_FORM: "https://n8n.panvatech.com/webhook/contact-form",
    PARTNER_FORM: "https://n8n.panvatech.com/webhook/contact-form",
  },
  
  // Email addresses
  EMAILS: {
    SUPPORT: "support@panvatech.com",
    SALES: "sales@panvatech.com",
  },
  
  // Company information
  COMPANY: {
    NAME: "OneTriage",
    PHONE: "1-800-916-2459",
    ADDRESS: "14269 Danielson St, Suite 400, Poway, CA 92064",
  },
} as const;
```

## Webhook Payload Structure

### Contact Form Webhook Payload
```json
{
  "formType": "Contact",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "source": "RingVisit",
  "data": {
    "name": "John Doe",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "(555) 123-4567",
    "company": "Example Corp",
    "serviceInterest": "Healthcare IT Solutions",
    "message": "I'm interested in your telehealth platform",
    "source": "OneTriage Marketing Website"
  }
}
```

### Partner Form Webhook Payload
```json
{
  "formType": "Partner",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "source": "RingVisit",
  "data": {
    "name": "Jane Smith",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "phone": "(555) 987-6543",
    "company": "Healthcare Solutions Inc",
    "titleRole": "Chief Medical Officer",
    "organizationType": "hospital",
    "potentialUsers": "101-500",
    "partnershipInterest": "We're interested in becoming a reseller partner",
    "source": "OneTriage Marketing Website"
  }
}
```

## Error Handling

- Webhook failures are logged but don't prevent form submission
- API failures will show an error message to the user
- All errors are logged to the console for debugging

## Setup Instructions

1. Update the URLs in `src/lib/config.ts` with your actual endpoints
2. Test the forms to ensure webhooks are working correctly
3. Monitor the browser console for webhook response logs
