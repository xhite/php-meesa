/**
 * Created by xhitedev on 12/26/15.
 */

import React, { Component } from 'react';
import FluxComponent from 'flummox/component';

import Message from '../message/component';

export default class MessageList extends Component {
    constructor(props){
        super(props);
        this.actions = this.props.flux.getActions('messages');
    }
    componentDidMount() {
        this.actions.fetchMessages();
    }
    render() {
        return (
            <FluxComponent connectToStores={['messages']}>
                <div>
                    {
                        this.props.messages.map((m) => { return (<Message key={m.id} onDelete={(e)=>{this.actions.deleteMessage(m.id)}}>{m.content}</Message>);})
                    }
                </div>
            </FluxComponent>

        );
    }
}