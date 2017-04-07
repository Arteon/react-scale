import React, {Component} from 'react'
import {Statistic} from 'semantic-ui-react'

export default class DateItemComponent extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        date: React.PropTypes.string
    }

    render() {
        const {date} = this.props
        const dateObj = new Date(date)
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
        // const weekDayNames = [
        //     'Mon',
        //     'Tue',
        //     'Wed',
        //     'Thu',
        //     'Fri',
        //     'Sat',
        //     'Sun'
        // ];
        const monthString = monthNames[dateObj.getMonth() - 1]
        const year = dateObj.getFullYear()
        const day = dateObj.getDate()
        // const weekday = monthNames[dateObj.getDay() - 1]

        return (<Statistic floated='left' value={day} label={`${monthString}, ${year}`}/>)
    }

}
