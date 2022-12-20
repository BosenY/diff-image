//@ts-nocheck
import { defineConfig } from "father";

export default defineConfig({
  cjs: {
    output: "dist",
    transformer: "babel",
  },
  prebundle: {},
  extraBabelPlugins: [
    [
      "./node_modules/babel-plugin-add-module-exports", // 解决babel6 module.exports 需要加default的情况 - https://github.com/59naga/babel-plugin-add-module-exports
      {
        test: "\\.(ts)$",
      },
    ],
  ],
});
