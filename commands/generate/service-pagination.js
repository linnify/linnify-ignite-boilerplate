
const patterns = require("../../lib/patterns")

module.exports = {
  description: "Generates a Service with CRUD operations. (small case, plural)",
  run: async function(toolbox) {
    // grab some features
    const { parameters, print, strings, ignite, patching } = toolbox
    const { pascalCase, isBlank, camelCase } = strings
    const config = ignite.loadIgniteConfig()

    // validation
    if (isBlank(parameters.first)) {
      print.info("A name is required.")
      print.info(`ignite generate screen <name>\n`)
      return
    }

    const storeName = parameters.first


    // get permutations of the given model name
    const pascalName = pascalCase(storeName)
    const camelName = camelCase(storeName)
    const singularPascalName = pascalName.slice(0,-1);
    const singularCamelName = camelName.slice(0,-1);


    const props = { name: storeName, pascalName, camelName, singularPascalName, singularCamelName }
    const jobs = [
      {
        template: `service-pagination.ts.ejs`,
        target: `src/services/${storeName}.service.ts`
      },
      {
        template:`type.ts.ejs`,
        target: `src/types/classes/${singularCamelName}.class.ts`
      },

    ]
    // make the templates
    await ignite.copyBatch(toolbox, jobs, props)

    //IN ACTIONS

    await patching.prepend(

      `${process.cwd()}/src/types/classes/index.ts`,
      `export * from './${singularCamelName}.class'\n`
    )

  }
}
