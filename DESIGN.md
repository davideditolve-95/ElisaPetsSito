---
name: Pet Care with a Sweet Touch
colors:
  surface: '#fff8f8'
  surface-dim: '#e0d8d9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf1f2'
  surface-container: '#f5eced'
  surface-container-high: '#efe6e7'
  surface-container-highest: '#e9e0e1'
  on-surface: '#1e1b1c'
  on-surface-variant: '#4f4447'
  inverse-surface: '#342f30'
  inverse-on-surface: '#f8efef'
  outline: '#817477'
  outline-variant: '#d3c2c6'
  surface-tint: '#7a5461'
  primary: '#7a5461'
  on-primary: '#ffffff'
  primary-container: '#f7c6d6'
  on-primary-container: '#75505d'
  inverse-primary: '#eabaca'
  secondary: '#73584d'
  on-secondary: '#ffffff'
  secondary-container: '#fcd8ca'
  on-secondary-container: '#785d51'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#d2d3d3'
  on-tertiary-container: '#595b5b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e4'
  primary-fixed-dim: '#eabaca'
  on-primary-fixed: '#2e121e'
  on-primary-fixed-variant: '#5f3d4a'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#e2bfb1'
  on-secondary-fixed: '#2a170e'
  on-secondary-fixed-variant: '#5a4137'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fff8f8'
  on-background: '#1e1b1c'
  surface-variant: '#e9e0e1'
typography:
  h1:
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built on the intersection of professional grooming excellence and playful, heartfelt care. The personality is "Sweet, Gentle, and Expert." It targets pet owners who view their animals as family members and seek a premium yet approachable experience.

The visual style follows a **Modern Minimalism** approach with **Tactile** influences. It utilizes heavy whitespace to convey cleanliness (essential for a grooming salon) while softening the modern structure with rounded edges and a warm, confectionary-inspired color palette. The goal is to evoke a sense of calm and trust, ensuring the user feels their pet is entering a safe, loving environment.

## Colors

The palette is derived directly from the brand’s visual identity, creating a cohesive "Strawberries and Chocolate" aesthetic.

- **Primary (Pastel Pink):** Used for primary actions, highlights, and soft background washes to keep the mood upbeat and friendly.
- **Secondary (Chocolate Brown):** The anchor of the design system. It is used for all typography, borders, and iconography to provide a grounded, high-contrast alternative to standard blacks or greys.
- **Neutral (White & Subtle Pink):** White serves as the primary canvas to ensure the "clean" aspect of the salon's brand is felt. A very faint pink tint is used for secondary containers to add warmth.

## Typography

The design system utilizes **Plus Jakarta Sans** for all levels of the hierarchy. Its soft, rounded terminals and geometric clarity strike the perfect balance between "friendly" and "professional." 

All text must be rendered in **Chocolate Brown (#4D362C)**. Do not use pure black. This maintains the warmth of the brand and ensures a softer visual vibration against the Pastel Pink and White backgrounds. Headlines should use tighter letter spacing for a modern, editorial look, while body text maintains a generous line height to ensure accessibility and a breezy, clean feel.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop (12 columns) and a fluid model for mobile devices. The rhythm is based on an 8px square grid to maintain mathematical harmony across all components.

Layouts should favor high-density margins and wide gutters to prevent the UI from feeling "cramped." Components like cards and sections should use "Large" (48px) vertical spacing to emphasize the "clean" and "modern" brand attributes. Content should be centered with generous breathing room to mimic the premium feel of a high-end boutique.

## Elevation & Depth

To maintain the "Modern" and "Clean" aesthetic, this design system avoids heavy, dark shadows. Instead, it uses two primary methods for depth:

1.  **Bold Borders:** Influenced by the logo, containers and cards use a 1px or 2px solid Chocolate Brown border. This creates a clear, structured "sticker-like" feel that is both playful and organized.
2.  **Tonal Layering:** Depth is achieved by placing White cards on top of Subtle Pink (#FFF5F7) backgrounds. 
3.  **Soft Brown Shadows:** When a shadow is necessary (e.g., for a floating action button), use a very diffused shadow with a Chocolate Brown tint at 8-10% opacity rather than grey, keeping the elevation "warm."

## Shapes

The shape language is defined by organic, friendly curves. Following the logo's circular motif, all interactive elements—including buttons, input fields, and cards—must use **Rounded** corners.

Standard components use a 0.5rem (8px) radius, while larger containers like cards or promotional banners should use 1rem (16px) or 1.5rem (24px) to emphasize the soft, approachable nature of the brand. Avatars for pets should always be perfectly circular.

## Components

### Buttons
- **Primary:** Pastel Pink background with a Chocolate Brown border (2px) and Chocolate Brown text.
- **Secondary:** White background with a Chocolate Brown border and text.
- **Shape:** Fully rounded ends (pill-shaped) for high-energy CTAs, or 8px rounded corners for secondary actions.

### Cards
- White background, 1px Chocolate Brown border, and 16px corner radius. 
- Use internal padding of 24px (md) to ensure content doesn't feel crowded.

### Input Fields
- White background with a 1px Chocolate Brown border.
- Labels are always Chocolate Brown, positioned above the field in `label-md` style.
- Rounded corners at 8px.

### Icons
- **Style:** Line-art only. Stroke weights should be consistent (approx 1.5pt to 2pt).
- **Color:** Always Chocolate Brown. 
- Icons should have a slightly "hand-drawn" or rounded terminal style to match the dog illustration in the logo.

### Chips & Tags
- Used for pet services (e.g., "Nail Trimming", "Bath"). 
- Pastel Pink background with no border and `caption` level typography in Brown. 
- High roundedness (pill-shape).

### Navigation
- Top-tier navigation should be clean with high horizontal spacing. 
- Active states are indicated by a small Pink dot or a soft Pink underline with rounded caps.