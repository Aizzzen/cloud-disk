import React from 'react';
import './Profile.scss';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";

const Profile = () => {
    const dispatch = useDispatch()

    function changeAvatarHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div data-testid='profile-page'>
            <button onClick={() => dispatch(deleteAvatar())}>Delete avatar</button>
            <input accept='image/*' onChange={(e) => changeAvatarHandler(e)} type="file" placeholder='Download avatar'/>
        </div>
    );
};

export default Profile;
