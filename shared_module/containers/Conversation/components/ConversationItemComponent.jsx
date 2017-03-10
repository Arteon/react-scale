import React, {Component} from 'react'
import { Item, Image, Label, Segment, Header, Divider, Grid } from 'semantic-ui-react'
import {VideoComponent} from 'poptop_modules/components'
export default class ConversationItemComponent extends Component {

  static propTypes = {
        item: React.PropTypes.object,
        isAuthor: React.PropTypes.bool,
        avatarUrl: React.PropTypes.string
    }

  render() {

    let {isAuthor, item, avatarUrl} = this.props;

    let image_components = item.images.map((img, key) => {
        return (
            <Grid.Column>
                <Image key={key} size='small' src={img.get_absolute_url} bordered />
            </Grid.Column>
        )
    })
    let video_components = item.videos.map((video, key) => {
        return (
            <Grid.Column>
                <VideoComponent video={video} key={key}/>
            </Grid.Column>
        )
    })

    if(isAuthor){
        return (
            <div className='conversation-item author'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <Header textAlign='right' as='h4'>Eugene Sixfinger</Header>
                            <Segment textAlign='right'  className='message-content' floated='right'>
                                {item.message}
                                <Grid columns='equal'>
                                    {image_components}
                                    {video_components}
                                </Grid>
                            </Segment>
                            <div className='sent-at'>23:12, 20 Jun 2018</div>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Image shape='circular' size='tiny' src={avatarUrl} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }else{
        return (
            <div className='conversation-item other'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Image shape='circular' floated='right' size='tiny' src={avatarUrl} />
                        </Grid.Column>
                        <Grid.Column width={14} textAlign='left'>
                            <Header textAlign='left' as='h4'>Bob Alice</Header>
                            <Segment textAlign='left' className='message-content' compact>
                                {item.message}
                                <Image.Group size='small'>
                                    {image_components}
                                </Image.Group>
                            </Segment>
                            <div className='sent-at'>23:12, 20 Jun 2018</div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
        }
    }


}
