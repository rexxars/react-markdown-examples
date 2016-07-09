import React from 'react';
import LazyLoad from 'react-lazy-load';
import LegitImage from 'legit-image';

const getProps = ({src, alt, title}) => ({
    src: `https://rexxars.github.io/react-layout-pack/img/${src}`,
    alt: alt.replace(/\(\d+\)$/, ''),
    title: title,
    height: alt.replace(/.*\((\d+)\)$/, '$1') | 0
});

const ImageLoader = React.createClass({
    displayName: 'ImageLoader',
    propTypes: {
        src: React.PropTypes.string,
        title: React.PropTypes.string,
        alt: React.PropTypes.string
    },

    render: function() {
        const {src, alt, title, height} = getProps(this.props);
        return (
            <div className="image-wrapper">
                <div className="description">{title}</div>

                <LazyLoad height={height || null}>
                    <LegitImage src={src} alt={alt} />
                </LazyLoad>
            </div>
        );
    }
});

export default ImageLoader;
