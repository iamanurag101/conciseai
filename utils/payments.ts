import Stripe from "stripe";

import { getDbConnection } from "@/lib/db";

export async function handleSubscriptionDeleted({
  subscriptionId,
  stripe
} : {
  subscriptionId: string;
  stripe: Stripe;
}) {
  console.log("Subscription Deleted", subscriptionId);

  try {
    const sql = await getDbConnection();

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    await sql`UPDATE users SET status = 'cancelled' WHERE customer_id = ${subscription.customer}`
  } catch (err) {
    console.error('Error handling subscription deleted', err);
  }
}

export async function handleCheckoutSessionCompleted({
    session,
    stripe,
} : {
    session: Stripe.Checkout.Session;
    stripe: Stripe;
}) {
    console.log("Checkout Session Completed", session);

    try {      
      const customerId = session.customer as string;
      const customerDetails = session.customer_details;
  
      const email = customerDetails?.email;
      const name = customerDetails?.name;
  
      const priceId = session.line_items?.data[0]?.price?.id;
      if (email && priceId) {
          const sql = await getDbConnection();
      
          await createOrUpdateUser({
              sql,
              email: email as string,
              fullName: name as string,
              customerId,
              priceId: priceId as string,
              status: 'active',
          });
  
          await createPayment({
              sql,
              session,
              priceId: priceId as string,
              userEmail: email as string,
          })
      };
    } catch (err) {
      console.error('Error handling checkout session completed', err);
    }
}

async function createOrUpdateUser({
  sql,
  email,
  fullName,
  customerId,
  priceId,
  status,
}: {
  sql: any;
  email: string;
  fullName: string;
  customerId: string;
  priceId: string;
  status: string;
}) {
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (user.length === 0) {
      await sql`INSERT INTO users (email, full_name, customer_id, price_id, status) VALUES (${email}, ${fullName}, ${customerId}, ${priceId}, ${status})`;
    }
  } catch (error) {
    console.error('Error creating or updating user', error);
  }
};

async function createPayment({
  sql,
  session,
  priceId,
  userEmail,
}: {
  sql: any;
  session: Stripe.Checkout.Session;
  priceId: string;
  userEmail: string;
}) {
  try {
    const { amount_total, id, status } = session;

    await sql`INSERT INTO payments (amount, status, stripe_payment_id, price_id, user_email)
              VALUES (${amount_total}, ${status}, ${id}, ${priceId}, ${userEmail})`;
  } catch (error) {
    console.error('Error creating payment', error);
  }
};
