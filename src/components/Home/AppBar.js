import React, { useRef } from 'react';
import '../../style/AppBar.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'
function AppBar(props) {
    const refModalUser = useRef()
    const refModalTitle = useRef()
    const handleClickModalLogin = (e) => {
        refModalUser.current.style.display = refModalUser.current.style.display === 'flex' ?  'none' : 'flex'
    }

    const handleClickModalTitle = (e) => {
        refModalTitle.current.style.display = refModalTitle.current.style.display === 'flex' ?  'none' : 'flex'
    }
    return (
        <div className='app-bar'>
            <div  className='app-bar_title'>
                <div className='app-bar_name' style={{ display: 'flex' }}>
                    <div  onClick={handleClickModalTitle} className='mobile-menu-icon' style={{ fontSize: '30px', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>
                        <FiMenu />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='app-bar_line red'></div>
                        <div className='app-bar_line white rotate-135'></div>
                        <div className='app-bar_line red rotate-135'></div>
                        <div className='app-bar_line white'></div>
                    </div>
                    <div ref={refModalTitle} className='modal-login left'>
                        <div className='modal-login-name' style={{ letterSpacing: '3px', marginLeft: '10px' }}>
                            MOTIONTREND
                        </div>
                        <div onClick={handleClickModalTitle} className='app-bar__link'>
                            Discover
                        </div>
                        <div onClick={handleClickModalTitle} className='app-bar__link'>
                            Job
                        </div>
                    </div>

                </div>
            </div>
            <div className='app-bar_input'>
                <input placeholder='Search for motion trend...' type={'text'}></input>
            </div>
            <div className='app-bar_user'>
                <AiOutlineSearch className='icon'></AiOutlineSearch>
                <div onClick={handleClickModalLogin} className='mobile-menu-icon' style={{ fontSize: '22px', justifyContent: 'center', alignItems: 'center', marginLeft: '15px' }}>
                    <FaUserCircle />
                </div>
                <div ref={refModalUser} className='modal-login right'>
                    <div onClick={handleClickModalLogin} className='app-bar__link'>
                        Login
                    </div>
                    <div onClick={handleClickModalLogin} className='app-bar__link'>
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppBar;