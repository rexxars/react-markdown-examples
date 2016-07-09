import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import withExampleBasename from '../withExampleBasename';
import Markdown from 'react-markdown';
import codeRenderer from './code-renderer';
import imageRenderer from './image-renderer';
import linkRenderer from './link-renderer';
import sampleCode from './data/code';
import sampleImages from './data/images';
import sampleLinks from './data/links';

const App = ({children}) => (
    <div>
        <ul className="sidebar">
            <li><Link to="/code">Syntax highlighting</Link></li>
            <li><Link to="/image">Lazy image loading</Link></li>
            <li><Link to="/link">React Router links</Link></li>
            <li><hr /></li>
            <li><a href="../">Other examples</a></li>
        </ul>

        <div className="content">
            {children}
        </div>
    </div>
);

const Index = () => (
    <div>
        <p>
            react-markdown allows you to use React components to override
            rendering of different markdown node types. These types are:
        </p>

        <ul>
            <li><code>HtmlInline</code> - Inline HTML</li>
            <li><code>HtmlBlock</code> - Block of HTML</li>
            <li><code>Text</code> - Text nodes (inside of paragraphs, list items etc)</li>
            <li><code>Paragraph</code> - Paragraph nodes (<code>&lt;p&gt;</code>)</li>
            <li><code>Heading</code> - Headers (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code> etc)</li>
            <li><code>Softbreak</code> - Newlines</li>
            <li><code>Hardbreak</code> - Hard line breaks (<code>&lt;br&gt;</code>)</li>
            <li><code>Link</code> - Link nodes (<code>&lt;a&gt;</code>)</li>
            <li><code>Image</code> - Image nodes (<code>&lt;img&gt;</code>)</li>
            <li><code>Emph</code> - Emphasis nodes (<code>&lt;em&gt;</code>)</li>
            <li><code>Code</code> - Inline code nodes (<code>&lt;code&gt;</code>)</li>
            <li><code>CodeBlock</code> - Blocks of code (<code>&lt;code&gt;</code>)</li>
            <li><code>BlockQuote</code> - Block quotes (<code>&lt;blockquote&gt;</code>)</li>
            <li><code>List</code> - List nodes (<code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code>)</li>
            <li><code>Item</code> - List item nodes (<code>&lt;li&gt;</code>)</li>
            <li><code>Strong</code> - Strong/bold nodes (<code>&lt;strong&gt;</code>)</li>
            <li><code>ThematicBreak</code> - Horizontal rule nodes (<code>&lt;hr&gt;</code>)</li>
        </ul>

        <p>See examples by using the sidebar</p>
    </div>
);

const ImageExample = () => (
    <Markdown
        className="image-example"
        source={sampleImages}
        escapeHtml
        renderers={{Image: imageRenderer}}
    />
);

const CodeExample = () => (
    <Markdown
        source={sampleCode}
        escapeHtml
        renderers={{
            CodeBlock: codeRenderer,
            Code: codeRenderer
        }}
    />
);

const LinkExample = () => (
    <Markdown
        source={sampleLinks}
        renderers={{Link: linkRenderer}}
    />
);

render((
    <Router history={withExampleBasename(browserHistory, __dirname)}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/code" component={CodeExample} />
            <Route path="/image" component={ImageExample} />
            <Route path="/link" component={LinkExample} />
        </Route>
    </Router>
), document.getElementById('example'));
