<h1 align='center'> Ignite GitHub Blog </h1>

<div align='center'>

  ![project-img](../.github/cover.jpg)

  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Design](https://www.figma.com/file/9n2ccyeFz0vWsJ6Dcx5JuR/GitHub-Blog-(Community)?type=design&node-id=2-12&mode=design&t=IjiuQjVEQfwG7ASw-0)

  [⬅️ Voltar](../README.md)

</div>

## 📚 Sumário
- [❕ Sobre](#about)
- [📖 Instruções](#instructions)
	- [📥 Instalar](#install)
	- [🚀 Rodar Localmente](#locally)
	- [📋 Rodar Testes Unitários](#unit-tests)
	- [📔 Rodar Storybook](#storybook)
- [📂 Estrutura](#structure)
- [🧰 Tecnologias](#technologies)
- [📸 Prints e 🎥 Gravações](#screenshots-prints)
- [👤 Autor](#author)
- [📄 Licença](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Esta é a minha implementação do desafio "GitHub Blog" do terceiro módulo de ReactJS do [Ignite](https://www.rocketseat.com.br/ignite), um curso intermediário e avançado de diversas linguagens de programação e tecnologias oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

Nela, foram implementadas as seguintes funcionalidades, que serão demonstradas em fotos e vídeos mais adiante:
#### **Tela inicial**
- **Busca de usuário:** Busca usuário no GitHub para ver seus dados, repositórios e issues
- **Exibição de dados do usuário:** Exibe informações como foto, nome, descrição, nick, empresa e quantidade de seguidores do usuário buscado
- **Escolha de repositório:** Lista repositórios públicos do usuário e permite escolher de qual as issues serão exibidas 
- **Listagem de issues:** Exibe todas as issues atreladas ao repositório escolhido
- **Busca de issues:** Filtra as issues por trechos de texto presentes no título ou corpo dela
#### **Tela da issue**
- **Descrição da issue:** Exibe a descrição completa e formatada da issue, quando foi postada e a quantidade de comentários
- **Comentários da issue:** Exibe comentários postados na issue

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
#### <a id='install' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro da pasta de sua preferência para clonar o projeto
```sh
git clone https://github.com/mar-alv/ignite-github-blog.git
```

Em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
npm i
```
```sh
npm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, a aplicação estará acessível através desse [link](http://localhost:5173)
```sh
npm run dev
```

#### <a id='unit-tests' style='text-decoration: none; color: inherit;'>📋 Rodar Testes Unitários</a>
Cole o comando em um terminal, eles serão executados um após o outro apontando se houve testes falhos
```sh
npm run tests
```

#### <a id='storybook' style='text-decoration: none; color: inherit;'>📔 Rodar Storybook</a>
Cole o comando num terminal, a documentação dos componentes do projeto estará acessível através desse [link](http://localhost:6006)
```sh
npm run storybook
```

### <a id='structure' style='text-decoration: none; color: inherit;'>📂 Estrutura</a>
```
│ __mocks__/
│   └── ...
│ .github/
│   └── ...
│ .storybook/
│   └── ...
│ .tests/
│   └── ...
│ docs/
│   └── ...
│ src/
│   ├── @types/
│   │     └── ...
│   ├── assets/
│   │     └── ...
│   ├── components/
│   │     ├── contexto x/
│   │     │     ├── componente y/
│   │     │     │     └── ...
│   │     │     └── ...
│   │     └── ...
│   ├── context/
│   │     └── ...
│   ├── interfaces/
│   │     ├── contexto x/
│   │     │     └── ...
│   │     └── ...
│   ├── libs/
│   │     └── ...
│   ├── mappers/
│   │     └── ...
│   ├── pages/
│   │     ├── página x/
│   │     │     ├── componente y/
│   │     │     └──   └── ...
│   │     └── ...
│   ├── services/
│   │     └── ...
│   ├── styles/
│   │     └── ...
│   ├── utils/
│   │     └── ...
│   └── ...
│ stories/
│   ├── components/
│   │     ├── contexto x/
│   │     │			└── ...
│   │     └── ...
│   └── ...
│ tests/
│   ├── context x/
│   │     └── ...
│   └── ...
```

### <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Tecnologias</a>
#### Build
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

#### Documentação
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

#### Framework Front-end
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-61DAFB?style=for-the-badge&logo=react-router&logoColor=white&color=red)](https://reactrouter.com/en/main)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

#### Estilização
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

#### Testes
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)

#### Utilidades
![Axios](https://img.shields.io/badge/Axios-764ABC?style=for-the-badge&labelColor=white&logo=axios&logoColor=764ABC)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)
[![React Markdown](https://img.shields.io/badge/React_Markdown-282c34?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/remarkjs/react-markdown)
[![Zod](https://img.shields.io/badge/Zod-007ACC?style=for-the-badge&logo=superman&logoColor=white)](https://zod.dev/)

### <a id='screenshots-prints' style='text-decoration: none; color: inherit;'>📸 Prints e 🎥 Gravações</a>
Para uma demonstração mais longa clique aqui e curta meu post no [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7195123027691368449/)

<div align='center'>

  ![searching-user](../.github/user-search.gif)
	Busca de usuário

</div>

<div align='center'>

  ![home-page](../.github/home-page.gif)
	Tela inicial

</div>

<div align='center'>

  ![home-page-mobile](../.github/home-page-mobile.gif)
	Tela inicial mobile

</div>

<div align='center'>

  ![issue-page](../.github/issue-page.gif)
	Tela de issues

</div>

<div align='center'>

  ![issue-page-mobile](../.github/issue-page-mobile.gif)
	Tela de issues mobile

</div>

<div align='center'>

  ![searching-issues](../.github/issues-search.gif)
	Busca de issues

</div>

<div align='center'>

  ![generic-stories](../.github/generic-stories.gif)
	Stories genéricos

</div>

<div align='center'>

  ![common-component-stories](../.github/common-component-stories.gif)
	Stories de componentes comuns

</div>

<div align='center'>

  ![search-stories](../.github/search-stories.gif)
	Stories do componente de busca

</div>

### <a id='author' style='text-decoration: none; color: inherit;'>👤 Autor</a>
<div style='display: flex; align-items: center;'>
		<img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
		<div>
				<strong>Marcelo Alvarez</strong>
				<br>
				<em>Front-end Developer</em><br>
				<span>"Uma citação engraçada gerada por IA aqui 😗"</span><br>
				<a href='https://www.linkedin.com/in/mar-alv'>
					<img
						alt='LinkedIn'
						src='https://img.shields.io/badge/LinkedIn-Marcelo%20Alvarez-0077B5?logo=linkedin&logoColor=white'
					/>
				</a>
				<a href='https://mar-alv.github.io/'>
					<img
						alt='Portfolio'
						src='https://img.shields.io/badge/Portfolio-Marcelo%20Alvarez-000?style=flat&logo=portfolio&logoColor=white'
					/>
				</a>
		</div>
</div>

### <a id='license' style='text-decoration: none; color: inherit;'>📄 Licença</a>
Licenciado via [MIT](../LICENSE)
