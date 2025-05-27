import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Adicione a configuração de ignorar padrões aqui
  {
    // Esta configuração se aplicará globalmente ou a padrões não específicos
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "backend/", // <--- ADICIONE ESTA LINHA para ignorar a pasta do seu backend
      "cloud/"    // <--- ADICIONE ESTA LINHA se sua pasta 'cloud' estiver na raiz do projeto Next.js e não dentro de 'backend'
    ],
  },
];

export default eslintConfig;