import { NextApiRequest, NextApiResponse } from "next";
import { createOrderOnRazorpay } from "@/utils/razorpay";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Create an order on Razorpay
  const amount = 1;
  const order = await createOrderOnRazorpay(amount);

  res.status(200).json({ orderId: order.id });
}
