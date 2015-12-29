/**
 * Created by xhitedev on 12/27/15.
 */

import {Actions} from 'flummox';

export default class MessageActions extends Actions {
    newMessage(content) {
        console.log("new message");
        return content; // automatically dispatched
    }
    deleteMessage(id) {
        console.log("delete message");
        return id;
    }
    fetchMessages() {
        console.log("fetch messages");
        return '/api/messages';
    }
}