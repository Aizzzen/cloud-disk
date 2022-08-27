import React from 'react';
import './Uploader.scss';
import UploadFile from "./UploadFile";
import {useDispatch} from "react-redux";
import {hideUpLoader} from "../../store/reducers/uploadReducer";
import {filesUpload, isVisible} from "../../store/selectors/selectors";

const Uploader = () => {
    const dispatch = useDispatch()

    return ( isVisible &&
        <div className='uploader'>
            <div className="uploader__header">
                <div className="uploader__title">Downloads</div>
                <button className="uploader__close" onClick={() => dispatch(hideUpLoader())}>x</button>
            </div>
            {filesUpload.map(file =>
                <UploadFile key={file.id} file={file} />
            )}
        </div>
    );
};

export default Uploader;
