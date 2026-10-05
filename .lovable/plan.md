# Homepage Sliders and Dashboard Panel

## What will change
- Replace the static homepage banner with an automatic five-image nursing college slider.
- Keep the college name and main action buttons readable over every slide.
- Add arrow controls and slide indicators so visitors can change slides manually.
- Add a dedicated B.Sc. Nursing image slider in the course section, using the five nursing images.
- Add a right-side Dashboard panel with quick links to Admission, Notices, Downloads, Fees, and Contact.
- Make each Dashboard item open its existing page; each destination will include an obvious Back button.
- Keep the layout usable on mobile, where the right-side panel will stack below the main content.

## Technical details
- Build one reusable React image-slider component with timed rotation, pause-on-hover, keyboard-accessible controls, and reduced-motion support.
- Use the five generated nursing images stored in the project.
- Use TanStack Router links for all page navigation and browser history for Back behavior.
- Preserve the existing shared header, footer, routes, colors, and content.
- Verify the homepage slider, Dashboard navigation, Back behavior, and mobile layout in the live preview.
