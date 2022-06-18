import React from 'react';
import '../../style/Home.css'
import { AiFillHeart } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
function Card(props) {
    return (
        <div onClick={() => {props.showModal(true)}} className='col col-1-5'>
            <div className='card'>
                <div className='content'>
                    <img src='https://hacoled.com/wp-content/uploads/2022/01/anh-2-may-tinh-800x450.jpg' alt='Ảnh đẹp'></img>
                    {
                        props.isImportant && (
                            <>
                                <div className='content-title'>
                                    This is the space that contains the videos so important
                                </div>
                                <div className='content-time'>02:33</div>
                                <div className='content-banner'> TZ</div>
                            </>
                        )
                    }
                    <div className='content-footer'>
                        <div className='content-name'>
                            <img className='content-name__avatar' alt='Avatar' src='https://i.pinimg.com/236x/6f/47/fb/6f47fbc7e0b54f3b4037de05741e689c.jpg'></img>
                            <div className='content-name__name'>Kim Aeyong</div>
                        </div>
                        <div className='content-interac'>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <AiFillHeart></AiFillHeart>
                                <span style={{ marginLeft: '2px' }}>4</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '8px' }}>
                                <BiShow></BiShow>
                                <span style={{ marginLeft: '2px' }}>4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;