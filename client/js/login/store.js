/**
 * Created by xhitedev on 12/27/15.
 */

import {Store} from 'flummox';

export default class LoginStore extends Store {
    constructor(flux) {
        super();

        const loginActions = flux.getActions('login');
        this.register(loginActions.handleUsername, this.handleUsername);
        this.register(loginActions.handlePassword, this.handlePassword);
        this.register(loginActions.onSubmit, this.handleSubmit);

        this.state = {};
    }
    handleUsername(content) {
        this.setState({
            username: content
        });
    }
    handlePassword(content) {
        this.setState({
            password: content
        });
    }
    handleSubmit(url) {
        const passwd = this.state.username + ":" + this.state.password;
        const data = btoa(passwd);
        console.log(data);
        fetch(url, {
            credentials: 'same-origin',
            headers: {
                'Authorization': 'Basic '+ data
            }
        });
    }
}