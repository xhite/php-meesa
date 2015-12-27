/**
 * Created by xhitedev on 12/27/15.
 */

import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        return (
            <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-card__supporting-text">
                {this.props.children}
            </div>
        );
    }
}