import path from 'path';
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const esbuildConfig = {
  entryPoints: [path.resolve("public/imports/*.js")], // Include all JS files
  outdir: "public/bundle", // Output directory for code-split files
  bundle: true, // Enable bundling
  minify: false, // Minify files
  sourcemap: false, // No sourcemaps
  format: "esm", // Keep ES module format
  target: "esnext", // Target modern JS
  splitting: true, // Enable code-splitting
  // watch: true, // Watch for changes
};
