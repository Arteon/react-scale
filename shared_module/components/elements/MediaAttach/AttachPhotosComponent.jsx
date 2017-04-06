import React, {Component} from 'react';

import {
    Button,
    Image,
    Label,
    Checkbox
}  from 'semantic-ui-react';

export default class AttachPhotosComponent extends Component {

    // behaves like a form filed

    constructor(props){
        super(props)
        this.state = {
            selectedPhotos:this.props.selectedPhotos,
            addPhotoError: false,
            error: ''
        }
    }

    async removePhoto({id, errCb}) {
        let res = await this.props.removePhoto(id)
        if (res.error) {
            errCb(res.error)
        }
    }


    static propTypes = {
        handleChange: React.PropTypes.func,
        removePhoto: React.PropTypes.func,
        allPhotos: React.PropTypes.array,//array of objects
        selectedPhotos: React.PropTypes.array,//array of ids
        addPhoto: React.PropTypes.func,
        saveToProfile: React.PropTypes.bool,
        onChange: React.PropTypes.func
    }

    static defaultProps = {
      allPhotos: []
  } 

    togglePhoto({id}) {
        let selectedPhotos = this.state.selectedPhotos

        let i = selectedPhotos.indexOf(id)

        i === -1 ? selectedPhotos.push(id) : selectedPhotos.splice(i, 1)

        let state = {
            ...this.state,
            selectedPhotos : selectedPhotos
                //new Set([photo].concat(this.state.selectedPhotos))
                //[photo].concat(this.state.selectedPhotos)

        }
        this.setState({state})
        this.props.handleChange(selectedPhotos)
    }

    uncheckPhoto(photo) {
    }

    async addPhoto(e) {

        let res = await this.props.addPhoto(e.target.files[0])
        if (!res.error){
            let state = {
                ...this.state,
                selectedPhotos: this.state.selectedPhotos.concat(res.result.id)
            };
            this.setState(state)
            this.props.handleChange(this.state.selectedPhotos)

        }

    }


    onChange() {
        //tie this to selectedPhotos change
        // what state??
        this.props.onChange({value: state.selectedPhotos})
    }



    render(){
        let {allPhotos} = this.props
        let {selectedPhotos, addPhotoError, error} = this.state

        let photos_components = allPhotos.map((a) => {
            let checked = (selectedPhotos.findIndex(item => item == a.id) != -1)
            return (
                    <div key={a.id}>
                        <Checkbox key={a.id} checked={checked} onChange={this.togglePhoto.bind(this, {id: a.id})} />
                        <Image src={a.photo} />
                        <Button onClick={this.removePhoto.bind(this, {id: a.id})} color='red' icon="remove" content="Remove"/>
                    </div>
                )

        })
        return(
            <div>
                <Image.Group size="small">
                    {photos_components}
                </Image.Group>
                <div>
                    <input
                        className="hidden"
                        onChange={::this.addPhoto}
                        name="photo-upload"
                        type="file"
                        id="photo-upload"/>

                    <Button
                        id="photo-upload-btn"
                        htmlFor="photo-upload"
                        as="label"
                        content='Upload a photo'
                        icon='image'
                        />
                    {addPhotoError && (<Label color="red">{error}</Label>)}
                </div>
            </div>
        )
    }

}
