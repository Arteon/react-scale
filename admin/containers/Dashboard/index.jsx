import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends Component {
    constructor(props){
        super(props)
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
