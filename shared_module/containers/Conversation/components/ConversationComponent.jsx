import React, {Component} from 'react';
import {
    Button,
    Icon,
    Item,
    Form,
    TextArea,
    Checkbox,
    Dropdown,
    Input,
    Label,
    Grid,
    Divider,
    Statistic,
    List,
    Image,
    Radio,
    Segment,
    Message,
    Container,
    Modal,
    Header,
    Step,
    Select
} from 'semantic-ui-react'

import config from 'config'

import {Link} from 'react-router';
import {InputComponent} from 'poptop_modules/components';
import ConversationItemComponent from './ConversationItemComponent.jsx';
import QuoteConstructorComponent from './QuoteConstructorComponent.jsx'
import QuoteForm from './QuoteForm.jsx'


import {
    AttachPhotosComponent,
    AttachAudiosComponent,
    AttachVideosComponent
} from 'poptop_modules'
export class ConversationStepsComponent extends Component {

    static propTypes = {
        status: React.PropTypes.object
    }

    render() {

        return (
            <Step.Group size='mini' ordered fluid>
              <Step completed>
                <Icon name='truck' />
                <Step.Content>
                  <Step.Title>Submit quote</Step.Title>

                </Step.Content>
              </Step>

              <Step active>
                <Icon name='payment' />
                <Step.Content title='Confirm by'/>
              </Step>
              <Step disabled icon='info' title='Confirm Order' />
            </Step.Group>
        )
    }
}

export class ConversationCTA extends Component {

    static propTypes = {
        status: React.PropTypes.object,
        handleCTAClick: React.PropTypes.func
    }

    handleCTAClick(e){
        this.props.handleCTAClick(e)
    }

    render() {

        return (
            <div>
                <Header as='h2'>Please, submit a quote</Header>
                <p>Try adding as much details as you can and submit a quote ASAP to increase your chances for a booking.</p>
                <div>

                    <Button color='pink' onClick={::this.handleCTAClick}>
                        Submit a quote
                        <Icon name='right chevron' />
                    </Button>
                </div>
            </div>
        )
    }
}



export class ConversationMessageForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: '',
            selectedPhotos: [],
            selectedAudios: [],
            selectedVideos: []
        }
    }

    static propTypes = {
        conversation: React.PropTypes.object,
        sendMessage: React.PropTypes.func,

        //media
        media: React.PropTypes.object,
        getPhotos: React.PropTypes.func,
        addPhoto: React.PropTypes.func,
        removePhoto: React.PropTypes.func,

        getVideos: React.PropTypes.func,
        addVideo: React.PropTypes.func,
        removeVideo: React.PropTypes.func,

        getAudios: React.PropTypes.func,
        addAudio: React.PropTypes.func,
        removeAudio: React.PropTypes.func,
    }

    sendMessage(event) {
        event.preventDefault()
        let {sendMessage} = this.props;
        sendMessage({
            images: this.state.selectedPhotos,
            audios: this.state.selectedAudios,
            videos: this.state.selectedVideos,
            message: this.state.message,
            header: 'msg front',
            conversation: this.props.conversation.id
        })
        this.setState({
            ...this.state,
            message: ''
        })
    }

    handleChangeMessage(e) {

        this.setState({
            ...this.state,
            message: e.target.value
        })
    }

    handlePhotosChange(selectedPhotos) {
        let state = {
            ...this.state,
            selectedPhotos: selectedPhotos
        }
        this.setState(state)
    }

    handleAudiosChange(selectedAudios) {
        let state = {
            ...this.state,
            selectedAudios: selectedAudios
        }
        this.setState(state)
    }

    handleVideosChange(selectedVideos) {
        let state = {
            ...this.state,
            selectedVideos: selectedVideos
        }
        this.setState(state)
    }

    componentDidMount() {
        this.props.getPhotos();
        this.props.getVideos();
        this.props.getAudios();
    }

    render() {

        let {photos, audios, videos} = this.props.media || {photos:[],audios:[],videos:[]}
        let {
            selectedPhotos,
            selectedAudios,
            selectedVideos
        } = this.state
        return (
            <Segment>
                <Form reply onSubmit={(e) => e.preventDefault()}>
                    <Form.TextArea onChange={::this.handleChangeMessage} value={this.state.message} name='message' autoHeight />
                    <Button content='Send message' onClick={::this.sendMessage} icon='edit' basic color='pink' floated='right'/>
                    <Button.Group basic  labeled>
                        <Modal trigger={<Button icon='image' content={selectedPhotos.length>0&&selectedPhotos.length} />}>
                            <Modal.Header>Select a Photo</Modal.Header>
                            <Modal.Content>
                                <AttachPhotosComponent
                                    handleChange={::this.handlePhotosChange}//to connect selected images values
                                    removePhoto={this.props.removePhoto}
                                    addPhoto={this.props.addPhoto}
                                    allPhotos={photos}
                                    selectedPhotos={selectedPhotos}/>
                            </Modal.Content>
                        </Modal>
                        <Modal trigger={<Button icon='music' content={selectedAudios.length>0&&selectedAudios.length} />}>
                            <Modal.Header>Select an Audio</Modal.Header>
                            <Modal.Content>
                                <AttachAudiosComponent
                                    addAudio={this.props.addAudio}
                                    selectedAudios={selectedAudios}
                                    allAudios={audios}
                                    removeAudio={this.props.removeAudio}
                                    handleChange={::this.handleAudiosChange}/>
                            </Modal.Content>
                        </Modal>
                        <Modal trigger={<Button icon='image' content={selectedVideos.length>0&&selectedVideos.length} />}>
                            <Modal.Header>Select a Video</Modal.Header>
                            <Modal.Content>
                                <AttachVideosComponent
                                    addVideo={this.props.addVideo}
                                    handleChange={::this.handleVideosChange}//to connect selected images values
                                    removeVideo={this.props.removeVideo}
                                    allVideos={videos}
                                    selectedVideos={selectedVideos}/>
                            </Modal.Content>
                        </Modal>
                    </Button.Group>
                </Form>
            </Segment>
        )
    }
}

export default class ConversationComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedQuote: false,
            quoteFormActive: false
        }
    }

    static propTypes = {
        conversation: React.PropTypes.object,
        profile: React.PropTypes.object,
        acceptQuote: React.PropTypes.func,
        sendMessage: React.PropTypes.func,
        submitQuote: React.PropTypes.func,
        declineQuoteRequest: React.PropTypes.func,
        getQuoteTemplates: React.PropTypes.func,

        //media
        media: React.PropTypes.object,
        getPhotos: React.PropTypes.func,
        addPhoto: React.PropTypes.func,
        removePhoto: React.PropTypes.func,

        getVideos: React.PropTypes.func,
        addVideo: React.PropTypes.func,
        removeVideo: React.PropTypes.func,

        getAudios: React.PropTypes.func,
        addAudio: React.PropTypes.func,
        removeAudio: React.PropTypes.func,
    }

    componentWillMount() {}

    invalidExists() {}

    componentWillReceiveProps() {}

    handleQuoteChange(e) {
        this.setState({
            ...this.state,
            selectedQuote: e.currentTarget.value
        })
    }

    submitQuote(data) {
        this.props.submitQuote(data)
    }

    toggleQuoteForm(e){
        e.preventDefault()
        this.setState({
            ...this.state,
            quoteFormActive: !this.state.quoteFormActive

        })
    }

    acceptQuote() {
        let {acceptQuote} = this.props;
        let {selectedQuote} = this.state;

        acceptQuote(selectedQuote)
    }

    render() {
        let {conversation,
            profile,
            sendMessage,
            declineQuoteRequest,
            media,
            getPhotos,
            addPhoto,
            removePhoto,
            getVideos,
            addVideo,
            removeVideo,
            getAudios,
            addAudio,
            removeAudio
        } = this.props;

        const quoteRequest = conversation.vacancy.quote_requests && conversation.vacancy.quote_requests[0]

        let quotes_components = conversation.quotes.map((a, i) => {
            return (
                <div key={i}>
                    <List.Item>
                        {/* <Radio value={a.id.toString()} onChange={this.handleQuoteChange.bind(this)} label={a.price}/>  */}
                        {/* <List.Content>
                        <List.Description>{a.comment}</List.Description>
                    </List.Content> */}
                    </List.Item>
                    <Segment>
                        {a.comment}
                    </Segment>
                </div>
            )
        })

        let message_components = conversation.items.map((a, i) => {
            return (
                    <ConversationItemComponent
                        item={a}
                        key={i}
                        avatarUrl={profile.user.id===a.author ? profile.avatar : 'http://semantic-ui.com/images/avatar2/large/matthew.png'}
                        isAuthor={profile.user.id===a.author} />
                )
        })



        return (
            <div>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                    <Segment.Group>
                        <Segment>
                            <ConversationStepsComponent status={{}} />
                        </Segment>
                        <Segment>
                            <ConversationCTA status={{}} handleCTAClick={::this.toggleQuoteForm} />
                        </Segment>
                        {this.state.quoteFormActive &&
                            <Segment>
                                <h1>New quote</h1>
                                <QuoteForm handleSubmit={::this.submitQuote} getQuoteTemplates={this.props.getQuoteTemplates} conversation={conversation}/>
                            </Segment>
                        }

                        <Modal trigger={<Button basic >
                                        <Icon name='close' />
                                        Decline request
                                    </Button>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content>
                          <RequestDeclineForm
                                quoteRequest={quoteRequest}
                                handleSubmit={declineQuoteRequest}
                                />
                        </Modal.Content>
                      </Modal>




                    </Segment.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <ConversationMessageForm
                            sendMessage={sendMessage}
                            conversation={conversation}

                            //media
                            media={media}
                            getPhotos={getPhotos}
                            addPhoto={addPhoto}
                            removePhoto={removePhoto}
                            getVideos={getVideos}
                            addVideo={addVideo}
                            removeVideo={removeVideo}
                            getAudios={getAudios}
                            addAudio={addAudio}
                            removeAudio={removeAudio}


                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                      <Image shape='circular' size='tiny' src='http://semantic-ui.com/images/avatar/large/daniel.jpg' />
                  </Grid.Column>
                </Grid.Row>
            </Grid>


            {message_components}

            <Divider horizontal>New quote request</Divider>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image shape='circular' size='tiny' floated='right' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Segment textAlign='center'>
                            <QuoteRequestInfo vacancy={conversation.vacancy} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export const QuoteRequestInfo = ({vacancy}) => {
    let {guest_number, duration, start_time, answers} = vacancy
    return vacancy && (
    <div>
        <h3>Please send me a quote</h3>

        <h4>{vacancy.event.eventtype} {vacancy.event.city} {vacancy.event.date}</h4>

        {vacancy.artist_type.map((o, k) => {return (<Label key={k}>{o}</Label>) })} {vacancy.tag.map((o, k) => {return (<Label key={k}>{o}</Label>) })}

        <h4>Event details</h4>
        {duration && (<p>Supplier start time: {duration}</p>)}
        {guest_number && (<p>Service Length: {guest_number}</p>)}
        {start_time && (<p>Number of guests: {start_time}</p>)}
        {answers && (<p>{vacancy.answers}</p>)}
    </div>
)}
QuoteRequestInfo.PropTypes = {
    vacancy: React.PropTypes.object
}




export class RequestDeclineForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            other_reason_decline: '',
            reason_decline: ''
        }
    }

    static propTypes = {
        conversation: React.PropTypes.object,
        handleSubmit: React.PropTypes.func,
        quoteRequest: React.PropTypes.object
    }

    handleSubmit(event) {
        event.preventDefault()
        let {handleSubmit} = this.props;
        const id = this.props.quoteRequest.id
        handleSubmit(id, {
            status: 'declined',
            reason_decline: this.state.reason_decline,
            other_reason_decline: this.state.other_reason_decline
        })
    }

    handleChangeCustonReason(e) {

        this.setState({
            ...this.state,
            other_reason_decline: e.target.value
        })
    }

    handleChangeReason(e, {value}) {

        this.setState({
            ...this.state,
            reason_decline: value
        })
    }

    render() {
        console.log(this.state)

        const reason_decline_options = [
          { key: 'date_taken', text: 'This date is not available', value: 'date_taken' },
          { key: 'cant_travel', text: 'Cannot travel to your city', value: 'cant_travel' },
          { key: 'other', text: 'Other', value: 'other' },
        ]

        const {reason_decline, other_reason_decline} = this.state

        return (
                <Form reply>
                    <Select
                        placeholder='Please select a reason of decline'
                        options={reason_decline_options}
                        value={this.state.reason_decline}
                        onChange={::this.handleChangeReason}
                    />
                    {this.state.reason_decline==='other' && (

                            <Form.TextArea onChange={::this.handleChangeCustonReason} value={this.state.other_reason_decline} name='message' autoHeight />

                    )}

                    <Button content='Decline request' onClick={::this.handleSubmit} icon='edit' basic color='pink' floated='right'/>

                </Form>
        )
    }
}
