import React, {Component} from 'react';

import {
    Button,
    Input,
    Label,
    Checkbox,
    Embed
}  from 'semantic-ui-react';

export default class AttachVideosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            addVideoError: false,
            error: '',
            videoUrl : '',
            selectedVideos:this.props.selectedVideos,
        }
    }

    static propTypes = {
        addVideo: React.PropTypes.func,
        removeVideo: React.PropTypes.func,
        handleChange: React.PropTypes.func,
        saveToProfile: React.PropTypes.bool,
        allVideos: React.PropTypes.array,
        selectedVideos: React.PropTypes.array
    }

    static defaultProps = {
      allVideos: []
    }

    addVideo() {
        this.props.addVideo(this.state.videoUrl)
    }

    handleUrlChange(e) {
        let state = {
            ...this.state,
            videoUrl: e.target.value
        }
        this.setState(state)
    }

    toggleVideo({id}) {
        let selectedVideos = this.state.selectedVideos

        let i = selectedVideos.indexOf(id)

        i === -1 ? selectedVideos.push(id) : selectedVideos.splice(i, 1)

        let state = {
            ...this.state,
            selectedVideos : selectedVideos
        }
        this.setState({state})
        this.props.handleChange(selectedVideos)
    }


    async removeVideo({id, errCb}) {
        let res = await this.props.removeVideo(id)
        if (res.error) {
            errCb(res.error)
        }
    }

    render() {

        let {allVideos, removeVideo} = this.props
        let {selectedVideos, addVideoError, error} = this.state


        let videos_components = allVideos.map((video, i) => {
            let checked = (selectedVideos.findIndex(item => item == video.id) != -1)
            let thumb = video.thumb || `https://i.ytimg.com/vi/${video.video}/0.jpg`
            const source = video.video_type === 'yt'
                ? 'youtube'
                : 'vimeo'
            return (
                    <div key={video.id} >
                    <Checkbox key={video.id}  checked={checked} onChange={this.toggleVideo.bind(this, {id: video.id})} />
                    <Embed id={video.video} placeholder={thumb} source={source}/>
                    <Button onClick={this.removeVideo.bind(this, {id: video.id})} color='red' icon="remove" content="Remove"/>
                    </div>
                )
        })

        return (
            <div>

                {videos_components}
                <Input
                    value={this.state.videoUrl}
                    fluid name="video-upload"
                    placeholder="Youtube or Vimeo url"
                    onChange={::this.handleUrlChange}
                    action={<Button onClick = {::this.addVideo}
                        icon = "plus" content = "Add" />}
                    />

                {addVideoError && (<Label>{error}</Label>)}
            </div>
        )
    }
}
