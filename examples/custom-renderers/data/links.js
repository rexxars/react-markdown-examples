export default `
## React router link renderer

This example renders [links](https://en.wikipedia.org/wiki/Hyperlink) without
a protocol as [react router](https://github.com/reactjs/react-router) links,
while "external" links are handled with regular links. External links also get
a nice little cloud icon thrown in to symbolize they are... well, external.
The \`target\` attribute is also set to \`_blank\` on the external ones.

In much the same way as the [syntax highlighting](/code) example,
there really is very little you can't do with this flexibility.

Hard to come up with some dummy text here, so let me just throw in another
[relative link](/image) to be handled by react-router.

In it's bare essentials, to simply render a link using React Router:

\`\`\`js
const React = require('react')
const ReactDOM = require('react-dom')
const Markdown = require('react-markdown')
const Link = require('react-router').Link

function RouterLink(props) {
  return (
    props.href.match(/^(https?:)?\\/\\//)
      ? <a href={props.href}>{props.children}</a>
      : <Link to={props.href}>{props.children}</Link>
  );
}

ReactDOM.render(
  <Markdown
    source="Some text with a [link](/path) to try out"
    renderers={{Link: RouterLink}}
  />,
  document.body
)
\`\`\`
`;
