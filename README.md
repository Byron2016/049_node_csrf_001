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

  - Worksapaces

    - Add workspaces definition file

      ```bash
        touch pnpm-workspace.yaml
        echo "packages:
        - 'apps/*'
        - 'libs/*'" > pnpm-workspace.yaml
      ```

    - Add apps and libs folders

      ```bash
        mkdir apps 
      ```

- Target-server

  - Initial steps

    - Create a folder named "target-server"

      ```bash
        cd apps && mkdir target-server && cd target-server
      ```

    - Add package.json file

      ```bash
        cd apps/target-server && pnpm init
      ```

    - Add .gitignore file

      ```bash
        # cd apps/target-server
        touch .gitignore
        node --eval "fs.writeFileSync('.gitignore', 'node_modules\n')"
      ```

    - Add dev dependencies

      ```bash
        # cd apps/target-server 
        pnpm i express express-session connect-flash-plus express-handlebars

        # express: server library that we use
        # express-session: CRSF works because how sessions works
        # connect-flash-plus: to flash some messages 
        # express-handlebars: to render html

        pnpm i -D nodemon
      ```
    - Add package.json scrpts

      ```bash
        # cd apps/target-server 
        npm pkg set scripts.start="node src/index.js"
        npm pkg set scripts.dev="nodemon src/index.js"
      ```

  - Add Views

    - Create a folder/files structure 
  
      ```bash
        # cd apps/target-server
        mkdir views && cd views && mkdir layouts && cd layouts && touch main.hbs && cd .. && touch login.hbs
        cd ..
      ```
    - In layouts/main.hbs file 
  
      ```html
        <html lang='en'>
          <head>
            <meta charset='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>CSRF</title>
          </head>
          <body>
            {{{body}}}
          </body>
        </html>
      ```

    - In views/login.hbs file 
  
      ```html
        <form action='/login' method='post'>
          <input type='email' name='email' placeholder='Email' value='test@test.com' />
          <input type='password' name='password' placeholder='Password' value='1234' />
          <input type='submit' />
        </form>
      ```
  - Add db simulation file "src/db.json"
    
    ```json
      [
        {
          "id": 1,
          "name": "Test",
          "email": "test@test.com",
          "password": "1234"
        }
      ]
    ```

  - Add Controllers

    - Create a folder/files structure 
  
      ```bash
        # cd apps/target-server
        mkdir controllers &&  touch login.controllers.js
      ```
    - In login.controllers.js file 
  
      ```javascript
        import * as fs from 'node:fs';
        import { dirname, join } from 'node:path';
        import { fileURLToPath } from 'node:url';
        const __dirname = dirname(fileURLToPath(import.meta.url));
        // Db
        const users = JSON.parse(fs.readFileSync(join(__dirname, '..', 'db.json')));
        console.log(users);
        export const renderLoginForm = (req, res) => {
          res.render('login');
        };
        export const processLoginForm = (req, res) => {
          if (!req.body.email || !req.body.password) {
            return res.status(400).send('All fields are requiered');
          }
          const user = users.find((user) => user.email === req.body.email);
          if (!user || user.password !== req.body.password) {
            return res.status(400).send('Invalid Credentials');
          }
          res.send('ok');
        };
      ```

  - Add Routes

    - Create a folder/files structure 
  
      ```bash
        # cd apps/target-server
        mkdir routes && touch index.routes.js && touch login.routes.js
      ```

    - In index.routes.js file 
  
      ```javascript
        import { Router } from 'express';
        const router = Router();
        // Routes
        router.get('/home', (req, res) => {
          res.send('home');
        });
        export default router;
      ```

    - In login.routes.js file  
  
      ```javascript
        import { Router } from 'express';
        import {
          renderLoginForm,
          processLoginForm,
        } from '../controllers/login.controllers.js';
        const router = Router();
        // Routes
        router.get('/login', renderLoginForm);
        router.post('/login', processLoginForm);
        export default router;
      ```

  - Add index.js file "src/index.js"
    
    ```javascript
      import express from 'express';
      import { dirname, join } from 'node:path';
      import { fileURLToPath } from 'node:url';

      import handlebars from 'express-handlebars';

      import indexRoutes from './routes/index.routes.js';
      import loginRoutes from './routes/login.routes.js';

      // Initializations
      const app = express();
      const PORT = process.env.PORT || 3333;
      const __dirname = dirname(fileURLToPath(import.meta.url));

      // settings
      app.set('port', PORT);
      app.set('views', join(__dirname, 'views'));

      // config view engine
      const hbs = handlebars.create({
        defaultLayout: 'main',
        layoutsDir: join(app.get('views'), 'layouts'),
        partialsDir: join(app.get('views'), 'partials'),
        extname: '.hbs',
      });
      app.engine('.hbs', hbs.engine);
      app.set('view engine', '.hbs');

      // Middlewares
      app.use(express.urlencoded({ extended: true })); // mirar T_express.md

      // Routes
      app.use(indexRoutes);
      app.use(loginRoutes);

      // Server
      app.listen(app.get('port'), () => console.log(`Listen on port ${PORT}`));
    ```

  - Add Session 
    
    - In src/index.js
  
      ```javascript
        import session from 'express-session';
        ....
        app.use(
          session({
            secret: 'test',
            resave: false,
            saveUninitialized: false,
          }),
        );
      ```
    
    - In src/controllers/login.controllers.js
  
      ```javascript
        export const processLoginForm = (req, res) => {
          ....
          req.session.test = 'hi';
          req.session.userId = user.id;
          console.log(req.session);
          res.send('ok');
        };
      ```
    - Understanding 
      - Application/Storage/Cookie 
        - It is created a cookie linked to port.
      - Network/login/Headers
        - Response Headers
          - Exist a **Set-Cookie** entry with a **session-id**
        - Request Headers
          - If you go to "home", it is going to exist a cookie referense that is send in each request from browser to server.
    
    - Add a middleware 

      - Create a folder/files structure 
  
        ```bash
          # cd apps/target-server
          mkdir middelware && touch login.middleware.js 
        ```

      - In login.middleware.js file 
  
        ```javascript
          export const login = (req, res, next) => {
            if (!req.session.userId) {
              res.redirect('/login');
            } else {
              next();
            }
          };
        ```

      - In src/routes/index.routes.js file 
  
        ```javascript
          import { login } from '../middleware/login.middleware.js';
          router.get('/home', login, (req, res) => {
            res.send(
              `home page, must be logged in to access! (userId: ${req.session.userId})`,
            );
          });

          export default router;
        ```

      - In src/routes/login.controller.js file 
  
        ```javascript
          export const processLoginForm = (req, res) => {
            ....
            res.redirect('/home');
          };
          
        ```
    
    - Add a email edit 

      - Create a folder/files structure 
  
        ```bash
          # cd apps/target-server/views
          touch edit.hbs 
        ```

      - In edit.hbs file 
  
        ```html
          <form action='/login/edit' method='post'>
            <input
              type='email'
              name='email'
              placeholder='New Email'
              value='testNew@test.com'
            />
            <input type='submit' />
          </form>
        ```

      - In src/routes/login.controller.js file 
  
        ```javascript
          ....
          export const loginEditForm = (req, res) => {
            res.render('edit');
          };

          export const processLoginEditForm = (req, res) => {
            const user = users.find((user) => user.id === req.session.userId);
            user.email = req.body.email;
            console.log(`User ${user.id} email changed to ${user.email}`);
            res.send('Email changed');
          };
        ```

      - In src/routes/login.routes.js file 
  
        ```javascript
          import {
            renderLoginForm,
            processLoginForm,
            loginEditForm,
            processLoginEditForm,
          } from '../controllers/login.controllers.js';
          ....
          router.get('/login/edit', loginEditForm);
          router.post('/login/edit', processLoginEditForm);
        ```
- Attack-server
  
  - Initial steps

    - Create a folder named "target-server"

      ```bash
        cd apps && mkdir attack-server && cd attack-server
      ```

    - Add package.json file

      ```bash
        cd apps/attack-server && pnpm init
      ```

    - Add .gitignore file

      ```bash
        # cd apps/attack-server
        touch .gitignore
        node --eval "fs.writeFileSync('.gitignore', 'node_modules\n')"
      ```

    - Add dev dependencies

      ```bash
        # cd apps/targeattackt-server 
        pnpm i serve
      ```
    - Add package.json scrpts

      ```bash
        # cd apps/target-server 
        npm pkg set scripts.dev="serve -l 5555 ./src/index.html"
        npm pkg set scripts.dev:a="serve -l 5555 ./src/index_01.html"
        npm pkg set scripts.dev:b="serve -l 5555 ./src/index_02.html"
      ```

  
  - First attack form

    - Create an apps/attack-server/src/index.html file

      ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Attacker WebSite</title>
        </head>
        <body>
          <div>
            <h1>Some nice website</h1>
            <form name="form" action='http://localhost:3333/login/edit' method='post'>
              <input type='hidden' name='email' value='HACKED@test.com' />
            </form>
          </div>
          <script>
            document.form.submit()
          </script>
        </body>
        </html>
      ```

    - How this attack occurs
      - targer-server
        - Run targer-server: [targer-server](http://localhost:3333/home)
        - Login into targer-server
      - attack-server
        - Run targer-server: [attack-server](http://localhost:5555)
        - This is going to automaticaly call form post and change your password.

    - Test 

      - Views 
      
        - home view  apps/target-server/src/views/home.hbs file

          ```html
            <h1>
              home page, must be logged in to access! (userId:
              {{userId}})
            </h1>
            <form action='/login/logout' method='get'>
              <input type='submit' value='Log out' />
            </form>
          ```
      
        - welcome view  apps/target-server/src/views/welcome.hbs file

          ```html
            <h1>
              Bienvenido
            </h1>

            <div>
              {{#if logout}}
                <form action='/login/logout' method='get'>
                  <input type='submit' value='Log out' />
                </form>
              {{/if}}

              {{#if login}}
                <form action='/login' method='get'>
                  <input type='submit' value='Log in' />
                </form>
              {{/if}}
            </div>
          ```
      - Controller
      
        - login view  apps/target-server/src/controllers/login.controllers.js file

          ```javascript
            // add this function
            export const processLogOut = (req, res) => {
              req.session.destroy();
              //res.send('Logged out');
              res.redirect('/');
            };
          ```
      
      - Routes
      
        - index view  apps/target-server/src/routes/index.routes.js file

          ```javascript
            // add this route
            router.get('/', (req, res) => {
              const logout = req.session.userId ? true : false;
              res.render('welcome', { login: !logout, logout });
            });
            // update this route
            router.get('/home', login, (req, res) => {
              res.render('home', { userId: req.session.userId });
            });
            ....
          ```
        - login view  apps/target-server/src/routes/login.routes.js file

          ```javascript
            import {
              ....
              processLogOut,
            } from '../controllers/login.controllers.js';
            ....
            router.get('/login/logout', processLogOut);
            ....
          ```
      
      - How this attack occurs
        - targer-server
          - Run targer-server: [targer-server](http://localhost:3333/home)
          - Login into targer-server
        - attack-server
          - Run targer-server: [attack-server](http://localhost:5555)
          - This is going to automaticaly call form post and change your password.
        - targer-server
          - Login into targer-server
          - Invalid credentials message.

  
  - Second attack form

    - Create an apps/attack-server/src/index_01.html file

      ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Attacker WebSite</title>
        </head>
        <body>
          <div>
            <h1>Some nice website</h1>
          </div>
          <script>
            fetch("http://localhost:3333/login/edit", {
              method: "POST",
              body: {
                email: "HACKED_sinqueteenteres@test.com"
              }
            })
              .then(res => res.text())
              .then(text => console.log(text))
              .catch(err => console.log(err))
          </script>
        </body>
        </html>
      ```

    - Test 01
      - Try 01: How this attack occurs
        - targer-server
          - Run targer-server: [targer-server](http://localhost:3333/home)
          - Login into targer-server
        - attack-server
          - Run targer-server: [attack-server](http://localhost:5555)
          - An error message is displayed in browser: 
            - Access to fetch at **'http://localhost:3333/login/edit'** from origin **'http://localhost:5555'** has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
              - This disable target server to send message about email changed.
              - We had not sent credential

      - Try 02: 

        - Update apps/attack-server/src/index_01.html file

          ```html
            ....
              <script>
                fetch("http://localhost:3333/login/edit", {
                  method: "POST",
                  credentials: "include",
                  body: {
                    email: "HACKED_sinqueteenteres@test.com"
                  }
                })
                  ....
              </script>
          ```

        - Try 02: How this attack occurs
          - targer-server
            - Run targer-server: [targer-server](http://localhost:3333/home)
            - Login into targer-server
          - attack-server
            - Run targer-server: [attack-server](http://localhost:5555)
            - Credentials are send to target-server
            - In attak-server browser's console cors error still happend. 
            - email is updated like **undefined**
              - This is because target-server does not expect a json it expect a form.

      - Try 03: 

        - Update apps/attack-server/src/index_01.html file

          ```html
            ....
              <script>
                fetch("http://localhost:3333/login/edit", {
                  method: "POST",
                  credentials: "include",
                  mode: "no-cors",
                  headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                  },
                  body: "email=HACKED_sinqueteenteres@test.com",
                })
                  ....
              </script>
          ```

        - Try 03: How this attack occurs
          - targer-server
            - Run targer-server: [targer-server](http://localhost:3333/home)
            - Login into targer-server
          - attack-server
            - Run targer-server: [attack-server](http://localhost:5555)
            - Credentials are send to target-server
            - cors error are not showed. 
            - email is updated 

- CSRF Tokens

  - Target-server 
    
    - Initial steps **apps/targer-server/**

      - Add prettier dev dependency

        ```bash
          # apps/targer-server/
          pnpm i uuid
        ```

    - Add tokens  

      - Add **apps/targer-server/src/forTokens.js** file

        ```javascript
          // CSRF
          import { v4 as uuidv4 } from 'uuid';
          
          export const tokens = new Map();
          
          export const csrfToken = (sessionId) => {
            const token = uuidv4();
            tokens.get(sessionId).add(token);
            //const now = new Date().getTime(); //1.01.35
            setTimeout(() => {
              tokens.get(sessionId).delete(token);
              console.log('csrfToken-Token-Eliminado', tokens);
            }, 30000);
            console.log('csrfToken-Token-Agregado', tokens);
            return token;
          };
          
          export const crsf = (req, res, next) => {
            const token = req.body.csrf;
            console.log('crsf-token', token);
            console.log('crsf-tokens', tokens);
            if (!token || !tokens.get(req.sessionID).has(token)) {
              res.status(422).send('CSRF Token missing or expired');
            } else {
              next();
            }
          };
        ```

      - Update **apps/targer-server/src/routes/login.routes.js** file

        ```javascript
          import { login } from '../middleware/login.middleware.js';
          import { crsf } from '../forTokens.js';
          ....
          router.post('/login/edit', login, crsf, processLoginEditForm);
        ```

      - Update **apps/targer-server/src/controllers/login.controllers.js** file

        ```javascript
          import { csrfToken, tokens } from '../forTokens.js';
          ....
          export const processLoginForm = (req, res) => {
            ....
            req.session.userId = user.id;
            // CSRF tokens
            tokens.set(req.sessionID, new Set());
            // console.log('login-post-processLoginForm', tokens);
            ....
          };
          ....
          export const loginEditForm = (req, res) => {
            const newToken = csrfToken(req.sessionID);
            res.render('edit', { token: newToken });
          };
        ```

      - Update **apps/targer-server/src/views/edit.hbs** file

        ```html
          <form action='/login/edit' method='post'>
            ....
            <input type='hidden' name='csrf' value='{{token}}' />
            ....
          </form>
        ```
  - Attack-server 

    - First attack form

      - Create an apps/attack-server/src/index_02.html file

        ```html
          <!doctype html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Attacker WebSite</title>
            </head>
            <body>
              <div>
                <h1>Some nice website 2</h1>
                <form name="form" action="http://localhost:3333/login/edit" method="post">
                  <input type="hidden" name="email" value="HACKED@test.com" />
                </form>
              </div>
              <script>
                document.form.submit();
              </script>
            </body>
          </html>
        ```
      - How this attack occurs
          - targer-server
            - Run targer-server: [targer-server](http://localhost:3333/home)
            - Login into targer-server
          - attack-server
            - Run targer-server: [attack-server](http://localhost:5555)
            - This is going to automaticaly call form post 
            - It is going to generate a error: CSRF Token missing or expired because we are not sending any token.

    - Second attack form (1.03.37)

      - Create an apps/attack-server/src/index_03.html file

        ```html
          <!doctype html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Attacker WebSite</title>
            </head>
            <body>
              <div>
                <h1>Some nice website 2</h1>
                <form name="form" action="http://localhost:3333/login/edit" method="post">
                  <input type="hidden" name="email" value="HACKED@test.com" />
                </form>
              </div>
              <script>
                // document.form.submit();
                fetch('http://localhost:3333/login/edit', { credentials: "include" })
                  .then((res) => res.text())
                  .then((html) => console.log(html))
                  .catch((err) => console.log(err));
              </script>
            </body>
          </html>
        ```
      - How this attack occurs
        - targer-server
          - Run targer-server: [targer-server](http://localhost:3333/home)
          - Login into targer-server
        - attack-server
          - Run targer-server: [attack-server](http://localhost:5555)
            - target-server is going to print in console a new token.
            - attack-server is going to console a error.
                - Access to fetch at **'http://localhost:3333/login/edit'** from origin **'http://localhost:5555'** has been blocked by **CORS policy**
                - (1.05.56) Se descarga un código del atacante, pero este código tiene peticiones que hace a otro servidor, la petición es procesada (no hay ningún problema) el navegador no te permite ver la respuesta por temas de seguridad, es decir para que se pueda ver la respuesta, el servidor **target** debe enviar en sus cabeceras un **Access-Control-Allow-Origin** permitiéndote explícitamente ver esa respuesta.


    - Third attack form (1.06.38)

      - Add cors to target-server
      
        ```bash
          # ./apps/target-server/
          pnpm i cors
        ```
      
      - Use cors in target-server

        ```javascript
          ....
          import cors from 'cors';
          ....
          // Middlewares
          app.use(cors());
          ....
        ```

      - Create a file "apps/attack-server/src/index_04.html" igual to "apps/attack-server/src/index_03.html" file
      
      - How this attack occurs (1.08.41)
        - targer-server
          - Run targer-server: [targer-server](http://localhost:3333/home)
          - Login into targer-server
        - attack-server
          - Run targer-server: [attack-server](http://localhost:5555)
            - target-server is going to print in console a new token.
            - attack-server is going to console a error.
                - Access to fetch at **'http://localhost:3333/login/edit'** from origin **'http://localhost:5555'** has been blocked by **CORS policy** : The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
                - In Network/Headers/Response Headers we are going to have a header "Access-Control-Allow-Origin: *" the browser is going to allow you to see answers only if you don´t send <code>{ credentials: "include" }</code>(1.09.04) 

      - Update  "apps/target-server/src/index.js" 
  
        ```javascript
          ....
          // Middlewares
          app.use(
            cors({
              origin: 'http://localhost:5555',
              credentials: true,
            }),
          );
          ....
        ```

      - How this attack occurs (1.11.00)
        - targer-server
          - Run targer-server: [targer-server](http://localhost:3333/home)
          - Login into targer-server
        - attack-server
          - Run targer-server: [attack-server](http://localhost:5555)
            - target-server is going to print in console a new token.
            - attack-server is going to show an html response on console.
                
              ```html
                <html lang='en'>
                  <head>
                    <meta charset='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <title>CSRF</title>
                  </head>
                  <body>
                    <form action='/login/edit' method='post'>
                  <input
                    type='email'
                    name='email'
                    placeholder='New Email'
                    value='testNew@test.com'
                  />
                  <input type='hidden' name='csrf' value='af5f85af-ef17-4a82-8658-c7cc4bb046b7' />
                  <input type='submit' />
                </form>
                  </body>
                </html>
              ```

                - Now we have **access a token inside hidden input** 

- **connect-flash-plus** 

  - Target-server 

    - Add **connect-flash-plus** dev dependency

      ```bash
        # apps/targer-server/
        pnpm i connect-flash-plus
      ```
    - Update main view 

      ```html
        ....
          <body>
            <div style='color: red'>
              {{message}}
            </div>
            {{{body}}}
          </body>
        </html>
      ```
    - Import and use **connect-flash-plus** 

      ```javascript
        ....
        import flash from 'connect-flash-plus'; // En la sessión metio un mensaje o lo que sea, esto sirve solo para una petición, la próxima ya no existe.
        app.use(
          session({
            secret: 'test',
            resave: false,
            saveUninitialized: false,
          }),
        );

        app.use(flash()); //<--luego de session
      ```
    - Update  **login.controllers.js** 

      ```javascript
        ....
        export const renderLoginForm = (req, res) => {
          console.log('req.session-->: ', req.session); // +
          //res.render('login', { message: req.flash('mesage') }); // -
          res.render('login', { message: req.flash('message') });  // +
        };
        ....
        export const processLoginForm = (req, res) => {
          if (!req.body.email || !req.body.password) {
            //return res.status(400).send('All fields are requiered');
            req.flash('message', 'All fields are requiered'); // +
            return res.redirect('/login'); // +
          }
          const user = users.find((user) => user.email === req.body.email);
          if (!user || user.password !== req.body.password) {
            //return res.status(400).send('Invalid Credentials'); // -
            req.flash('message', 'Invalid Credentials'); // +
            return res.redirect('/login'); // +
          }
          ....
        }
        ....
      ```

- Note 
  - already exist packages that do the things that we lear here about **csrf tokens**
