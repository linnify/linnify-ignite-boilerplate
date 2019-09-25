/**
 * This should never run, because Ignite's own `generate`
 * command should always take precedence. If it does run,
 * then we throw an error.
 *
 * We mainly want this command to allow for the "ignite g" alias.
 */
module.exports = {
  alias: ['g'],
  run: async function(context) {
      const {
        print,
      } = context
      const { colors } = print
      const { yellow, bold, cyan } = colors
      const successMessage = `

    ${bold("So you want to generate something? JUST DO IT ✓")}


    ${cyan("You can do the following:")}
    ${yellow("    1.Component")}
                  ignite generate component _________  
                  (Will be asked to select pure/stateless)
    ${yellow("    2.Container")}
                  ignite generate container _________ 
    ${yellow("    3.List")}
                  ignite generate list _________       
                  (will automatically add List and ListItem at the end of the name)
    ${yellow("    4.Redux-Store")}
                  ignite generate store-basic _________  (small case, plural)
    ${yellow("    5.Service")}
                  ignite generate service-crud _________ (small case, plural)
    ${yellow("    6.Actions")}
                  ignite generate actions-load _________ (small case, plural)
    ${yellow("    7.Service")}
                  ignite generate actions-add _________ (small case, singular)
    ${yellow("    8.Service")}
                  ignite generate actions-delete _________(small case, singular)
  `

      print.info(successMessage)    }

}
