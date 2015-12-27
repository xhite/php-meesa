/**
 * Created by xhitedev on 12/26/15.
 */

import React, { Component } from 'react';

import Message from '../message/component'

export default class MessageList extends Component {
    render() {
        return (
            <div className="mdl-grid">
                <Message>
                    hey
                </Message>
            </div>
        );
    }
}