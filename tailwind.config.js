/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "error": "#ba1a1a",
        "secondary-container": "#fcd8ca",
        "surface-tint": "#7a5461",
        "on-tertiary-container": "#595b5b",
        "tertiary": "#5d5f5f",
        "surface-variant": "#e9e0e1",
        "secondary-fixed": "#ffdbcd",
        "surface-dim": "#e0d8d9",
        "secondary": "#73584d",
        "on-primary-container": "#75505d",
        "surface-container": "#f5eced",
        "surface-bright": "#fff8f8",
        "on-surface-variant": "#4f4447",
        "primary-fixed-dim": "#eabaca",
        "secondary-fixed-dim": "#e2bfb1",
        "inverse-surface": "#342f30",
        "on-tertiary-fixed-variant": "#454747",
        "on-tertiary-fixed": "#1a1c1c",
        "primary-fixed": "#ffd9e4",
        "inverse-on-surface": "#f8efef",
        "surface": "#fff8f8",
        "on-tertiary": "#ffffff",
        "on-primary-fixed": "#2e121e",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "surface-container-high": "#efe6e7",
        "on-error": "#ffffff",
        "background": "#fff8f8",
        "tertiary-container": "#d2d3d3",
        "on-secondary-fixed-variant": "#5a4137",
        "primary": "#7a5461",
        "on-secondary-fixed": "#2a170e",
        "on-secondary-container": "#785d51",
        "outline": "#817477",
        "outline-variant": "#d3c2c6",
        "on-background": "#1e1b1c",
        "on-secondary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#1e1b1c",
        "primary-container": "#f7c6d6",
        "surface-container-highest": "#e9e0e1",
        "tertiary-fixed-dim": "#c6c6c7",
        "tertiary-fixed": "#e2e2e2",
        "surface-container-low": "#fbf1f2",
        "on-primary-fixed-variant": "#5f3d4a",
        "error-container": "#ffdad6",
        "inverse-primary": "#eabaca"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "lg": "48px",
        "gutter": "24px",
        "base": "8px",
        "sm": "12px",
        "xl": "80px",
        "xs": "4px",
        "md": "24px",
        "margin": "32px"
      },
      fontFamily: {
        "sans": ['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize: {
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "caption": ["12px", {"lineHeight": "1.4", "fontWeight": "500"}],
        "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "h3": ["24px", {"lineHeight": "1.4", "letterSpacing": "0", "fontWeight": "600"}],
        "h2": ["32px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [],
}
