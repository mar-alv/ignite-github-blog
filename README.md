<h1 align='center'> Ignite GitHub Blog </h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Design](https://www.figma.com/file/9n2ccyeFz0vWsJ6Dcx5JuR/GitHub-Blog-(Community)?type=design&node-id=2-12&mode=design&t=IjiuQjVEQfwG7ASw-0)

  [🇧🇷 Português](#pt-br) / [🇬🇧 English](#en)

</div>

## <a id='pt-br' style='text-decoration: none; color: inherit;'>🇧🇷 Português</a>

### 📚 Sumário
- [❕ Sobre](#pt-br-sobre)
- [📖 Instruções](#pt-br-instrucoes)
  - [📥 Instalar](#pt-br-instalar)
  - [🚀 Rodar Localmente](#pt-br-localmente)
  - [📋 Rodar Testes Unitários](#pt-br-testes-unitarios)
  - [📔 Rodar Storybook](#pt-br-storybook)
- [📂 Estrutura](#pt-br-estrutura)

#### <a id='pt-br-sobre' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Esta é a minha implementação do desafio "GitHub Blog" do terceiro módulo de ReactJS do [Ignite](https://www.rocketseat.com.br/ignite), um curso intermediário e avançado de diversas linguagens de programação e tecnologias oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

Nela, foram implementadas as seguintes funcionalidades, que serão demonstradas em fotos e vídeos mais adiante:
##### **Tela inicial**
- **Listagem de issues:** Exibe todas as issues atreladas ao repositório
- **Filtragem de issues:** Filtra as issues por trechos de texto presentes no título ou corpo dela
##### **Tela da issue**
- **Descrição da issue:** Exibe a descrição completa e formatada da issue, quando foi postada e a quantidade de comentários

#### <a id='pt-br-instrucoes' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
##### <a id='pt-br-instalar' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro da pasta de sua preferência para clonar o projeto, em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
git clone https://github.com/mar-alv/ignite-github-blog.git
npm i # Ou npm install
```

##### <a id='pt-br-localmente' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, a aplicação estará acessível através desse [link](http://localhost:5173)
```sh
npm run dev
```

##### <a id='pt-br-testes-unitarios' style='text-decoration: none; color: inherit;'>📋 Rodar Testes Unitários</a>
Cole o comando em um terminal, eles serão executados um após o outro apontando se houve testes falhos
```sh
npm run tests
```

##### <a id='pt-br-storybook' style='text-decoration: none; color: inherit;'>📔 Rodar Storybook</a>
Cole o comando num terminal, a documentação dos componentes do projeto estará acessível através desse [link](http://localhost:6006)
```sh
npm run storybook
```

#### <a id='pt-br-estrutura' style='text-decoration: none; color: inherit;'>📂 Estrutura</a>
```
│ .github/
│   └── ... imagens e gifs usados nesta documentação
│ .storybook/
│   └── ... arquivos que mantém o funcionamento do Storybook
│ .tests/
│   └── ... arquivos que mantém o funcionamento dos testes
│ src/
│   ├── assets/
│   │     └── ... imagens usadas
│   ├── components/
│   │     ├── contexto x/
│   │     │     ├── componente y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   │     └── ...
│   ├── contexts/
│   │     └── ... actions, contextos e providers
│   ├── interfaces/
│   │     └── ... interfaces usadas
│   ├── libs/
│   │     └── ... abstração de libs terceiras
│   ├── mappers/
│   │     └── ... mappers usados
│   ├── pages/
│   │     ├── página x/
│   │     │     ├── componente y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   ├── styles/
│   │     └── ... estilos globais e default
│   ├── utils/
│   │     └── ... funções utilitárias usadas
│   └── ...
│ stories/
│   ├── components/
│   │     └── ... stories dos componentes
│   └── ... stories genéricos(cor, ícones e tipografia)
│ tests/
│   ├── ... testes unitários
│   └── ... tests-utils.tsx // funções utilitárias pros testes
```

## <a id='en' style='text-decoration: none; color: inherit;'>🇬🇧 English</a>

### 📚 Summary
- [❕ About](#en-about)
- [📖 Instructions](#en-instructions)
  - [📥 Install](#en-install)
  - [🚀 Run Locally](#en-locally)
  - [📋 Run Unit Tests](#en-unit-tests)
  - [📔 Run Storybook](#en-storybook)
- [📂 Structure](#en-structure)

#### <a id='en-about' style='text-decoration: none; color: inherit;'>❕ About</a>
This is my implementation of the challenge project "GitHub Blog" from the third ReactJS module of [Ignite](https://www.rocketseat.com.br/ignite), an intermediate and advanced course in various programming languages and technologies offered by [Rocketseat](https://www.rocketseat.com.br/).

It implements the following functionalities, which will be demonstrated in photos and videos later on:
##### **Home screen**
- **Issues listing:** Shows all issues of the repository
- **Issues filtering:** Filters issues based on subtexts present in the title or body of it
##### **Issue screen**
- **Issue description:** Shows the complete and formatted description of the issue, when it was posted and how many comments it has

#### <a id='en-instructions' style='text-decoration: none; color: inherit;'>📖 Instructions</a>
##### <a id='en-instalar' style='text-decoration: none; color: inherit;'>📥 Install</a>
Paste the 1º command into a terminal opened within a folder of your preference to clone the project, then run one of the versions of the 2º command to install the dependencies
```sh
git clone https://github.com/mar-alv/ignite-coffee-delivery.git
npm i # Or npm install
```

##### <a id='en-locally' style='text-decoration: none; color: inherit;'>🚀 Run Locally</a>
Paste the command into a terminal, the application will be accessable through this [link](http://localhost:5173)
```sh
npm run dev
```

##### <a id='en-unit-tests' style='text-decoration: none; color: inherit;'>📋 Run Unit Tests</a>
Paste the command into a terminal, they will be exectued one after the other mentioning if there were failed tests
```sh
npm run tests
```

##### <a id='en-storybook' style='text-decoration: none; color: inherit;'>📔 Run Storybook</a>
Paste the command into a terminal, the project's components documentation will be accessible through this [link](http://localhost:6006)
```sh
npm run storybook
```

#### <a id='en-structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
```
│ .github/
│   └── ... images and gifs used in this documentation
│ .storybook/
│   └── ... files to keep Storybook working
│ .tests/
│   └── ... files to keep tests working
│ src/
│   ├── assets/
│   │     └── ... images used
│   ├── components/
│   │     ├── context x/
│   │     │     ├── component y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   │     └── ...
│   ├── contexts/
│   │     └── ... actions, contexts and providers
│   ├── interfaces/
│   │     └── ... used interfaces
│   ├── libs/
│   │     └── ... abstractions of third party libs
│   ├── mappers/
│   │     └── ... used mappers
│   ├── pages/
│   │     ├── page x/
│   │     │     ├── component y/
│   │     │     │     ├── index.tsx
│   │     │     │     └── styles.ts
│   │     │     └── ...
│   ├── styles/
│   │     └── ... global styles and default theme
│   ├── utils/
│   │     └── ... util functions used
│   └── ...
│ stories/
│   ├── components/
│   │     └── ... stories of the components
│   └── ... generic stories (color, icons e typography)
│ tests/
│   ├── ... unit tests
│   └── ... tests-utils.tsx // util functions for tests
```

## 🧰 Technologies
### Build Tools
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Documentation
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

### Front-end Framework
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-61DAFB?style=for-the-badge&logo=react-router&logoColor=white&color=red)](https://reactrouter.com/en/main)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### Styling
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

### Utilities
![Axios](https://img.shields.io/badge/Axios-764ABC?style=for-the-badge&labelColor=white&logo=axios&logoColor=764ABC)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-007ACC?style=for-the-badge&logo=superman&logoColor=white)](https://zod.dev/)

### Testing
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)

## 📸 Screenshots and 🎥 Recordings
For a longer video demonstration click here and like my post on
<a href='https://www.linkedin.com/posts/marcelo-dos-santos-alvarez-474406180_my-code-solution-for-coffee-delivery-a-challenge-activity-7078453723521253376-7vWp/'>LinkedIn</a>

<div align='center'>

  ![home](./.github/home.gif)
  Home screen

</div>

<div align='center'>

  ![home](./.github/home-msite.gif)
  Home screen mobile

</div>

<div align='center'>

  ![adding-coffee](./.github/issue.gif)
  Issue screen

</div>

<div align='center'>

  ![removing-coffee](./.github/issue-msite.gif)
  Issue screen mobile

</div>

<div align='center'>

  ![choosing-payment-method](./.github/filtering.gif)
  Filtering issues

</div>

<div align='center'>

  ![generic-stories](./.github/generic-stories.gif)
  Generic stories

</div>

<div align='center'>

  ![checkout-stories](./.github/component-stories.gif)
  Component stories

</div>

## Author
<div style='display: flex; align-items: center;'>
    <img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
    <div>
        <strong>Marcelo Alvarez</strong>
        <br>
        <em>Front-end Developer</em><br>
        <span>"Some AI generated funny quote here 😗"</span><br>
        <a href='https://www.linkedin.com/in/marcelo-dos-santos-alvarez-474406180/'>LinkedIn</a>
    </div>
</div>

## License
Licensed under [MIT](./LICENSE)
