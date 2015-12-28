/**
 * Created by xhitedev on 12/27/15.
 */

import {Actions} from 'flummox';

export default class MessageActions extends Actions {
    handleMessage(event) {
        return event.target.value; // automatically dispatched
    }
    onSubmit(event) {
        event.preventDefault();
        return event.target[0].value;
    }
}