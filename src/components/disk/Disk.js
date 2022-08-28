/* eslint-disable */
import React, {useEffect, useState} from 'react';
import './Disk.scss'
import {useDispatch, useSelector} from "react-redux";
import {getFiles, uploadFile} from "../../actions/file";
import FileList from "./fileList/FileList";
import Popup from "./Popup";
import {setCurrentDir, setFileView, setPopupDisplay} from "../../store/reducers/fileReducer";
import Uploader from "../uploader/Uploader";

const Disk = () => {
    const currentDir = useSelector(state => state.file.currentDir)
    const dirStack = useSelector(state => state.file.dirStack)
    const loader = useSelector(state => state.app.loader)
    const dispatch = useDispatch()
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }

    function dragEnterHandler(event) {
        // иначе при перетаксивании файлов браузер будет их просто открывать
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    if(loader === true) {
        return (
            <div className='loader'>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return (
            !dragEnter ?
            <div data-testid='disk-page' className='disk' onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <div className="disk__btns">
                    <button className="disk__back" onClick={() => backClickHandler()}>Back</button>
                    <button className="disk__create" onClick={() => showPopupHandler()}>Create dir</button>
                    <div className="disk__upload">
                        <label htmlFor="disk__upload-input" className="disk__upload-label">Upload file</label>
                        <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                    </div>
                    <div className='disk__select'>
                        Sorted by:
                        <select value={sort}
                                onChange={(e) => setSort(e.target.value)}
                        >
                            <option value='name'>Name</option>
                            <option value='type'>Type</option>
                            <option value='date'>Date</option>
                        </select>
                    </div>
                    <button className="disk__plate" onClick={() => dispatch(setFileView('plate'))}/>
                    <button className="disk__list" onClick={() => dispatch(setFileView('list'))}/>
                </div>
                <FileList />
                <Popup />
                <Uploader />
            </div>
            :
            <div className='drop-area' onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Drag files here
            </div>
    );
};

export default Disk;
