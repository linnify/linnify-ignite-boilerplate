module.exports = {
  description: 'Generates a component + supporting files.',
  run: async function(toolbox) {
    // grab some features
    const { parameters, strings, print, ignite, patching } = toolbox
    const { pascalCase, isBlank } = strings

    // validation
    if (isBlank(parameters.first)) {
      print.info('A name is required.')
      print.info(`ignite generate component <name>\n`)
      return
    }

    const typeMessage = 'What kind of Component would you like to generate?\'pure\', \'stateless\''
    const typeChoices = ['pure', 'stateless'];

    // let type = parameters.options.type

    // ask question 2
    const answers = await toolbox.prompt.ask({
      name: 'type',
      type: 'list',
      message: typeMessage,
      choices: typeChoices
    })
    let type = answers.type;
    let componentName = 'component';
    let componentTemplate = type == 'pure'
      ? componentName + '-pure'
      : componentName;

    const name = parameters.first
    const pascalName = pascalCase(name)

    const props = { name, pascalName }
    const jobs = [
      {
        template: `${componentTemplate}.tsx.ejs`,
        target: `src/components/${name}/${name}.tsx`
      },
      {
        template: 'component-style.tsx.ejs',
        target: `src/components/${name}/${name}Style.tsx`
      },
      {
        template: 'component-index.ts.ejs',
        target: `src/components/${name}/index.ts`
      }
    ]

    await ignite.copyBatch(toolbox, jobs, props)


  }
}
