# LeitorCódigo_Frontend

Este é o repositório do frontend da aplicação **LeitorCódigo**, desenvolvido com foco em performance, experiência do usuário e integração com o backend.

## ☁️ Deploy

A aplicação está hospedada na plataforma **Vercel**, e pode ser acessada pelo link:  
🔗 [https://leitorcodigo-frontend.vercel.app](https://leitor-codigo-frontend.vercel.app/)

## 🚀 Tecnologias utilizadas

- **Vite + React**: Estrutura moderna e performática para desenvolvimento de interfaces reativas.
- **TypeScript**: Linguagem com tipagem estática que melhora a legibilidade e segurança do código.
- **Tailwind CSS**: Utilizado para estilização rápida e eficiente com classes utilitárias.
- **QuaggaJS**: Biblioteca utilizada para leitura e reconhecimento de **códigos de barras** via câmera do dispositivo.
- **PWA (Progressive Web App)**: A aplicação pode ser **instalada** em seu dispositivo (Windows, macOS, iOS, Android), proporcionando uma experiência semelhante à de um aplicativo nativo.

## 🔐 Controle de Acesso

O frontend possui **controle de permissões baseado em cargos (Roles)**, garantindo que diferentes tipos de usuários tenham acesso apenas às funcionalidades correspondentes às suas permissões.

## 📸 Imagens de exemplo

### 1. Tela de login com auth JWT
![screenshot_1](src/assets/imgs/screenshot_1.jpg)

### 2. Escaneamento do produto usando QuaggaJs
![screenshot_2](src/assets/imgs/screenshot_2.jpg)

### 3. Resultado do escaneamento realizado na api Cosmos Bluesoft, GTIN/EAN
![screenshot_3](src/assets/imgs/screenshot_3.jpg)


## 🌐 Integração

Este frontend se comunica diretamente com a API hospedada no backend disponível no repositório:  
👉 [**LeitorCodigo_Backend**](https://github.com/GustaM0/LeitorCodigo_Backend)

> ⚠️ **Atenção**: Durante o desenvolvimento, o arquivo `.env` foi incluído no repositório. **Isso não deve ser feito em projetos reais**, pois pode expor informações sensíveis como tokens, chaves de API e URLs internas.  
> Sempre adicione a linha (.env) abaixo ao seu arquivo `.gitignore` para evitar esse risco