/**
 * Created by xhitedev on 12/27/15.
 */

import {Store} from 'flummox';

export default class MessageStore extends Store {
    constructor(flux) {
        super();

        const messageActions = flux.getActions('messages');
        this.register(messageActions.newMessage, this.handleNewMessage);
        this.register(messageActions.deleteMessage, this.deleteMessage);

        const postActions = flux.getActions('post');
        this.register(postActions.onSubmit, this.handleNewMessage);

        this.messageCounter = 0;
        this.messages = [];

        this.state = { messages : this.messages };
    }
    handleNewMessage(content) {
        console.log(this.state);
        if (content!='') {
            const id = this.messageCounter++;
            this.messages.push({content, id});
            this.setState(this.messages);
        }
    }
    deleteMessage(id) {
        delete this.messages[id];
        this.setState(this.messages);
    }
}