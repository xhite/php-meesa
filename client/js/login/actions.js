/**
 * Created by xhitedev on 12/27/15.
 */

import {Actions} from 'flummox';

export default class LoginActions extends Actions {
    handleUsername(event) {
        return event.target.value;
    }
    handlePassword(event) {
        return event.target.value;
    }
    onSubmit(event) {
        event.preventDefault();
        return '/api/user';
    }
}