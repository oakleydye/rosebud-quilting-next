import { generateMetadata } from "@/lib/metadata";
import CartClient from "./_components/cart-client";

export const metadata = generateMetadata({
  title: "Shopping Cart - Review Your Items",
  description: "Review and manage items in your shopping cart. Proceed to checkout when ready to complete your quilting supply order.",
});

export default function CartPage() {
  return <CartClient />;
}
