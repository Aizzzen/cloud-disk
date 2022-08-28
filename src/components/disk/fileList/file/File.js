import React from 'react';
import './File.scss'
import dirLogo from '../../../../assets/images/dir.svg'
import fileLogo from '../../../../assets/images/file.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../store/reducers/fileReducer";
import {deleteFile, downloadFile} from "../../../../actions/file";
import sizeFormat from "../../../../utils/sizeFormat";

const File = ({file}) => {
    const currentDir = useSelector(state => state.file.currentDir)
    const fileView = useSelector(state => state.file.view)
    const dispatch = useDispatch()

    function openDirHandler(file) {
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }

    function downloadClickHandler(event) {
        event.stopPropagation()
        downloadFile(file)
    }

    function deleteClickHandler(event) {
        event.stopPropagation()
        dispatch(deleteFile(file))
    }

    if(fileView === 'list') {
        return (
            <div className='file' onClick={() => openDirHandler(file)}>
                <img data-testid='file-image' src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
                <div data-testid='file-name' className="file__name">{file.name}</div>
                <div className="file__date">{file.date.slice(0, 10)}</div>
                <div className="file__size">{sizeFormat(file.size)}</div>
                {file.type !== 'dir' &&
                <button data-testid='download-btn' onClick={(event) => downloadClickHandler(event)} className='file__btn file__download'>Download</button>}
                <button data-testid='delete-btn' onClick={(event) => deleteClickHandler(event)} className='file__btn file__delete'>Delete</button>
            </div>
        );
    }

    if(fileView === 'plate') {
        return (
            <div className='file-plate' onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file-plate__img"/>
                <div className="file-plate__name">{file.name}</div>
                <div className="file-plate__btns">
                    {file.type !== 'dir' &&
                    <button onClick={(event) => downloadClickHandler(event)} className='file-plate__btn file__download'>Download</button>}
                    <button onClick={(event) => deleteClickHandler(event)} className='file-plate__btn file__delete'>Delete</button>
                </div>
            </div>
        );
    }

};

export default File;
