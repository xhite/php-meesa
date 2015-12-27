/**
 * Created by xhitedev on 12/26/15.
 */

import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-card__supporting-text">
                    <form action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="post"/>
                            <label className="mdl-textfield__label" htmlFor="post">Text...</label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}