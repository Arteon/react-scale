import {

    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,
    ADD_PHOTO_FAIL,
    ADD_PHOTO_SUCCESS,
    REMOVE_PHOTO_FAIL,
    REMOVE_PHOTO_SUCCESS,

    GET_VIDEOS_SUCCESS,
    GET_VIDEOS_FAIL,
    ADD_VIDEO_SUCCESS,
    ADD_VIDEO_FAIL,
    REMOVE_VIDEO_SUCCESS,
    REMOVE_VIDEO_FAIL,

    GET_AUDIOS_FAIL,
    GET_AUDIOS_SUCCESS,
    ADD_AUDIO_SUCCESS,
    ADD_AUDIO_FAIL,
    REMOVE_AUDIO_SUCCESS,
    REMOVE_AUDIO_FAIL,

    LOCATION_CHANGE
} from 'shared_module/actions'

const initialState = {
    addPhotoError: false,
    addVideoError: false,
    addAudioError: false
}

export function media(state = initialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {}
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.result.results
            }
        case GET_PHOTOS_FAIL:
            return {
                ...state,
                error: action.error
            }
        case ADD_PHOTO_SUCCESS:
            {
                return {
                    ...state,
                    photos: [action.result].concat(state.photos)
                }
            }
        case ADD_PHOTO_FAIL:
            return {
                ...state,
                ...initialState,
                error: action.error,
                addPhotoError: true
            }
        case REMOVE_PHOTO_SUCCESS:
            {
                return {
                    ...state,
                    photos: state.photos.filter(obj => action.result!==obj.id)
                }
            }
        case REMOVE_PHOTO_FAIL:
            return {
                ...state,
                ...initialState,
                error: action.error
                // removePhotoError: true - not neccessary cause error handled inside component
            }
        case GET_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.result.results
            }
        case ADD_VIDEO_SUCCESS:
            {
                return {
                    ...state,
                    videos: state.videos.concat([action.result])
                }
            }
        case ADD_VIDEO_FAIL:
            return {
                ...state,
                ...initialState,
                error: action.error,
                addVideoError: true
            }
        case REMOVE_VIDEO_SUCCESS:
            {
                return {
                    ...state,
                    videos: state.videos.filter(obj => action.result !== obj.id)
                }
            }
        case GET_AUDIOS_SUCCESS:
            return {
                ...state,
                audios: action.result.results
            }
        case ADD_AUDIO_SUCCESS:
            {
                return {
                    ...state,
                    audios: state.audios.concat([action.result])
                }
            }
        case ADD_AUDIO_FAIL:
            {
                return {
                    ...state,
                    ...initialState,
                    error: action.error,
                    addAudioError: true
                }
            }

        case REMOVE_AUDIO_SUCCESS:
            {
                return {
                    ...state,
                    audios: state.audios.filter(obj => action.result !== obj.id)
                }
            }
        default:
            return state
    }
}
