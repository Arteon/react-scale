import React, {Component} from 'react';
import {Grid, Image, Icon, Container} from 'semantic-ui-react';
import './Footer.scss';
export default class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer>
                <div className="footer-inner">
                    <Grid>
                        <Grid.Row>
                            {/* <Grid.Column width={4}>
                                <ImageComponent src='https://d118rjmjhbvwtc.cloudfront.net/img/poptopuklogo.png'/>
                            </Grid.Column> */}
                            <Grid.Column width={2}>
                            </Grid.Column>
                            <Grid.Column width={12} textAlign='right'>

                                    <Icon name='facebook square' size='big' />
                                    <Icon name='twitter square' size='big' />
                                    <Icon name='pinterest square' size='big' />
                                    <Icon name='instagram' size='big' />

                            </Grid.Column>
                            <Grid.Column width={2}>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </footer>
        )
    }
}
