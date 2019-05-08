//const path = require(`path`)

/* Sample createPages from Contentful source
 * Write your query, then turn the results into pages
 * Make sure you have a page template ready to go
 *
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulReport {
        edges { 
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allContentfulReport.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/report.js`),
        context: {
          slug: node.slug,
        }
      })
    })
  })
}
*/

/* Here are some examples of getting around the "window is not defined" genre of errors.
 * The errors mean that some module you're using expects the window to be available (prod builds only).
 * The solution is to explicitly tell it to use a null loader.
 * https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-code-classlanguage-textwindowcode-is-defined
 * 
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-plotly.js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-html') {
      actions.setWebpackConfig({ 
          module: {
              rules: [
                {
                  test: /@typeform/,
                  loader: 'null-loader',
                },
              ],
            }
      })
  }
}
*/