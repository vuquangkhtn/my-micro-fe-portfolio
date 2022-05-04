# My Micro FE Portfolio

This is my example project that deals with Module Federation and MonoRepo structure.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install.

```bash
yarn add
```

## Usage

### Execution

Open the root folder

```
cd my-micro-fe-portfolio
```

At the root repo, execute below command to start all modules in this project

```
yarn add #if not installed
yarn start
```

Note: To run this project without issues, you need to start the BE project first. Open this [link](https://github.com/vuquangkhtn/my-porfolio-backend) for detail

### Add new workspace

Currently, I use `pnpx` to create a new workspace for the current project, which is included the `webpack` and configuration magic for new workspace

```
pnpx create-mf-app
```

At the root repo, add this new workspace name to the workspace list in `package.json`

```
...
"workspaces": [
    ...,
    "new-workspace-name"
]
```

At the root repo, add the `start` command for the new workspace to the `scripts` in `package.json`

```
...
"scripts": {
    "start": "concurrently ... \"yarn start:new\"",
    "start:new": "cd ./new-workspace-name && yarn start",
}
```

### Export a shared module

Open the `webpack.config.js` file of the project which has the module you want to share. Then, export that module in `exposes` keyword as the below example

```
exposes: {
    ...,
    "./Projects": "./src/Projects"
},
```

### Import a shared workspace

Open the `webpack.config.js` file of the workspace which we want to import the shared module  
Add the configuration for the shared workspace

```
remotes: {
    new: "new-workspace-name@http://localhost:3000/remoteEntry.js"
}
```

`new-workspace-name` is the name of the imported workspace  
`http://localhost:3000/` is the host which the imported workspace was running in  
`new` is the name of the imported workspace at the current project. You can import it as

```jsx
import Menu from "new/Projects";

...
const App = () => (
  <div className="container">
    <Projects />
  </div>
);
```

## Architectures

### Module Federation

Use `ModuleFederationPlugin` which is supported by `webpack`

This aims to solve the sharing of modules in a distributed system, by shipping those critical shared pieces as macro or as micro as you would like

### Mono Repo

Use the `workspaces` keyword which has been already supported by `yarn`/`npm`

Your dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available

All your project dependencies will be installed together, giving Yarn more latitude to better optimize them.

Yarn will use a single lockfile rather than a different one for each project, which means fewer conflicts and easier reviews.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
