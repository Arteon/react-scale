import React, {Component} from 'react';
import {
    Button,
    Icon,
    Item,
    Form,
    TextArea,
    Checkbox,
    Dropdown,
    Input
} from 'semantic-ui-react'

import {
    AttachPhotosComponent,
    AttachAudiosComponent,
    AttachVideosComponent
} from 'poptop_modules/components'


export default class QuoteForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            quote: this.props.quote || {},
            templates: [],
            selectedTemplate: 0
        }
    }

    static propTypes = {
        handleSubmit: React.PropTypes.func,
        handleCancel: React.PropTypes.func,
        getQuoteTemplates: React.PropTypes.func,
        quote: React.PropTypes.object,
        conversation: React.PropTypes.object,
    }

    async componentDidMount(){
        let res = await this.props.getQuoteTemplates()
        console.log(res.result.results)
        let templates = res.result.results
        this.setState({
            ...this.state,
            templates: templates
        })
    }

    handleInputChange(event, {value, name, checked}) {
        checked !== undefined && (value = checked)
        this.setState({
            quote: {
                ...this.state.quote,
                [name]: value
            }
        });
    }

    handleTemplateChange(e, {value}){

        let template = this.state.templates.find(x => x.id === value)

        this.setState({
            ...this.state,
            selectedTemplate: value,
            quote: template || {},
        })

    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.handleSubmit(
            {
                ...this.state.quote,
                vacancy: this.props.conversation.vacancy.id
            }
        )
    }

    handleCancel(e){
        e.preventDefault()
        this.props.handleCancel()
    }


    render(){
        let {price, comment, deposit, is_refundable, non_refund_days, save_as_template } = this.state.quote
        let defaultOption = {key: 0, text: 'Select template', value:0}
        const options = [defaultOption].concat(
                this.state.templates.map((obj, key) => {
                return {key: obj.id, text: `${obj.price} ${obj.event_type}`, value:obj.id}
            })
        )

        return(
            <Form onSubmit={::this.handleSubmit}>
            {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}

                {this.state.templates &&
                    <Dropdown
                    options={options}
                    selection
                    value={this.state.selectedTemplate}
                    onChange={::this.handleTemplateChange} />

                }


                <Form.Field
                    control={Input}
                    label='Price quote'
                    placeholder='1000'
                    value={price||''}
                    name='price'
                    onChange={::this.handleInputChange} />
                <Form.Field
                    control={Input} label='Deposit'
                    placeholder='200'
                    value={deposit||''}
                    name='deposit'
                    onChange={::this.handleInputChange} />

                <Form.Field control={TextArea}
                    value={comment||''}
                    name='comment'
                    label='Comment'
                    placeholder='Tell us more about you...'
                    onChange={::this.handleInputChange} />

                <Form.Field
                    control={Checkbox}
                    checked={is_refundable||false}
                    label='Refundable deposit.'
                    name='is_refundable'
                    onChange={::this.handleInputChange} />

                <Form.Field
                    control={Input}
                    inline
                    value={non_refund_days||''}
                    label='Up to how many days before the event date the deposit is refundable'
                    placeholder='7'
                    name='non_refund_days'
                    onChange={::this.handleInputChange}  />

                <Form.Field
                    control={Checkbox}
                    checked={save_as_template||false}
                    label='Save this quote as a template for future quotes.'
                    name='save_as_template'
                    onChange={::this.handleInputChange} />



                <Button color='pink' >
                    <Icon name='mail'  onClick={::this.handleSubmit}/>
                    Send
                </Button>
                <Button color='pink'  basic onClick={::this.handleCancel}>
                    <Icon name='close' />
                    Cancel
                </Button>
            {/*
                <AddVideoComponent />
                <AddPhotoComponent />
                <AddAudioComponent />
            */}
            </Form>
        )
    }
}
