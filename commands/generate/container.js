const patterns = require("../../lib/patterns")

module.exports = {
  description: "Generates a Container + supporting files.",
  run: async function(toolbox) {
    // grab some features
    const { parameters, print, strings, ignite, filesystem, patching } = toolbox
    const { pascalCase, isBlank, camelCase } = strings
    const config = ignite.loadIgniteConfig()

    // validation
    if (isBlank(parameters.first)) {
      print.info("A name is required.")
      print.info(`ignite generate screen <name>\n`)
      return
    }

    const screenName = parameters.first

    // prettier-ignore

    // get permutations of the given model name
    const pascalName = pascalCase(screenName)
    const camelName = camelCase(screenName)

    const props = { name: screenName, pascalName, camelName }
    const jobs = [
      {
        template: `container.tsx.ejs`,
        target: `src/containers/${screenName}/${screenName}.tsx`,
      },
      {
        template: `container-style.tsx.ejs`,
        target: `src/containers/${screenName}/${screenName}Style.tsx`,
      },
      {
        template: "container-index.ts.ejs",
        target: `src/containers/${screenName}/index.ts`,
      }
    ]

    // make the templates
    await ignite.copyBatch(toolbox, jobs, props)

  }
}
