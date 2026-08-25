# ☕ WorkCoffee

**WorkCoffee** é um site conceito para uma cafeteria inovadora com um modelo de negócio único: os clientes pagam pelo tempo de uso do espaço, que é projetado para produtividade, estudo e relaxamento. O projeto foi desenvolvido para ser uma vitrine digital, apresentando a proposta, o ambiente e os serviços da cafeteria.

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)

## 🚀 Demonstração

Acesse o site em produção: [https://work-coffee.vercel.app/](https://work-coffee.vercel.app/)

## ✨ Sobre o Projeto

A WorkCoffee foi criada com o propósito de oferecer o ambiente perfeito para quem busca concentração e conforto. Diferente de uma cafeteria tradicional, aqui o foco é no espaço e na experiência. O site comunica essa proposta de forma clara e elegante.

### Navegação e Seções

- **Home:** Introdução visual e chamada principal para o conceito da cafeteria.
- **About:** Explica a missão da WorkCoffee de criar um ambiente sereno e tranquilo para trabalho e estudo.
- **Menu:** Exibe um catálogo dos cafés e bebidas disponíveis, com descrições e preços.
- **Plans:** Apresenta o modelo de negócio de cobrança por hora, destacando o valor de R$ 5,00/h.
- **Contact:** Área para contato e localização (funcionalidade a ser implementada).

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[Next.js 14](https://nextjs.org/):** Framework React para renderização e estruturação do site.
- **[React](https://reactjs.org/):** Biblioteca para construção da interface do usuário.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS utilitário para estilização rápida e responsiva.
- **[Vercel](https://vercel.com/):** Plataforma para deploy e hospedagem.

## 📦 Estrutura de Pastas

A estrutura principal do projeto é:

Work-Coffee/\
├── public/ # Arquivos estáticos (imagens, ícones, etc.) \
├── src/\
│ └── app/ # Diretório principal da aplicação Next.js (App Router)\
│ ├── about/ # Página "Sobre"\
│ ├── contact/ # Página "Contato"\
│ ├── menu/ # Página "Menu"\
│ ├── plans/ # Página "Planos"\
│ ├── globals.css # Estilos globais e configurações do Tailwind\
│ ├── layout.js # Layout raiz da aplicação\
│ └── page.js # Página inicial (Home)\
├── .eslintrc.json # Configuração do ESLint\
├── .gitignore # Arquivos ignorados pelo Git\
├── jsconfig.json # Configuração do caminho base para importações\
├── next.config.mjs # Configuração do Next.js\
├── package.json # Dependências e scripts do projeto\
├── postcss.config.mjs # Configuração do PostCSS para o Tailwind\
└── tailwind.config.js # Configuração do Tailwind CSS\


## 💻 Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn, pnpm) instalados.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/alisonnRB/Work-Coffee.git
    cd Work-Coffee
    ```

2. **instale as dependências**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3. **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```

4. **Abra o navegador:**\
Acesse http://localhost:3000 para ver o resultado.


## 🧠 Aprendizados e Melhorias Futuras

Este projeto foi uma ótima oportunidade para praticar a criação de interfaces com Next.js e Tailwind CSS. Para o futuro, algumas melhorias podem ser implementadas:

    Funcionalidade de Reserva: Adicionar um sistema para reservar mesas/horas.

    Integração com CMS: Conectar a um CMS para gerenciar o menu e os planos de forma dinâmica.

    Página de Contato: Tornar o formulário de contato funcional (ex: com EmailJS ou uma API).

    Testes: Adicionar testes unitários e de integração com Jest e React Testing Library.

