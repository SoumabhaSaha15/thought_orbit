/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  mode: "jit",
  content: ["./public/**/*.html", "./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
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
        },
      },
    ],
  },
  plugins: [daisyui],
}