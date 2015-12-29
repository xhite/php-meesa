/**
 * Created by xhitedev on 12/27/15.
 */

import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.actions = this.props.flux.getActions('login');
    }
    render() {
        return (
            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text mdl-button--primary">Log In</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <form onSubmit={this.actions.onSubmit}>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="user" value={this.props.username} onChange={this.actions.handleUsername}/>
                            <label className="mdl-textfield__label" htmlFor="user">Username</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="password" id="pass" value={this.props.password} onChange={this.actions.handlePassword}/>
                            <label className="mdl-textfield__label" htmlFor="pass">Password</label>
                        </div>
                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                            Connect
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}