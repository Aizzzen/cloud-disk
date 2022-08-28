/* eslint-disable */
const initialState = {
    isVisible: false,
    files: []
}

export default function uploadReducer(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_UPLOADER':
            return {
                ...state,
                isVisible: true
            }
            // isVisible: true
        case 'HIDE_UPLOADER':
            return {
                ...state,
                isVisible: false
            }
            // isVisible: false
        case 'ADD_UPLOAD_FILE':
            return {
                ...state,
                files: [...state.files, { ...action.payload }]
            }
            // добавление файла
        case 'REMOVE_UPLOAD_FILE':
            return {
                ...state,
                files: [...state.files.filter(file => file.id != action.payload)]
            }
            // удаление файла
        case 'CHANGE_UPLOAD_FILE':
            return {
                ...state,
                files: [...state.files.map(file => file.id == action.payload.id
                    ? { ...file, progress: action.payload.progress }
                    : { ...file }
                )]
            }
            // изменение процента загрузки
        default:
            return state
    }
}

export const showUpLoader = () => ({ type: 'SHOW_UPLOADER' })
export const hideUpLoader = () => ({ type: 'HIDE_UPLOADER' })
export const addUploadFile = file => ({ type: 'ADD_UPLOAD_FILE', payload: file })
export const removeUploadFile = fileId => ({ type: 'REMOVE_UPLOAD_FILE', payload: fileId })
export const changeUploadFile = payload => ({ type: 'CHANGE_UPLOAD_FILE', payload })
