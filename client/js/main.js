import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Post from './post/component';

class MainLayout extends Component {
    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--8-col"><Post/></div>
                <div className="mdl-cell mdl-cell--4-col"></div>
            </div>
        );
    }
}

render(<MainLayout/>, document.getElementById('content'));
