# Toy Train React 🚂 🚂 🚂
## Faster toy React projects (with linting and formatting enabled)

### Dependencies:
- [React](https://reactjs.org/)
- [Parcel](https://github.com/parcel-bundler/parcel)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/) (with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [prettier plugin/config support](https://github.com/prettier/eslint-plugin-prettier)
  
### Scripts:
  - `npm lint` - Run prettier and eslint
  - `npm run lint-check` - Check for conflicts in eslint rules and prettier formatting
  - `npm start -- -p 3000` - Starts app, optional flag to run on custom port e.g. port 3000.  Otherwise, defaults to port 1234.
  
### Suggested VSCode Settings:
Use the [prettier-vscode](https://github.com/prettier/prettier-vscode) extension and add the follow to your workspace settings:
```
{ 
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true
}
```
Read more about how these settings play together [here](https://medium.com/@sgroff04/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213).