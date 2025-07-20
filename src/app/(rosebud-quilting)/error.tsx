'use client';

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-6">
        We apologize for the inconvenience. Please try again.
      </p>
      <Button onClick={reset} size="lg">
        Try again
      </Button>
    </div>
  );
}
