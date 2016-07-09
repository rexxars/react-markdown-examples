import React from 'react';
import {Link} from 'react-router';

const LinkRenderer = React.createClass({
    displayName: 'LinkRenderer',
    propTypes: {
        children: React.PropTypes.node,
        href: React.PropTypes.string
    },

    render: function() {
        if (this.props.href.match(/^(https?:)?\/\//)) {
            return (
                <a href={this.props.href} target="_blank">
                    {this.props.children} <sup>☁</sup>
                </a>
            );
        }

        return <Link to={this.props.href}>{this.props.children}</Link>;
    }
});

export default LinkRenderer;

