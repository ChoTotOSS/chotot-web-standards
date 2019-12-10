# VSCode Baseline Settings

## Install these extensions to meet Chotot's Editor Baseline standards

- `EditorConfig`
- `es7-react-js-snippets`
- `gitlens`
- `prettier-vscode`
- `stylelint`
- `vscode-eslint`


## Recommended (optional) extensions:

- `bracket-pair-colorizer-2`
- `code-settings-sync`
- `debugger-for-chrome`
- `docthis`
- `markdown-all-in-one`
- `npm-intellisense`
- `path-intellisense`
- `vscode-nginx`
- `vscode-quick-select`
- `vscode-todo-highlight`

## Baseline VSCode settings:

Copy these config into VSCode Settings JSON (please manually override if already exist):

```json
{
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "editor.formatOnSave": true,
  "prettier.disableLanguages": ["markdown", "html", "css", "handlebars", "json", "jsonc" ],
  "prettier.arrowParens": "avoid",
  "prettier.printWidth": 100,
  "prettier.proseWrap": "preserve",
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "es5",
  "prettier.useTabs": false,
}
```
