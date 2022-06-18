import React, {useState} from 'react';
import '../../style/Home.css'
import '../../style/grid.css'
import Card from './Card'
import Tutorial from './Tutorial';
import ModalDetail from '../ModalDetails/ModalDetail';
function Home(props) {
    const n = 20;
    const [isShowModalDetail, setIsModalDetail] = useState(true)
    return (
        <>
            {
                isShowModalDetail && (
                    <ModalDetail handleClose={setIsModalDetail}></ModalDetail>
                )
            }
            <div className='home' style={{ marginBottom: '20px' }}>
                <div className='row'>
                    {
                        [...Array(n)].map((e, i) => {
                            if (i % 2 === 0) {
                                return (<Card isImportant={true}></Card>)
                            } else {
                                return (<Card isImportant={false}></Card>)
                            }
                        })
                    }
                </div>
            </div>
            <Tutorial></Tutorial>
            <div className='home' style={{ marginBottom: '20px' }}>
                <div className='row'>
                    {
                        [...Array(5)].map((e, i) => {
                            if (i % 2 === 0) {
                                return (<Card isImportant={true}></Card>)
                            } else {
                                return (<Card isImportant={false}></Card>)
                            }
                        })
                    }
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', width:'100%'}} class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    );
}

export default Home;