module.exports = {
  overrides: [
    {
      files: ["index.js"],
      rules: {
        eqeqeq: "error", // Requiere el uso de === y !==
        curly: "error", // Requiere llaves después de las declaraciones condicionales
        "prefer-const": "warn",
      },
    },
  ],
};
