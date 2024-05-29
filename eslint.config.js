module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-eval": "error", // Prohíbe el uso de eval()
    "no-alert": "warn", // Advertencia para el uso de alert()
    eqeqeq: "error", // Requiere el uso de === y !==
    curly: "error", // Requiere llaves después de las declaraciones condicionales
    "no-undef": "error", // Prohíbe el uso de variables indefinidas
    "no-unused-vars": "warn", // Advertencia para variables no utilizadas
    "no-console": "warn", // Advertencia para console.log
  },
};
