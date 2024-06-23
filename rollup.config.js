import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
export default {
  input: "lib/index.tsx",
  output: [
    {
      file: "build/index.umd.js",
      format: "umd",
      name: "SaviorVideoPlayer",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    terser(),
  ],
};
