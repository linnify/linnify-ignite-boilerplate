// @cliDescription  Generates a screen with a ListView/Flatlist/SectionList + walkthrough.


module.exports = {
  description: "Generates a FlatList and Item. (only the name, 'List' will be added automatically)",
  run: async function(toolbox) {
    const { print, parameters, strings, ignite, filesystem } = toolbox
    const { pascalCase, isBlank } = strings
    const config = ignite.loadIgniteConfig()

    // validation
    if (isBlank(parameters.first)) {
      print.info(`${toolbox.runtime.brand} generate list <name>\n`)
      print.info('A name is required.')
      return
    }

    const name = pascalCase(parameters.first)
    const props = { name }


    const jobs = [
      {
        template: `flatlist.tsx.ejs`,
        target: `src/components/${name}List/${name}List.tsx`
      },
      {
        template: `flatlist-style.tsx.ejs`,
        target: `src/components/${name}List/${name}ListStyle.ts`
      },
      {
        template: 'flatlist-index.ts.ejs',
        target: `src/components/${name}List/index.ts`
      },
      {
        template: `list-item.tsx.ejs`,
        target: `src/components/${name}ListItem/${name}ListItem.tsx`
      },
      {
        template: `list-item-style.tsx.ejs`,
        target: `src/components/${name}ListItem/${name}ListItemStyle.ts`
      },
      {
        template: 'list-item-index.ts.ejs',
        target: `src/components/${name}ListItem/index.ts`
      },
    ]

    await ignite.copyBatch(toolbox, jobs, props)
  }
}
