import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../store/reducers/fileReducer";
import {createDir} from "../../actions/file";

const Popup = () => {
    const currentDir = useSelector(state => state.file.currentDir)
    const popupDisplay = useSelector(state => state.file.popupDisplay)
    const [dirName, setDirName] = useState('')
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        setDirName('')
        dispatch(setPopupDisplay('none'))
    }

    return (
        <div className='popup' onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                <div className="popup__header">
                    <div className="popup__title">Create dir</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>x</button>
                </div>
                <Input type='text' placeholder='Enter dir name' value={dirName} setValue={setDirName} />
                <button className="popup__create" onClick={() => createHandler()}>Create</button>
            </div>
        </div>
    );
};

export default Popup;
