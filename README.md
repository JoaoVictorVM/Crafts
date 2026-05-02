# Crafts

> Coleção de componentes interativos e design systems construídos como laboratório criativo.

Cada entrada explora um padrão diferente de UI — desde micro-interações e animações até sistemas de design com tokens e documentação. O objetivo é experimentar, refinar e manter uma referência visual do que é possível construir com React.

**Demo:** em breve

---

## Tech stack

| Camada | Tecnologia |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Roteamento | React Router v7 |
| Estado | Zustand |
| Ícones | Lucide React |
| Syntax highlight | Shiki |
| Primitivos UI | Radix UI · Base UI |

## Estrutura

```
src/
├── components/     # Componentes isolados por feature
│   ├── ui/         # Elementos base compartilhados (Header, Footer)
│   └── [feature]/  # Sub-componentes de cada projeto
├── pages/          # Uma página por projeto
├── routes/         # Configuração do React Router
├── data/           # Dados estáticos (registro de componentes)
└── styles/         # CSS global e tokens
```

O projeto tem duas categorias de entradas, cada uma com sua convenção:

**Components** — componentes interativos isolados:
```
src/components/[nome]/   → sub-componentes isolados e reutilizáveis
src/pages/[Nome].tsx     → página que centraliza o componente
src/routes/index.tsx     → rota /components/[nome] registrada
src/data/components.ts   → entrada na galeria
```

**Design Systems** — sistemas de design documentados com tokens, tipografia e componentes:
```
src/components/[nome]/   → componentes do design system
src/pages/[Nome].tsx     → página de documentação
src/routes/index.tsx     → rota /designsystem/[nome] registrada
```

## Rodando localmente

```bash
# Instalar dependências
npm install

# Dev server (porta 3000)
npm run dev

# Type-check + build de produção
npm run build

# Preview do build
npm run preview
```

## Licença

MIT — veja [LICENSE](./LICENSE).