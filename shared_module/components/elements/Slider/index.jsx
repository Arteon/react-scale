import React, {Component} from 'react';
import './style.scss'
export default class Slider extends Component {
    static propTypes = {
        min: React.PropTypes.number, // min value in range
        max: React.PropTypes.number, // max value in range
        value: React.PropTypes.number, // initial value
        step: React.PropTypes.number, // value interval between labels
        disabled: React.PropTypes.bool,
        vertical: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        onChange: React.PropTypes.func // onChange callback
    }

    constructor(props) {
        super(props)
        this.state = {
            value: false
        }
    }

    componentWillMount() {
        let {value} = this.props
        if (!this.state.value) {
            this.setState({
                value
            })
        }
    }

    onChange(e) {
        let {onChange} = this.props;
        let {value} = e.target
        this.setState({
            ...this.state,
            value
        })
        onChange(value)
    }

    render() {
        let {min, disabled, max, step, vertical} = this.props
        let {value} = this.state

        let props = {
            step,
            value,
            min,
            max,
            disabled
        }
        if (vertical) {
            props.orient = 'vertical'
        }
        return (
            <input type="range" {...props} onChange={::this.onChange} />
        )
    }
}
