import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PageBackButton() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.assign("/");
  };

  return (
    <Button type="button" variant="outline" onClick={goBack} className="mb-6">
      <ArrowLeft /> Back
    </Button>
  );
}