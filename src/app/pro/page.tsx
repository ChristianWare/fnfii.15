/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useUser } from "@clerk/nextjs"
import { useAction, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import toast from "react-hot-toast";
import { useState } from "react";



const ProPage = () => {
const [loadingPlan, setLoadingPlan] = useState("");
const { user, isLoaded: isUserLoaded } = useUser();

const userData = useQuery(
  api.users.getUserByClerkId,
  user ? { clerkId: user?.id } : "skip"
);
const userSubscription = useQuery(
  api.subscriptions.getUserSubscription,
  userData ? { userId: userData?._id } : "skip"
);

const isYearlySubscriptionActive =
  userSubscription?.status === "active" && userSubscription.planType === "year";
const createProPlanCheckoutSession = useAction(
  api.stripe.createProPlanCheckoutSession
);

const handlePlanSelection = async (planId: "month" | "year") => {
  if (!user) {
    toast.error("Please log in to select a plan.", {
      id: "login-error",
      position: "top-center",
      duration: 3000,
    });
    return;
  }

  setLoadingPlan(planId);
  try {
    const result = await createProPlanCheckoutSession({ planId });
    if (result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
    }
  } catch (error: any) {
    if (error.message.includes("Rate limit exceeded")) {
      toast.error("You've tried too many times. Please try again later.");
    } else {
      toast.error(
        "There was an error initiating your purchase. Please try again."
      );
    }
    console.log(error);
  } finally {
    setLoadingPlan("");
  }
};  return (
    <div>ProPage</div>
  )
}
export default ProPage