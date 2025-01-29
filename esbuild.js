import esbuild from "esbuild";
import { esbuildConfig } from "./esbuild.config.js";
import { rainbow } from "gradient-string";
esbuild
  .build(esbuildConfig)
  .then(() => console.log(rainbow("updated the changes in public/imports/")))
  .catch(() => process.exit(1));