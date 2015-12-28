import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import FluxComponent from 'flummox/component';

import Flux from './flux';

import Post from  './post/component';
import MessageList from  './message-list/component';

class MainLayout extends Component {
    render() {
        const flux = new Flux();
        return (
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--5-col">
                        <FluxComponent flux={flux} connectToStores={['post']}>
                            <Post/>
                        </FluxComponent>
                        <FluxComponent flux={flux} connectToStores={['messages']}>
                            <MessageList/>
                        </FluxComponent>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col">

                    </div>
                </div>

        );
    }
}

render(<MainLayout/>, document.getElementById('content'));
