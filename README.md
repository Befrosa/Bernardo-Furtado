# Portfólio Profissional | Bernardo Furtado

![Portfólio Tech](./public/portfolio-preview.jpg)

## 🚀 Sobre o Projeto

Este é um portfólio profissional de tecnologia construído com React, TypeScript e diversas ferramentas modernas de frontend. O site apresenta um design técnico com elementos masculinos, focado em destacar habilidades de desenvolvimento e liderança técnica.

### ✨ Características

- **Design Moderno e Técnico**: Interface com estética masculina e elementos visuais técnicos
- **Animações Suaves**: Utilizando Framer Motion para experiência de navegação fluida
- **Totalmente Responsivo**: Adaptado para todos os tamanhos de tela
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **Código Limpo**: Desenvolvido com TypeScript para melhor manutenção

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca UI
- **TypeScript** - Superset JavaScript com tipagem
- **Vite** - Build tool e dev server
- **Styled Components** - Estilização CSS-in-JS
- **Framer Motion** - Biblioteca de animações
- **React Icons** - Pacote de ícones
- **React Intersection Observer** - Detecção de elementos visíveis

## 📋 Seções

- **Hero** - Apresentação inicial com call-to-action
- **Projetos** - Portfólio de trabalhos anteriores
- **Sobre** - Informações pessoais e experiência
- **Serviços** - Serviços oferecidos
- **Habilidades** - Skills técnicas
- **Contato** - Formulário de contato e informações

## ⚙️ Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build
```

## 🔍 Estrutura do Projeto

```
/src
  /assets        # Imagens e recursos estáticos
  /components    # Componentes reutilizáveis
  /sections      # Seções principais da página
  /hooks         # Custom hooks
  /styles        # Estilos globais
```

## 📝 Personalização

O portfólio pode ser facilmente personalizado atualizando:

- Variáveis de cores em `src/index.css`
- Informações pessoais nos componentes da pasta `sections`
- Projetos em `src/sections/Projects.tsx`

## 📱 Contato

Bernardo Furtado - [LinkedIn](https://linkedin.com/in/bernardofurtado) - contato@bernardofurtado.dev

---

&copy; 2025 Bernardo Furtado. Todos os direitos reservados.
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
