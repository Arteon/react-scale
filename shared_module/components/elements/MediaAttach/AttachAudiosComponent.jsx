import React, {Component} from 'react';

import {
    Button,
    List,
    Checkbox
}  from 'semantic-ui-react';

export default class AttachAudiosComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            addAudioError: false,
            error: '',
            selectedAudios:this.props.selectedAudios,
        }
    }

    static propTypes = {
        addAudio: React.PropTypes.func,
        removeAudio: React.PropTypes.func,
        handleChange: React.PropTypes.func,
        saveToProfile: React.PropTypes.bool,
        allAudios: React.PropTypes.array,
        selectedAudios: React.PropTypes.array
    }

    static defaultProps = {
      allAudios: []
    }

    addAudio(e) {
        const file = e.target.files[0];
        this.props.addAudio(file)

    }

    toggleAudio({id}) {
        let selectedAudios = this.state.selectedAudios

        let i = selectedAudios.indexOf(id)

        i === -1 ? selectedAudios.push(id) : selectedAudios.splice(i, 1)

        let state = {
            ...this.state,
            selectedAudios : selectedAudios
        }
        this.setState({state})
        this.props.handleChange(selectedAudios)
    }


    async removeAudio({id, errCb}) {
        let res = await this.props.removeAudio(id)
        if (res.error) {
            errCb(res.error)
        }
    }

    render() {

        let {allAudios, removeAudio} = this.props
        let {selectedAudios, addAudioError, error} = this.state


        let audios_components = allAudios.map((audio, i) => {
            let checked = (selectedAudios.findIndex(item => item == audio.id) != -1)
            return (
                    <List.Item key={audio.id}>
                      <List.Icon name='music' size='large' verticalAlign='middle' />
                      <List.Content>
                        <List.Header>{audio.title}</List.Header>
                        <List.Description>
                            <Checkbox key={audio.id}  checked={checked} onChange={this.toggleAudio.bind(this, {id: audio.id})} />
                            <audio src={audio.rec} controls="true"></audio>

                            <Button onClick={this.removeAudio.bind(this, {id: audio.id})} color='red' icon="remove" content="Remove"/>
                        </List.Description>
                      </List.Content>
                    </List.Item>
                )
        })

        return (
            <div>
                <List divided relaxed>
                    {audios_components}
                </List>
                <input
                    className="hidden"
                    onChange={::this.addAudio}
                    name="audio-upload"
                    type="file"
                    id="audio-upload"/>
                <Button
                    id="audio-upload-btn"
                    htmlFor="audio-upload"
                    as="label"
                    content="Add Audio"
                    icon="music"
                    />
            </div>
        )
    }
}
