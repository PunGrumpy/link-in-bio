import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('react-component', {
    description: 'Adds a new react component with TailwindCSS + shadcn/ui',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
        validate: input => {
          if (!input.match(/^[A-Za-z]+$/)) {
            return 'Component name should only contain letters'
          }
          return true
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{kebabCase name}}.tsx',
        templateFile: 'templates/component.hbs'
      },
      {
        type: 'append',
        path: 'package.json',
        pattern: /"exports": {(?<insertion>)/g,
        template: '    "./{{kebabCase name}}": "./src/{{kebabCase name}}.tsx",'
      }
    ]
  })
}
