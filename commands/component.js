// @cliDescription  Generates a stateless component, styles, and an optional test.

module.exports = async function (context) {
  // grab some features
  const { parameters, strings, print, ignite } = context
  const { pascalCase, isBlank } = strings
  const config = ignite.loadIgniteConfig()
  // const { tests } = config
  
  // validation
  if (isBlank(parameters.first)) {
    print.info(`${context.runtime.brand} generate component <name>\n`)
    print.info('A name is required.')
    return
  }
  
  const typeMessage = 'What kind of Component would you like to generate?'
  const typeChoices = ['Pure', 'Stateless'];
  
  // let type = parameters.options.type
  
  // ask question 2
  const answers = await context.prompt.ask({
    name: 'type',
    type: 'list',
    message: typeMessage,
    choices: typeChoices
  })
  let type = answers.type;
  let componentName = 'component';
  let componentTemplate = type.toLowerCase() === 'pure'
    ? componentName + '-pure'
    : componentName;
  
  // read some configuration
  const name = pascalCase(parameters.first)
  const props = { name }
  const jobs = [
    {
      template: `${componentTemplate}.ejs`,
      target: `App/Components/${name}/${name}.tsx`
    },
    {
      template: 'component-style.ejs',
      target: `App/Components/${name}/${name}Style.ts`
    },
    {
      template: 'component-index.ejs',
      target: `App/Components/${name}/index.ts`
    },
  ]
  
  await ignite.copyBatch(context, jobs, props)
}
