export default `
## Custom code renderer

This example shows how you can make react-markdown syntax-highlight code blocks.
By default, react-markdown will simply wrap code blocks in <pre><code>.

\`\`\`js
const React = require('react')
const ReactDOM = require('react-dom')
const Markdown = require('react-markdown')
const CodeRenderer = require('./code-renderer')

ReactDOM.render(
  React.createElement(Markdown, {
    source: 'your markdown here',
    renderers: {
      CodeBlock: CodeRenderer
      Code: CodeRenderer
    }
  }),
  document.body
)
\`\`\`

By checking the \`inline\` property, we can reuse the same renderer for both inline and blocks of code!
For instance, we could highlight \`const React = require('react')\` inline.

See \`examples/custom-renderers\` for the code behind this.
`;
