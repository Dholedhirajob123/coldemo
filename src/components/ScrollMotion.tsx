import { useEffect } from "react";

export function ScrollMotion({ currentPage }: { currentPage: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return null;
}