import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'
import { FaCommentAlt } from 'react-icons/fa'
import { AiOutlineStop } from 'react-icons/ai'

function ProfileUser(props) {
    return (
        <div className='modal-detail-footer__skill-user'>
            <div style={{ borderBottom: '1px solid #d9dada', paddingLeft: '40px' }}>
                <div style={{ color: '#d9dada', fontSize: '12px' }}>Owner</div>
                <div style={{ display: 'flex', marginTop: '10px', paddingBottom: '40px' }}>
                    <img alt='Anh' style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '40px', width: '40px', borderRadius: '50%' }} src='https://i.pinimg.com/736x/5d/d7/a4/5dd7a48ee00eb62a26f0298e873cfe68.jpg'></img>
                    <div style={{ marginLeft: '10px' }}>
                        <div style={{ lineHeight: '20px', fontWeight: '700' }}>Kim Aeyong</div>
                        <div style={{ lineHeight: '20px', display: 'flex', color: 'var(--grey-color)', justifyContent: 'center', alignItems: 'center' }}>
                            <TiLocation></TiLocation>
                            <div style={{ marginLeft: '10px' }}>Korea, Republic of</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #d9dada', padding: '40px' }}>
                <div style={{ lineHeight: '20px', fontWeight: '700' }}>The frist postfolio movement</div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AiFillHeart></AiFillHeart>
                        <span style={{ marginLeft: '2px' }}>18</span>
                    </div>
                    <div style={{ marginLeft: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BiShow></BiShow>
                        <span style={{ marginLeft: '2px' }}>18</span>
                    </div>
                    <div style={{ marginLeft: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FaCommentAlt></FaCommentAlt>
                        <span style={{ marginLeft: '2px' }}>3</span>
                    </div>
                </div>
                <div style={{ color: '#d9dada' }}>Publishing date: 2020.10.15</div>
            </div>
            <div style={{ borderBottom: '1px solid #d9dada', padding: '40px' }}>
                <div style={{ color: '#d9dada', fontSize: '12px' }}>Creative field</div>
                <div style={{ display: 'flex', marginTop: '10px', flexWrap: 'wrap' }}>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', backgroundColor: 'var(--maroon-70pc)', color: 'var(--peach)' }}>Premiere</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', backgroundColor: 'var(--blue-photoshop)', color: 'var(--maroon-30pc)' }}>Photoshop</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', backgroundColor: 'var(--organe-background)', color: 'var(--orange)' }}>Illustrator</div>
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #d9dada', padding: '40px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Eating</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Camera action, Angle</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Sound, Beat</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Graphical</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Experimental</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Experimental</div>
                    <div style={{ marginBottom: '5px', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: '#ff7984', border: '2px solid #ff7984' }}>Experimental</div>
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #d9dada', padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', lineHeight: '20px', marginRight: '5px', padding: '4px 10px', fontWeight: '600', color: 'black', border: '2px solid black' }}>
                    <AiOutlineStop></AiOutlineStop>
                    <div style={{ marginLeft: '10px' }}>Report</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;