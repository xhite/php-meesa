/**
 * Created by xhitedev on 12/27/15.
 */

import {Store} from 'flummox';

export default class PostStore extends Store {
    constructor(flux) {
        super();

        const postActions = flux.getActions('post');
        this.register(postActions.handleMessage, this.handleMessage);
        this.register(postActions.onSubmit, this.handleSubmit);

        this.state = {};
    }
    handleMessage(content) {
        this.setState({
            message: content,
        });
    }
    handleSubmit(content) {
        this.setState({
            message: '',
        });
    }
}