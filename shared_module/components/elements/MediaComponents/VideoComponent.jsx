import React, {Component} from 'react';
import {Embed} from 'semantic-ui-react';

export default class VideoComponent extends Component {
    static propTypes = {
        video: React.PropTypes.object
    }
    render() {
        let {video} = this.props
        let thumb = video.thumb || `https://i.ytimg.com/vi/${video.video}/0.jpg`
        const source = video.video_type === 'yt'
            ? 'youtube'
            : 'vimeo'
        return (
            <div><Embed id={video.video} placeholder={thumb} source={source}/></div>
        )
    }
}
