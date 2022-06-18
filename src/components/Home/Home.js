import React, { useState, useEffect, useRef } from 'react';
import '../../style/Home.css'
import '../../style/grid.css'
import Card from './Card'
import Tutorial from './Tutorial';
import ModalDetail from '../ModalDetails/ModalDetail';
function Home(props) {
    const refLoading = useRef()
    const n = 20
    const [isShowModalDetail, setIsModalDetail] = useState(false)
    const [loadMore, setLoadMore] = useState(true);
    const [currentList, setCurrentList] = useState(0);
    useEffect(() => {
        if (loadMore === true) {
            setCurrentList(oldState => oldState += 20)
        }
        setLoadMore(false);
    }, [loadMore])

    useEffect(() => {
        const handleScroll = (e) => {
            if (window.scrollY + window.innerHeight >= refLoading.current.clientHeight + refLoading.current.offsetTop) {
                setLoadMore(true);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);



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
                                return (<Card key={i} showModal={setIsModalDetail} isImportant={true}></Card>)
                            } else {
                                return (<Card key={i} showModal={setIsModalDetail} isImportant={false}></Card>)
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
                                return (<Card key={i} showModal={setIsModalDetail} isImportant={true}></Card>)
                            } else {
                                return (<Card key={i} showModal={setIsModalDetail} isImportant={false}></Card>)
                            }
                        })
                    }
                    {
                        [...Array(currentList)].map((e, i) => {
                            if (i % 2 === 0) {
                                return (<Card key={i} showModal={setIsModalDetail} isImportant={true}></Card>)
                            } else {
                                return (<Card key={i} showModal={setIsModalDetail} isImportant={false}></Card>)
                            }
                        })
                    }
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }} ref={refLoading} class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </>
    );
}

export default Home;