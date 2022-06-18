import React from 'react';
import '../../style/ModalDetail.css'
import { AiFillHeart, AiOutlineUser, AiOutlineHeart, AiOutlineFolderAdd } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import Button from './Button';

function ModalIntroduce(props) {
    return (
        <>
            <div style={{ backgroundColor: '#f4f4f4', height: '1px', marginBottom: '30px' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '500', flexDirection: 'column' }}>
                <div style={{ fontSize: '20px' }}>The first portfolio movement</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AiFillHeart></AiFillHeart>
                        <span style={{ marginLeft: '2px' }}>1,688</span>
                    </div>
                    <div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BiShow></BiShow>
                        <span style={{ marginLeft: '2px' }}>18,178</span>
                    </div>
                    <div style={{ marginLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AiOutlineUser></AiOutlineUser>
                        <span style={{ marginLeft: '2px' }}>332</span>
                    </div>
                </div>
                <div style={{ fontSize: '11px', color: '#d9dada', marginTop: '10px' }}>Publishing date: 2020.10.5</div>
                <div style={{ display: 'flex', marginBottom: '40px', marginTop:'20px' }}>
                    <Button content={'Like'} icon={<AiOutlineHeart></AiOutlineHeart>}></Button>
                    <Button isBlack={true} content={'Add'} icon={<AiOutlineFolderAdd></AiOutlineFolderAdd>}></Button>
                </div>
            </div>
        </>
    );
}

export default ModalIntroduce;