import { generateMetadata } from "@/lib/metadata";
import CheckoutClient from "./_components/checkout-client";

export const metadata = generateMetadata({
  title: "Secure Checkout - Complete Your Order",
  description: "Complete your quilting supply order with our secure checkout process. Fast, safe, and easy payment options available.",
});

export default function CheckoutPage() {
  return <CheckoutClient />;
}
