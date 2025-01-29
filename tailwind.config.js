import TWSB from 'tailwind-scrollbar';
import daisyui from 'daisyui';
import TWM from 'tailwindcss-motion';
import plugins from 'flowbite/plugin';
//@ts-ignore
import ft from 'flowbite-typography';
//@ts-check
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./public/**/*.html", "./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded'], // Add variants if needed
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#a200ff",
          "primary-content": "#ebd9ff",
          "secondary": "#005fff",
          "secondary-content": "#cfe2ff",
          "accent": "#008900",
          "accent-content": "#d3e8d1",
          "neutral": "#212920",
          "neutral-content": "#cdd0cd",
          "base-100": "#fffcea",
          "base-200": "#dedbcb",
          "base-300": "#bebbae",
          "base-content": "#161613",
          "info": "#0092b1",
          "info-content": "#00080c",
          "success": "#83f464",
          "success-content": "#061403",
          "warning": "#e0b700",
          "warning-content": "#120c00",
          "error": "#ff0060",
          "error-content": "#160003",
        }, dark: {
          "primary": "#00b4ff",
          "primary-content": "#000c16",
          "secondary": "#0064ff",
          "secondary-content": "#d0e3ff",
          "accent": "#00a0db",
          "accent-content": "#000911",
          "neutral": "#29202e",
          "neutral-content": "#d0cdd1",
          "base-100": "#012535",
          "base-200": "#011f2d",
          "base-300": "#001925",
          "base-content": "#c8cfd3",
          "info": "#00cbff",
          "info-content": "#000f16",
          "success": "#009871",
          "success-content": "#000804",
          "warning": "#f36700",
          "warning-content": "#140400",
          "error": "#e9464c",
          "error-content": "#130202",
        }
      },
    ],
  },
  plugins: [plugins,daisyui, TWM, TWSB,ft],
}