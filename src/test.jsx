import React from 'react';
import ReactDOM from 'react-dom';

const title = 'holy shit this will be so much faster!!!'


function test() {
    ReactDOM.render(
        <div>{title}</div>,
        document.getElementById('app')
    );
}

export default test;

module.hot.accept();