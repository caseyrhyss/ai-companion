"use client";

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import axios from "axios";

interface SubscriptionButtonProps {
    isPro: boolean;
}

export const SubscriptionButton = ({
    isPro
}: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const onClick = async () => {
        try {
            setLoading(true);

            const response = await axios.get("/api/stripe")

            window.location.href = response.data.url;
        } catch (err) {
            toast({
                variant: "destructive",
                description: "Something went wrong"
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <Button disabled={loading} onClick={onClick} size="sm" variant={isPro ? "default" : "premium"}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <Sparkles className="h-4 w-4 ml-2 fill-white"/>}
        </Button>
    )
}