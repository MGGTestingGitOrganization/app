module.exports = {
  env: {
    es6: true, // Para habilitar las características de ES6
    node: true, // Para habilitar el entorno Node.js
  },
  parserOptions: {
    ecmaVersion: 2018, // Para habilitar las características de ES2018
  },
  overrides: [
    {
      files: ["index.js"],
      rules: {
        eqeqeq: "error", // Requiere el uso de === y !==
        curly: "error", // Requiere llaves después de las declaraciones condicionales
        "prefer-const": "warn",
        "no-var": "error",
      },
    },
  ],
};
