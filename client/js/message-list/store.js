/**
 * Created by xhitedev on 12/27/15.
 */

import {Store} from 'flummox';
import 'whatwg-fetch';

export default class MessageStore extends Store {
    constructor(flux) {
        super();

        const messageActions = flux.getActions('messages');
        this.register(messageActions.newMessage, this.handleNewMessage);
        this.register(messageActions.deleteMessage, this.deleteMessage);
        this.register(messageActions.fetchMessages, this.fetchMessages);

        const postActions = flux.getActions('post');
        this.register(postActions.onSubmit, this.handleNewMessage);

        this.messageCounter = 0;
        this.messages = [];

        this.state = { messages : this.messages };
    }
    fetchMessages(url) {
        fetch(url)
        .then(function(response) {
            return response.json()
        }).then((json) => {
            console.log('parsed json', json);
            this.messages = this.messages.concat(json);
            var messages = [];
            for(var i=0;i<this.messages.length;++i){
                const m = this.messages[i];
                messages[m.id]=m;
            }
            this.messages = messages;
            this.setState({ messages : this.messages });
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        });
    }
    handleNewMessage(content) {
        fetch('/api/messages', {
            method: 'post',
            body: content
        });
        if (content!='') {
            const id = this.messageCounter++;
            this.messages[id] = {content:content, id: id};
            this.setState({ messages : this.messages });
        }
    }
    deleteMessage(id) {
        fetch('/api/messages', {
            method: 'delete',
            body: id
        });
            delete this.messages[id];
        this.setState({ messages : this.messages });
    }
}