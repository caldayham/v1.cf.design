# Carousel Right-Side Padding Problem

## Goal
Create horizontal scrolling carousels (for Projects and Reviews) that have consistent padding on both the left AND right sides. The left side padding works correctly, but the right side padding is not being respected.

## Desired Behavior
- Carousel should be "full-bleed" (extend to viewport edges)
- First card should have spacing from the left edge of the viewport
- Last card should have spacing from the right edge of the viewport when scrolled all the way right
- Scroll-snap should work correctly, snapping to cards with proper offset

## Current Architecture

### HTML Structure
```html
<div class="carouselWrapper">   <!-- overflow-x: auto, full viewport width -->
  <div class="carousel">        <!-- inline-flex container with cards -->
    <div class="portfolioCard">...</div>
    <div class="portfolioCard">...</div>
    <!-- more cards -->
  </div>
</div>
```

### Current CSS (Projects.module.css)

```css
/* Full-bleed carousel wrapper */
.carouselWrapper {
  /* Extend to viewport edges */
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding-left: var(--spacing-xl);
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) var(--color-border);
  -webkit-overflow-scrolling: touch;
}

.carousel {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  padding: var(--spacing-sm) var(--spacing-xl) var(--spacing-lg) var(--spacing-xl);
  min-width: 100%;
}

.portfolioCard {
  flex: 0 0 380px;
  /* ... other styles */
  scroll-snap-align: start;
}
```

## Strategies Attempted

### Strategy 1: Simple padding-right on .carousel
```css
.carousel {
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-lg) var(--spacing-xl);
}
```
**Result:** Left padding works. Right padding is completely ignored. This is a known issue with flexbox horizontal scroll containers - browsers don't include right padding in the scrollable area.

### Strategy 2: scroll-padding-left on wrapper (for left side)
```css
.carouselWrapper {
  scroll-padding-left: var(--spacing-xl);
}
```
**Result:** This fixed the LEFT side scroll-snap issue. The first card now snaps with proper offset. But this property only affects snap behavior, not actual visual padding, and there's no equivalent that works for the right side in this context.

### Strategy 3: ::after pseudo-element as spacer
```css
.carousel {
  display: flex;
  padding: var(--spacing-sm) 0 var(--spacing-lg) var(--spacing-xl);
}

.carousel::after {
  content: '';
  flex-shrink: 0;
  width: var(--spacing-xl);
}
```
**Result:** Did not work. The pseudo-element wasn't creating visible space at the end.

### Strategy 4: inline-flex with min-width
```css
.carousel {
  display: inline-flex;
  padding: var(--spacing-sm) var(--spacing-xl) var(--spacing-lg) var(--spacing-xl);
  min-width: 100%;
}
```
**Result:** Currently implemented. Left padding works. Right padding still not visible/respected.

## The Core Problem

In CSS, when you have a horizontally scrolling container with `overflow-x: auto`, the browser calculates the scrollable width based on the content. **Right padding on the scrolling content is typically not included in this calculation** - it gets "swallowed" or collapsed.

This is a well-documented CSS quirk that affects:
- Flexbox containers with `overflow-x: auto`
- Inline-flex containers
- Grid containers with horizontal overflow

The left padding works because it pushes the first item inward, creating visible space. The right padding doesn't work because there's no content after the last item to "push against."

## What Might Work (Untested)

1. **Add an actual empty div as the last child** of `.carousel` with a fixed width equal to desired spacing. This is a DOM-based solution rather than CSS-only.

2. **Use margin-right on the last card** instead of padding on the container:
   ```css
   .portfolioCard:last-child {
     margin-right: var(--spacing-xl);
   }
   ```

3. **Wrap content in another div** and apply padding to that inner wrapper.

4. **JavaScript solution** - Calculate and set the carousel width explicitly to include the right padding.

5. **Use CSS Grid** instead of flexbox - some reports suggest grid handles this differently.

6. **box-decoration-break: clone** - Experimental property that might help.

## Files Involved

- `/src/components/portfolio/Projects.module.css` - Projects carousel styles
- `/src/components/portfolio/Reviews.module.css` - Reviews carousel styles (identical implementation)
- `/src/components/portfolio/Projects.tsx` - Projects carousel component
- `/src/components/portfolio/Reviews.tsx` - Reviews carousel component

## CSS Variables Used
- `--spacing-xl` = 48px (the desired padding amount)
- `--spacing-lg` = 32px (gap between cards)
- `--spacing-md` = 24px
- `--spacing-sm` = 16px

## Browser Testing
Testing primarily in Safari/Chrome on macOS. The issue appears consistent across browsers.

## Question for Next Agent

How can we reliably add right-side padding/spacing to a horizontally scrolling full-bleed carousel that:
1. Extends to viewport edges (uses the `margin-left: calc(-50vw + 50%)` trick)
2. Uses flexbox with scroll-snap
3. Already has working left-side padding via `padding-left` + `scroll-padding-left`
4. Needs matching right-side visual spacing when scrolled to the end

The solution should ideally be CSS-only and not require adding empty DOM elements, but a clean DOM-based solution is acceptable if CSS-only isn't possible.
