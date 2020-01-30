import * as React from 'react';
import { compose, defaultProps } from 'recompose';
import Loading from './../../assets/loading.gif';

interface Props {
    src: string;
    alt: string;
    title: string;
    style?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
}

const ImageBox = compose<Props, Props>(
    defaultProps<Props>({
        src: Loading,
        alt: "No Property",
        title: "No Property",
    }),
)(
    function ImageBox(props: Props) {
        const {
            src,
            alt,
            title,
            style,
            imgStyle,
        } = props;
        return (
            <div
                style={{
                    display: "inline-block",
                    height: 50,
                    width: 50,
                    objectFit: "contain",
                    padding: 4,
                    ...style,
                }}
            >
                <img src={src} alt={alt} title={title} style={imgStyle} />
            </div>
        );
    }
)


export default ImageBox;