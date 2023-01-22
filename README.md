# Taller19

principal
  menu
  vista
  formulario
  busqueda

ng g i models/users

ng g s services/userservice

dentro de src crear environments/
dentro crear:
 environment.ts
 environment.prod.ts

angular.json, en la primera linea debajo de 'production': {
  ```
  "fileReplacements": [
  {
  "replace": "src/environments/environment.ts",
  "with": "src/environments/environment.prod.ts"
  }
  ],
  ```

ng build




taller 20
ng g s services/userinterceptors