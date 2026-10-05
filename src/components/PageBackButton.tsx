import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function PageBackButton() {
  return (
    <Button asChild variant="outline" className="mb-6">
      <Link to="/">
        <ArrowLeft /> Back
      </Link>
    </Button>
  );
}