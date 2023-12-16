/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
    semi: true,
    trailingComa: "always",
    tabWidth: 4,
    singleQuote: true,
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
    ],
};

export default config;
