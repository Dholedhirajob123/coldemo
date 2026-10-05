import { useRouterState } from "@tanstack/react-router";

/**
 * Mount point for the shared viewport entrance effects.
 *
 * The reveal itself lives in CSS (`animation-timeline: view()`), so nothing here
 * mutates React-owned markup during hydration. The hidden marker below is the
 * only signal: `body:has(.motion-scope)` scopes the entrance animations.
 */
export function ScrollMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return <span className="motion-scope" data-pathname={pathname} hidden aria-hidden="true" />;
}
