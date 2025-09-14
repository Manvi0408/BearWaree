import { db } from "@/db"
import { headers } from "next/headers"
import Stripe from "stripe"

export async function POST(req: Request) {
  try {
    // Dynamically import Stripe at runtime
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
      apiVersion: "2025-02-24.acacia",
      typescript: true,
    })

    const body = await req.text()
    const signature = headers().get("stripe-signature") ?? ""

    // Verify the webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET ?? ""
    )

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      const { userId } = session.metadata || { userId: null }

      if (!userId) {
        return new Response("Invalid metadata", { status: 400 })
      }

      // Update user plan in your database
      await db.user.update({
        where: { id: userId },
        data: { plan: "PRO" },
      })
    }

    return new Response("OK", { status: 200 })
  } catch (err: any) {
    console.error("Stripe webhook error:", err)
    return new Response("Webhook Error", { status: 400 })
  }
}

