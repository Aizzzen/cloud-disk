import React, {useEffect} from 'react';
import './AppContainer.scss';
import Navbar from "../components/navbar/Navbar";
import {Navigate, Route, Routes} from "react-router-dom";
import Registration from "../components/registration/Registration";
import Login from "../components/registration/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from "../components/disk/Disk";
import Profile from "../components/profile/Profile";
import {isAuth} from "../store/selectors/selectors";

const AppContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())
  }, [])

  return (
    <div className='app'>
        <Navbar/>
        <div className="wrap">
            {!isAuth ?
                <Routes>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<Navigate to='/login' replace />}/>
                </Routes>
                :
                <Routes>
                    <Route exact path='/' element={<Disk/>}/>
                    <Route exact path='/profile' element={<Profile/>}/>
                    <Route path='*' element={<Navigate to='/' replace />}/>
                </Routes>
            }
        </div>
    </div>
  );
}

export default AppContainer;
