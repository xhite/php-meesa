/**
 * Created by xhitedev on 12/27/15.
 */

import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        const style = {'minHeight':'50px'};
        return (
            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp" style={style}>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text mdl-button--primary">{this.props.children}</h2>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons" onClick={this.props.onDelete}>close</i>
                    </button>
                </div>
            </div>
        );
    }
}