# Dashboard de finanças

Aplicativo mobile de finanças pessoais desenvolvido com React Native (Expo) para gerenciamento de contas, transações, e acompanhamento visual de entradas e saídas. Inclui modo escuro/claro, controle de visibilidade de valores, alternância de moeda (Real / Dólar), cadastro de transaçãoes (para utilizar o gerenciador de formulários Formik) e integração com Firebase Firestore para persistência dos dados.

## Funcionalidades

### Home (Dashboard)

- Exibe saldo total com opção de esconder/mostrar valores
- Lista de contas
- Gráfico de entradas e saídas mensais
- Transações recentes
- Atualização via pull-to-refresh

### Profile

- Mostra foto e nome do usuário
- Controle de visibilidade dos valores
- Alternância entre modo claro e escuro
- Alternância de moeda (BRL ↔ USD)

### Cadastro de Transações

- Formulário validado com Formik + Yup
- Seleção de categoria e conta em modais personalizados

## Tecnologias

Esse app foi iniciado com o template do react-navigation (npx create-expo-app@latest --template react-navigation/template)

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Styled components](https://styled-components.com)
- [Formik](https://formik.org)
- [Yup](https://github.com/jquense/yup)
- [Firebase](https://firebase.google.com/)
- [React Navigation V7](https://reactnavigation.org)
- [Gifted Charts](https://gifted-charts.web.app/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## Execução

- Instale as dependências:

  ```sh
  npm install
  ```

- Execute a aplicação:

  ```sh
  npx expo start
  ```

- No terminal, pressione `i` para abrir no emulador do iOS ou `a` para abrir no emulador de Android. Também é possível acessar no seu dispositivo físico, baixando o Expo Go e lendo o QRCode exibido no terminal.
