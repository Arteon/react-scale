import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import {Link} from 'react-router';

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    static propTypes = {}

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <h1>Hi, I'm admin app!</h1>
            </div>
        )
    }
}



function mapStateToProps(state) {
    // console.log(state)
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}


export default Dashboard;
