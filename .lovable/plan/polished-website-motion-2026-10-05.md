# Polished Website Motion

## What will change
- Add smooth entrance animation as page sections and cards scroll into view.
- Enhance all photos with subtle zoom, depth, and polished hover movement.
- Improve the existing 3D sliders with a gentle cinematic image drift and animated progress indicator.
- Add refined motion to the logo, navigation, buttons, notices, and dashboard links.
- Keep animation responsive, lightweight, and disabled for visitors who prefer reduced motion.

## Technical details
- Create one shared client-side motion observer and mount it in the common page layout.
- Add reusable animation utilities to the global design system rather than repeating page-specific styles.
- Preserve the existing `ImageSlider` for every timed carousel and extend its current accessible controls.
- Verify the home page and inner pages at desktop and mobile sizes, including no horizontal overflow.
