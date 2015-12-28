/**
 * Created by xhitedev on 12/26/15.
 */

import React, { Component } from 'react';
import FluxComponent from 'flummox/component';

import Message from '../message/component';

export default class MessageList extends Component {
    render() {
        const actions = this.props.flux.getActions('messages');
        return (
            <FluxComponent connectToStores={['messages']}>
                <div className="mdl-grid">
                    {
                        this.props.messages.map(function(m) { return (<Message key={m.id} onDelete={(e)=>actions.deleteMessage(m.id)}>{m.content}</Message>);})
                    }
                </div>
            </FluxComponent>

        );
    }
}