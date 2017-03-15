import {
    getPhoto_API,
    addPhoto_API,
    removePhoto_API,
    getAudio_API,
    addAudio_API,
    removeAudio_API,
    getVideo_API,
    addVideo_API,
    removeVideo_API,
    resultOK
} from 'shared_module/api';
// PHOTO
export const GET_PHOTOS_FAIL = 'GET_PHOTO_FAIL';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTO_SUCCESS';
export const ADD_PHOTO_FAIL = 'ADD_PHOTO_FAIL';
export const ADD_PHOTO_SUCCESS = 'ADD_PHOTO_SUCCESS';
export const REMOVE_PHOTO_FAIL = 'REMOVE_PHOTO_FAIL';
export const REMOVE_PHOTO_SUCCESS = 'REMOVE_PHOTO_SUCCESS';
// AUDIO
export const GET_AUDIOS_SUCCESS = 'GET_AUDIO_SUCCESS';
export const GET_AUDIOS_FAIL = 'GET_AUDIO_FAIL';
export const ADD_AUDIO_SUCCESS = 'ADD_AUDIO_SUCCESS';
export const ADD_AUDIO_FAIL = 'ADD_AUDIO_FAIL';
export const REMOVE_AUDIO_SUCCESS = 'REMOVE_AUDIO_SUCCESS';
export const REMOVE_AUDIO_FAIL = 'REMOVE_AUDIO_FAIL';
// VIDEO
export const GET_VIDEOS_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEOS_FAIL = 'GET_VIDEO_FAIL';
export const ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS';
export const ADD_VIDEO_FAIL = 'ADD_VIDEO_FAIL';
export const REMOVE_VIDEO_SUCCESS = 'REMOVE_VIDEO_SUCCESS';
export const REMOVE_VIDEO_FAIL = 'REMOVE_VIDEO_FAIL';


export const GET_PHOTOS = () => {
    return async function() {
        let result = await getPhoto_API()
        if (!resultOK(result)) {
            return {type: GET_PHOTOS_FAIL, error: "Sorry, couldn't load photos"}
        }
        return {type: GET_PHOTOS_SUCCESS, result: result.data}
    }
}

// file
export const ADD_PHOTO = (file) => {
    return async function() {
        let data = new FormData()
        console.log(file)
        data.append('photo', file)
        console.log('form data photo:', data.getAll('photo'))
        let result = await addPhoto_API(data)
        if (!resultOK(result)) {
            return {type: ADD_PHOTO_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: ADD_PHOTO_SUCCESS, result: result.data}
    }
}

export const REMOVE_PHOTO = (id) => {
    return async function() {
        let result = await removePhoto_API(id)
        if (!resultOK(result)) {
            return {type: REMOVE_PHOTO_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: REMOVE_PHOTO_SUCCESS, result: id}
    }
}


export const GET_VIDEOS = () => {
    return async function() {
        let result = await getVideo_API()
        if (!resultOK(result)) {
            return {type: GET_VIDEOS_FAIL, error: "Sorry, couldn't load videos"}
        }
        return {type: GET_VIDEOS_SUCCESS, result: result.data}
    }

}

// @string, youtube url
export const ADD_VIDEO = (url) => {
    //parse url
    let data = {}

    let ytRegExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let vmRegExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
    let ytMatch = url.match(ytRegExp);
    let vmMatch = url.match(vmRegExp);
    if (ytMatch && ytMatch[1].length === 11){
        data.video_type = 'yt'
        data.video = ytMatch[1]
    } else if(vmMatch && vmMatch[5]){
        data.video_type = 'vm'
        data.video = vmMatch[5]
    } else {
        return {type: ADD_VIDEO_FAIL, error: 'Sorry, this video url is not supported'}
    }

    //dispatch fail if failed
    return async function() {
        let result = await addVideo_API(data)
        if (!resultOK(result)) {
            return {type: ADD_VIDEO_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: ADD_VIDEO_SUCCESS, result: result.data}
    }
}


export const REMOVE_VIDEO = (id) => {
    return async function() {
        let result = await removeVideo_API(id)
        if (!resultOK(result)) {
            return {type: REMOVE_VIDEO_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: REMOVE_VIDEO_SUCCESS, result: id}
    }
}


export const GET_AUDIOS = () => {
    return async function() {
        let result = await getAudio_API()
        if (!resultOK(result)) {
            return {type: GET_AUDIOS_FAIL, error: "Sorry, couldn't load photos"}
        }
        return {type: GET_AUDIOS_SUCCESS, result: result.data}
    }

}
// file
export const ADD_AUDIO = (file) => {
    return async function() {
        let data = new FormData()
        data.append('rec', file)
        let result = await addAudio_API(data)
        if (!resultOK(result)) {
            return {type: ADD_AUDIO_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: ADD_AUDIO_SUCCESS, result: result.data}
    }
}

export const REMOVE_AUDIO = (id) => {
    return async function() {
        let result = await removeAudio_API(id)
        if (!resultOK(result)) {
            return {type: REMOVE_AUDIO_FAIL, error: 'Sorry, error occured.'}
        }
        return {type: REMOVE_AUDIO_SUCCESS, result: id}
    }
}
