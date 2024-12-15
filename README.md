# Trabalho Prático - Tecnologias Web 2024/2025

Este projeto é uma implementação prática desenvolvida como parte da disciplina de **Tecnologias Web** do ano letivo 2024/2025. O objetivo principal é a aplicação de conhecimentos em HTML, CSS e JavaScript para criar uma réplica funcional de um website de companhia aérea e adicionar funcionalidades interativas.

## 📋 Requisitos do Projeto

### 1. Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:
- `index.html`: Contém a estrutura HTML da página.
- `estilos.css`: Define o design e o layout da página utilizando CSS.
- `logica.js`: Implementa funcionalidades interativas em JavaScript.

### 2. Componentes do Projeto
#### Réplica de Imagem
- Baseada em um dos websites de companhias aéreas listados:
  - [TAP](https://www.flytap.com/pt-pt/)
  - [Iberia](https://www.iberia.com/pt/)
  - [Lufthansa](https://www.lufthansa.com/)
  - [ITA Airways](https://www.ita-airways.com/)
  - [KLM](https://www.klm.pt/)
  - [Air France](https://wwws.airfrance.pt/)
  - [British Airways](https://www.britishairways.com/)
  - [Aer Lingus](https://www.aerlingus.com/)
- Implementação com:
  - **HTML/CSS de raiz** (sem templates ou frameworks como Bootstrap).
  - **CSS flexbox e grid** obrigatórios.
  - Layout responsivo com suporte a **menu sandwich** em resoluções menores.
  - **Submenus** na barra de navegação principal com efeito hover.

#### Funcionalidades Interativas
- Simulação do **estado de voo**, incluindo:
  - Entrada de dados pelo usuário: tipo de voo (ida ou volta), data, cidade de partida/chegada.
  - Geração dinâmica de informações do voo com base em regras específicas.
  - Exibição de mensagem sobre o estado do voo:
    - **Ida:** "No horário" (dia par) ou "Atrasado" (dia ímpar).
    - **Volta:** "No horário" (mês par) ou "Chegou" (mês ímpar).

## 🚀 Tecnologias Utilizadas
- **HTML5** para a estruturação da página.
- **CSS3** com flexbox e grid para o layout e estilo.
- **JavaScript** para as funcionalidades dinâmicas.

## ⚙️ Como Executar o Projeto
1. Faça o download do repositório ou clone-o usando:
   ```bash
   git clone <URL do repositório>
