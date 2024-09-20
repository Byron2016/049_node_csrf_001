<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>049_node_csrf_001</h1>
	</div>
</div>

&nbsp;

# Table of contents

---

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technology stack](#technology-stack)
- [Technologies used](#technologies-used)
- [References](#references)
- [Steps](#steps)

[⏪(Back to top)](#table-of-contents)

# Project Description

**049_node_csrf_001** is a practice to understand an **Attack CSRF y CSRF Tokens in Node.js** following Youtube
4tomik's tutorial [Tutorial de Ataque CSRF y CSRF Tokens en Node.js](https://www.youtube.com/watch?v=C9dvkIndTLA&t=359s) [Github](https://github.com/4tomik/csrf)
and the other help that you can find into **Reference** section.

# Technology stack

We are going to use

- We are going to use **pnpm**.
- **Backend**: We are going to use **Nodejs** with **express**.

[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[⏪(Back to top)](#table-of-contents)

# References

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

[⏪(Back to top)](#table-of-contents)

# Steps

- Initial steps root level

  - Add package.json file

    ```bash
      pnpm init
    ```

  - Add .gitignore file

    ```bash
      touch .gitignore
      node --eval "fs.writeFileSync('.gitignore', 'node_modules\n')"
    ```

  - Add Prettier

    - Add prettier dev dependency

      ```bash
        pnpm i -D -E prettier
      ```

    - Add .prettierignore file

      ```bash
        touch .prettierignore
        echo "coverage
        public
        dist
        pnpm-workspace.yaml
        pnpm-lock.yaml
        .vscode
        .prettierrc
        .lintstagedrc
        package.json
        README.md" > .prettierignore
      ```

    - Add .prettierrc file

      ```bash
        touch .prettierrc
        echo "{
        \"semi\": true,
        \"singleQuote\": true
        }" > .prettierrc
      ```

    - Add package.json scrpts

      ```bash
        npm pkg set scripts.format="prettier . --check"
        npm pkg set scripts.format:write="prettier .  --write"
      ```

    - Add .vscode

      - Add and configure .vscode settings.json

        ```bash
          mkdir .vscode
          cd .vscode
          touch settings.json
          echo "{
          \"editor.formatOnSave\": true,
          \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"
          }" > settings.json
          cd ..
        ```

      - Add esben.prettier-vscode extension to VSCode.

  - Add .editorconfig file

    ```bash
      touch .editorconfig
      echo "root = true
          
      [*]
      indent_style = space
      indent_size = 2
      end_of_line = lf
      charset = utf-8
      trim_trailing_whitespace = true
      insert_final_newline = true
      
      [*.md]
      trim_trailing_whitespace = false" > .editorconfig
    ```

  - ESLint

    - Add ESLint dev dependency

      ```bash
        pnpm create @eslint/config@latest

        # How would you like to use ESLint?           · To check syntax and find problems
        # What type of modules does your project use? · JavaScript modules (import/export)
        # Which framework does your project use?      · None of these
        # Does your project use TypeScript?           · No
        # Where does your code run?                   · all
        # The config that you have selected requires the following dependencies:
        #  --> eslint, globals, @eslint/js
        # Would you like to install them now?         ·  Yes
        # Which package manager do you want to use?   · pnpm
      ```

    - Add eslint-config-prettier to aboit prettier and ESLint confligs

      ```bash
        pnpm i -D eslint-config-prettier
      ```

      ```javascript
        ....
        import eslintConfigPrettier from 'eslint-config-prettier';

        export default [
          ....
          eslintConfigPrettier,
        ];
      ```

    - Add package.json scrpts

      ```bash
        npm pkg set scripts.lint:nofix="eslint ."
        npm pkg set scripts.lint="eslint . --fix"
        npm pkg set scripts.lint:inspect:write="eslint --inspect-config"
      ```

  - Install husky and lint-staged

    - Add husky and lint-staged dev dependency

      ```bash
        pnpm add -D husky lint-staged
      ```

    - Init husky and add pre-commit script

      ```bash
        npx husky init
        node --eval "fs.writeFileSync('.husky/pre-commit','pnpm exec lint-staged\n')"
      ```

    - Update package.json or add .lintstagedrc

      ```json
        {
          ....
          "lint-staged": {
            "**/*.{js,ts,tsx}": [
              "eslint --fix"
            ],
            "**/*": "prettier --write   --ignore-unknown"
          }
        }
      ```
      
      ```json
        {
          "**/*": [
            "pnpm run format:write",
            "pnpm run lint"
          ]
        }
      ```
