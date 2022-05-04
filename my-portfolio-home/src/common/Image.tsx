import React from 'react';

const Image = (props) => {
    return <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} {...props} />
}

export default Image;