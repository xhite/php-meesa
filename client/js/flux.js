/**
 * Created by xhitedev on 12/27/15.
 */

import {Flummox} from 'flummox';

import ListActions from './message-list/actions';
import ListStore from './message-list/store';

import PostActions from './post/actions';
import PostStore from './post/store';

export default class Flux extends Flummox {
    constructor() {
        super();

        this.createActions('post', PostActions);
        this.createStore('post', PostStore, this);

        this.createActions('messages', ListActions);
        this.createStore('messages', ListStore, this);
    }
}