import React, {Component} from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    Card,
    Label,
    Icon,
    Segment,
    Header,
    Dropdown
} from 'semantic-ui-react'
import {connect} from 'react-redux';

const options = [
    {
        key: 'm',
        text: 'per event',
        value: 'event'
    }, {
        key: 'f',
        text: 'per person',
        value: 'person'
    }
]

export default class QuoteConstructorComponent extends Component {

    state = {}

    handleChange = (e, {value}) => this.setState({value})

    render() {
        const {value} = this.state
        return (
            <Form>
                <h3>Main service options to include</h3>
                <Segment.Group>
                    <Segment padded>
                        <Header>3 piece band
                            <Label tag color='green'>$300 per event</Label>
                            <Button floated='right' basic primary content='Include in quote' icon='square outline'></Button>
                            <Button floated='right' basic content='Edit' icon='pencil'></Button>
                        </Header>
                    </Segment>
                    <Segment padded>
                        <Header>3 piece band
                            <Label tag color='green'>$300 per event</Label>
                            <Button floated='right' primary content='Include in quote' icon='checkmark box'></Button>
                            <Button floated='right' basic content='Edit' icon='pencil'></Button>
                        </Header>
                    </Segment>
                    <Segment padded>
                        <Header>3 piece band
                            <Label tag color='green'>$300 per event</Label>
                            <Button floated='right' basic primary content='Include in quote' icon='square outline'></Button>
                            <Button floated='right' basic content='Edit' icon='pencil'></Button>
                        </Header>
                    </Segment>

                    <Segment>
                        <h3><Icon name='plus'/>
                            Add a service option</h3>
                        <Form>
                            <Form.Group widths='2'>
                                <Form.Field control={Input} label='Title' placeholder='First name'/>
                                <Form.Field>
                                    <label>Price</label>
                                    <Form.Group widths='equal'>
                                        <Form.Field>
                                            <Input placeholder='300' labelPosition='right'>
                                                <Label basic>$</Label>
                                                <input/>
                                                <Label><Dropdown options={options} defaultValue='event'/></Label>

                                            </Input>
                                        </Form.Field>
                                    </Form.Group>
                                </Form.Field>

                            </Form.Group>
                            <Form.Field >
                                <label>Description</label>
                                <TextArea autoHeight placeholder='Ex. String quartet, Hog roast etc.'/>
                            </Form.Field>

                            <Button primary>
                                <Icon name='plus'/>
                                Add
                            </Button>
                            <Button primary basic>
                                <Icon name='close'/>
                                Cancel
                            </Button>
                        </Form>

                    </Segment>

                </Segment.Group>
                <h3>Additional expenses</h3>
                <Segment.Group>
                    <Segment>

                        <Form.Group widths='equal'>

                            <Form.Field control={Input} label='Title' placeholder='Ex. String quartet, Hog roast etc.'/>
                            <Form.Field>
                                <label>Price</label>
                                <Form.Group widths='equal'>
                                    <Form.Field>
                                        <Input placeholder='300' labelPosition='right'>
                                            <Label basic>$</Label>
                                            <input/>
                                            <Label><Dropdown options={options} defaultValue='event'/></Label>

                                        </Input>
                                    </Form.Field>
                                </Form.Group>
                            </Form.Field>

                        </Form.Group>
                    </Segment>
                </Segment.Group>

                <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...'/>
                <Form.Field control={Checkbox} label='I agree to the Terms and Conditions'/>
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        )
    }

}

function mapStateToProps(state) {
    return {quote: state.conversation.quote}
}

function mapDispatchToProps(dispatch) {
    return {}
}
