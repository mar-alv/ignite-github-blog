<h1 align='center'> Ignite GitHub Blog </h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Design](https://www.figma.com/file/9n2ccyeFz0vWsJ6Dcx5JuR/GitHub-Blog-(Community)?type=design&node-id=2-12&mode=design&t=IjiuQjVEQfwG7ASw-0)

  [🇵🇹 Português](./docs/README-pt.md)

</div>

## 📚 Summary
- [❕ About](#about)
- [📖 Instructions](#instructions)
  - [📥 Install](#install)
  - [🚀 Run Locally](#locally)
  - [📋 Run Unit Tests](#unit-tests)
  - [📔 Run Storybook](#storybook)
- [📂 Structure](#structure)
- [🧰 Technologies](#technologies)
- [📸 Screenshots and 🎥 Recordings](#screenshots-prints)
- [👤 Author](#author)
- [📄 License](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ About</a>
This is my implementation of the challenge project "GitHub Blog" from the third ReactJS module of [Ignite](https://www.rocketseat.com.br/ignite), an intermediate and advanced course in various programming languages and technologies offered by [Rocketseat](https://www.rocketseat.com.br/).

It implements the following functionalities, which will be demonstrated in photos and videos later on:
#### **Home screen**
- **User search:** Search for users on GitHub to show its info, repositories and issues
- **Show user's info:** Show user's info like profile image, name, description, nick, company and followers quantity
- **Repository selection:** List the user's public repositories e allows selecting from which the issues will be listed
- **Issues listing:** Shows all issues of the selected repository
- **Issues search:** Filters issues based on subtexts present in the title or body of it
#### **Issue screen**
- **Issue description:** Shows the complete and formatted description of the issue, when it was posted and how many comments it has
- **Issue's comments:** List the comments posted in the issue

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instructions</a>
#### <a id='instalar' style='text-decoration: none; color: inherit;'>📥 Install</a>
Paste the 1º command into a terminal opened within a folder of your preference to clone the project
```sh
git clone https://github.com/mar-alv/ignite-coffee-delivery.git
```

Then run one of the versions of the 2º command to install the dependencies
```sh
npm i
```
```sh
npm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Run Locally</a>
Paste the command into a terminal, the application will be accessable through this [link](http://localhost:5173)
```sh
npm run dev
```

#### <a id='unit-tests' style='text-decoration: none; color: inherit;'>📋 Run Unit Tests</a>
Paste the command into a terminal, they will be exectued one after the other mentioning if there were failed tests
```sh
npm run tests
```

#### <a id='storybook' style='text-decoration: none; color: inherit;'>📔 Run Storybook</a>
Paste the command into a terminal, the project's components documentation will be accessible through this [link](http://localhost:6006)
```sh
npm run storybook
```

### <a id='structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
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
│   │     ├── context x/
│   │     │     ├── component y/
│   │     │     │     └── ...
│   │     │     └── ...
│   │     └── ...
│   ├── context/
│   │     └── ...
│   ├── interfaces/
│   │     ├── context x/
│   │     │     └── ...
│   │     └── ...
│   ├── libs/
│   │     └── ...
│   ├── mappers/
│   │     └── ...
│   ├── pages/
│   │     ├── page x/
│   │     │     ├── component y/
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
│   │     ├── context x/
│   │     │			└── ...
│   │     └── ...
│   └── ...
│ tests/
│   ├── context x/
│   │     └── ...
│   └── ...
```

### <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Technologies</a>
#### Build Tools
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

#### Documentation
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

#### Front-end Framework
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![React Router DOM](https://img.shields.io/badge/React%20Router%20DOM-61DAFB?style=for-the-badge&logo=react-router&logoColor=white&color=red)](https://reactrouter.com/en/main)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

#### Styling
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

#### Utilities
![Axios](https://img.shields.io/badge/Axios-764ABC?style=for-the-badge&labelColor=white&logo=axios&logoColor=764ABC)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)
[![React Markdown](https://img.shields.io/badge/React_Markdown-282c34?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/remarkjs/react-markdown)
[![Zod](https://img.shields.io/badge/Zod-007ACC?style=for-the-badge&logo=superman&logoColor=white)](https://zod.dev/)

#### Testing
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![React Testing Library](https://img.shields.io/badge/React%20Testing%20Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro)

### <a id='screenshots-prints' style='text-decoration: none; color: inherit;'>📸 Screenshots and 🎥 Recordings</a>
For a longer video demonstration click here and like my post on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7195123027691368449/)

<div align='center'>

  ![searching-user](./.github/user-search.gif)
  User search

</div>

<div align='center'>

  ![home-page](./.github/home-page.gif)
  Home page

</div>

<div align='center'>

  ![home-page-mobile](./.github/home-page-mobile.gif)
  Home page mobile

</div>

<div align='center'>

  ![issue-page](./.github/issue-page.gif)
  Issue page

</div>

<div align='center'>

  ![issue-page-mobile](./.github/issue-page-mobile.gif)
  Issue page mobile

</div>

<div align='center'>

  ![searching-issues](./.github/issues-search.gif)
  Issues search

</div>

<div align='center'>

  ![generic-stories](./.github/generic-stories.gif)
  Generic stories

</div>

<div align='center'>

  ![common-component-stories](./.github/common-component-stories.gif)
  Common component stories

</div>

<div align='center'>

  ![search-stories](./.github/search-stories.gif)
  Search component stories

</div>

### <a id='author' style='text-decoration: none; color: inherit;'>👤 Author</a>
<div style='display: flex; align-items: center;'>
		<img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
		<div>
				<strong>Marcelo Alvarez</strong>
				<br>
				<em>Front-end Developer</em><br>
				<span>"Some AI generated funny quote here 😗"</span><br>
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

### <a id='license' style='text-decoration: none; color: inherit;'>📄 License</a>
Licensed under [MIT](./LICENSE)
