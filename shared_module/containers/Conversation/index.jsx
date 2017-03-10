import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GET_CONVERSATION, SEND_MESSAGE, SUBMIT_QUOTE, DECLINE_QUOTE_REQUEST} from 'actions/conversation'
import {GET_PROFILE, GET_PROFILE_QUOTE_TEMPLATES} from 'actions/profile'

import {
    GET_PHOTOS,
    ADD_PHOTO,
    REMOVE_PHOTO,

    GET_VIDEOS,
    ADD_VIDEO,
    REMOVE_VIDEO,

    GET_AUDIOS,
    ADD_AUDIO,
    REMOVE_AUDIO
} from 'poptop_modules/actions/media'


import ConversationComponent from './components/ConversationComponent'
import {Loader} from 'semantic-ui-react';
import './Conversation.scss';

@connect(mapStateToProps, mapDispatchToProps)
export default class Conversation extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        getConversation: React.PropTypes.func,
        getProfile: React.PropTypes.func,
        submitQuote: React.PropTypes.func,
        declineQuoteRequest: React.PropTypes.func,
        getQuoteTemplates: React.PropTypes.func,
        conversation: React.PropTypes.object,
        profile: React.PropTypes.object,
        sendMessage: React.PropTypes.func,
        params: React.PropTypes.object,
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

    componentDidMount() {
        let id = this.props.params.id
        this.props.getConversation(id)
        this.props.getProfile()
    }

    render() {
        let {
            conversation,
            submitQuote,
            sendMessage,
            getQuoteTemplates,
            declineQuoteRequest,
            profile,
            //media
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

        if (conversation && conversation.vacancy) {
            return (
                <ConversationComponent
                    profile={profile}
                    conversation={conversation}
                    submitQuote={submitQuote}
                    sendMessage={sendMessage}
                    declineQuoteRequest={declineQuoteRequest}
                    getQuoteTemplates={getQuoteTemplates}

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
                )
        }
        return (<Loader>Loading...</Loader>)
    }
}

function mapStateToProps(state) {
    return {
            conversation: state.conversation.conversation,
            profile: state.profileInfo.data,
            media: state.media
        }
}

function mapDispatchToProps(dispatch) {
    return {

        getProfile: async () => {
            let result = await dispatch(GET_PROFILE())
            return dispatch(result)
        },
        getConversation: async (data) => {
            let result = await dispatch(GET_CONVERSATION(data))
            console.log('GET CONVERSATION RESULT',result)
            return dispatch(result)
        },
        getQuoteTemplates: async (data) => {
            let result = await dispatch(GET_PROFILE_QUOTE_TEMPLATES(data))
            console.log('GET_PROFILE_QUOTE_TEMPLATES RESULT',result)
            return dispatch(result)
        },
        submitQuote: async (data) => {
            console.log(data)
            let result = await dispatch(SUBMIT_QUOTE(data))
            console.log('SUBMIT_QUOTE RESULT',result)
            return dispatch(result)
        },
        sendMessage: async (data) => {
            let result = await dispatch(SEND_MESSAGE(data))
            console.log('SEND_MESSAGE RESULT',result)
            return dispatch(result)
        },
        declineQuoteRequest: async (id, data) => {
            let result = await dispatch(DECLINE_QUOTE_REQUEST(id, data))
            console.log('DECLINE_QUOTE_REQUEST RESULT',result)
            return dispatch(result)
        },
        getPhotos: async () => {
            let result = await dispatch(GET_PHOTOS())
            return dispatch(result)
        },

        getVideos: async () => {
            let result = await dispatch(GET_VIDEOS())
            return dispatch(result)
        },

        getAudios: async () => {
            let result = await dispatch(GET_AUDIOS())
            return dispatch(result)
        },

        addVideo: async (url) => {
            let result = await dispatch(ADD_VIDEO(url))
            return dispatch(result)
        },
        addPhoto: async (file) => {
            let result = await dispatch(ADD_PHOTO(file))
            return dispatch(result)
        },
        addAudio: async (file) => {
            let result = await dispatch(ADD_AUDIO(file))
            return dispatch(result)
        },

        removePhoto: async (id) => {
            let result = await dispatch(REMOVE_PHOTO(id))
            return dispatch(result)
        },
        removeVideo: async (id) => {
            let result = await dispatch(REMOVE_VIDEO(id))
            return dispatch(result)
        },
        removeAudio: async (id) => {
            let result = await dispatch(REMOVE_AUDIO(id))
            return dispatch(result)
        }



    }
}
