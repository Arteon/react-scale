import React, {Component} from 'react';
import {Button, Form, Message, Grid, TextArea} from 'semantic-ui-react';
import {Link} from 'react-router';
import {InputComponent} from 'shared_module/components'
import {isRequired, maxSize, latin, noSpace, composition} from 'shared_module/utils/validate';

export default class LoginComponent extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        username: '',
        password: '',
        btn_loading: false,
        invalid: {},
        form: [
            {
                validate: composition([isRequired, maxSize(36), latin, noSpace]),
                value: '',
                placeholder: 'Email or Username',
                type: 'text',
                name: 'username',
                labelText: 'Your username'
            }, {
                validate: composition([isRequired, maxSize(36), noSpace]),
                value: '',
                // as: 'TextArea',
                placeholder: 'Password',
                type: 'password',
                name: 'password',
                labelText: 'Your password'
            }
        ]
    }

    static propTypes = {
        login: React.PropTypes.func,
        forgetPassword: React.PropTypes.func,
        register: React.PropTypes.func,
        componentState: React.PropTypes.object
    }

    componentWillMount() {}

    invalidExists() {
        for (let key in this.state.invalid) {
            if (this.state.invalid[key]) {
                console.log(key + ' IS INVALID DUDE')
                // this.state.formProps.error = true
                // let obj = {...state}
                // obj.formProps.error = true;
                // this.setState(obj)
                return true
            }
        }
        // obj.formProps.error = false;
        // this.setState(obj)
        return false
    }

    componentWillReceiveProps() {}

    async login(e) {
        e.preventDefault()
        let {login} = this.props;
        let {username, password} = this.state;
        let data = {username, password}
        // set loading state
        this.setState({
            btn_loading: true
        })
        // make request
        let result = await login(data)
        if (result.error) {
            //  reset loading state
            this.setState({
                btn_loading: false
            })
        }
    }

    makePrettyError(err) {
        //will be fired twice
        // first render - result of LOGIN_AUTH,
        // second - change btn_loading state
        if (err && err["non_field_errors"]) {
            return {
                header: 'Invalid credentials',
                content: err["non_field_errors"][0]
            }
        }
    }

    makePrettyLoginError(err) {
        for (let key in err) {
            console.log(key)
            return err[key][0]
        }
    }

    render() {
        let {username, password, btn_loading} = this.state;
        let {componentState} = this.props;
        // error from server
        let {loginError} = componentState;
        // props for form error state
        let loginFormProps = {error: !!loginError}
        // login form error
        let prettyLoginError = this.makePrettyError(loginError)
        // btn props
        let loginBtnProps = {
            disabled: this.invalidExists(),
            content: 'Login',
            icon: 'sign in',
            loading: btn_loading
        }

        let connectToParent = function(inputReceivedState) {
            let state = {...this.state} // current state before receiving child state
            let {name, error, value} = inputReceivedState // receive child state
            state.invalid[name] = error // get child error
            state[name] = value // get child value
            this.setState(state) // update state
        }

        let inputComponents = this.state.form.map((a, i) => {
            let error = loginError[a.name] ? loginError[a.name][0] : null
            return <InputComponent as={a.as} connectToParent={connectToParent.bind(this)} validate={a.validate} labelText={a.labelText} type={a.type} key={i} value={a.value} placeholder={a.placeholder} error={error} name={a.name}/>
        })

        return (
            <Grid verticalAlign='middle' centered columns={1}>
                <h1>lol</h1>
                <Grid.Column tablet={10} mobile={16} computer={6}>
                    <Form onSubmit={this.login.bind(this)}{...loginFormProps}>
                        {prettyLoginError && <Message error header={prettyLoginError.header} content={prettyLoginError.content}/>}
                        {inputComponents}
                        <div className="text-center">
                            <Button {...loginBtnProps}/>
                        </div>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
