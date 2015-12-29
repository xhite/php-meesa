/**
 * Created by xhitedev on 12/26/15.
 */

import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        const actions = this.props.flux.getActions('post');
        return (
                <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-card__supporting-text">
                    <form onSubmit={actions.onSubmit}>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="post" value={this.props.message} onChange={actions.handleMessage}/>
                            <label className="mdl-textfield__label" htmlFor="post">Text...</label>
                        </div>
                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                            Post
                        </button>
                    </form>
                </div>
        );
    }
}