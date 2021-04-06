import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import svgr from "@svgr/rollup";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import sourcemaps from "rollup-plugin-sourcemaps";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

// const globals = {
//   react: "React",
//   "react-dom": "ReactDOM",
//   "styled-components": "styled",
// };
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const external = ["react", "react-dom", "styled-components"];
const config = [
  {
    input: pkg.source,
    output: [
      {
        sourcemap: true,
        file: pkg.main,
        format: "cjs",
      },
      {
        sourcemap: true,
        file: pkg.module,
        format: "esm",
      },
      //   {
      //     sourcemap: true,
      //     file: pkg.main,
      //     format: "umd",
      //     name: "FlamingotigerComponents",
      //     globals,
      //   },
    ],
    external,
    plugins: [
      resolve({ extensions }),
      babel({ exclude: "node_modules/**" }),
      commonjs({ include: "node_modules/**" }),
      typescript({ tsconfig: "./tsconfig.json", clean: true }),
      svgr(),
      image(),
      url(),
      peerDepsExternal(),
      sourcemaps(),
      del({ targets: ["dist/*"] }),
    ],
  },
];
export default config;
