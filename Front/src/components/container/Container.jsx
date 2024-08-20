// Accept Properties as a children it is simply a box with has 
// height and width and some styling properties - in reaact and next js


import React from 'react';

const Container = ({ children }) => {
    return <div className="container">{children}</div>;
};

export default Container