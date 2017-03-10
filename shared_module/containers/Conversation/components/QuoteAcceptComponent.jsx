import React, {Component} from 'react';
import {
    Button,
    Icon,
    Item,
    Form,
    Label,
    Grid,
    Divider,
    Statistic,
    List,
    Image,
    Radio,
    Segment,
    Message
} from 'semantic-ui-react'
import {Link} from 'react-router';
import InputComponent from 'poptop_modules/components';
export default class QuoteAcceptComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            selectedQuote: false
        }
    }

    static propTypes = {
        acceptQuote: React.PropTypes.func,
        sendMessage: React.PropTypes.func
    }

    render() {

        return (
            <Item.Group divided>
            <Item className="align-row">
                {/* <DateInboxItemComponent date={item.vacancy.event.date}/> */}
                <Item.Content>
                    <Item.Header>Accept a quote from {conversation.quotes[0].supplier}</Item.Header>
                    <Item.Meta>
                        <span>I don't know wtf have to be here</span>
                    </Item.Meta>
                    <Item.Description>
                        <List>
                            {quotes_components}
                        </List>
                    </Item.Description>
                    <Item.Extra>
                        <Form>
                            <Button content="Accept" onClick={this.acceptQuote.bind(this)} primary floated='left'/>
                            <Message success header='Quote accepted' content="Quote accepted."/>
                            <Message error header='There is an error' content='Sorry, but error occured. Please, retry.'/>
                        </Form>
                    </Item.Extra>
                </Item.Content>
                <Divider horizontal/>
            </Item>
        </Item.Group>
        )
    }


}
