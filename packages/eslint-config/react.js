import base from "./base.js";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";

export default [
  ...base,
  {
    plugins: { react, "react-hooks": hooks },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.recommended.rules,
      ...hooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
