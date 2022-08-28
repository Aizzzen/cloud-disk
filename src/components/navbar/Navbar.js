/* eslint-disable */
import React, {useState} from 'react';
import './Navbar.scss';
import Logo from '../../assets/images/navbar-logo.svg';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/reducers/userReducer";
import {getFiles, searchFiles} from "../../actions/file";
import {showLoader} from "../../store/reducers/appReducer";
import avatarLogo from '../../assets/images/avatar.svg';
import {API_URL} from "../../config";

const Navbar = () => {
    const currentDir = useSelector(state => state.file.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const avatar = currentUser?.avatar ? `${API_URL + currentUser?.avatar}` : avatarLogo

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if(searchTimeout != false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if(e.target.value != '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    return (
        <div className='navbar'>
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo"/>
                <div className="navbar__header"><Link data-testid='disk-link' style={{textDecoration: 'none'}} to='/'>YUCloud</Link></div>
                {isAuth && <input
                    value={searchName}
                    onChange={(e) => searchChangeHandler(e)}
                    className='navbar__search'
                    type='text'
                    placeholder='Enter file name'
                />}
                {!isAuth && <div className="navbar__login">
                    <Link data-testid='login-link' style={{textDecoration: 'none'}} to='/login'>Login</Link>
                </div>}
                {!isAuth && <div className="navbar__registration">
                    <Link data-testid='register-link' style={{textDecoration: 'none'}} to='/registration'>Registration</Link>
                </div>}
                {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>
                    Logout
                </div>}
                {isAuth && <Link data-testid='profile-link' to='/profile'>
                    <img className='navbar__avatar' src={avatar} alt='' />
                </Link>}
            </div>
        </div>
    );
};

export default Navbar;
