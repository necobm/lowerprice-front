/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}"
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('@tailwindcss/forms'),
];

