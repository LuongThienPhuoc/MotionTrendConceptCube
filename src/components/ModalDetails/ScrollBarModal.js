import React, { useRef, useState, useEffect } from 'react';
import '../../style/ScrollBar.css'
import Card from '../Home/Card';
function ScrollBarModal(props) {
    const scrollRef = useRef()
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    const scrollCheck = () => {
        setscrollX(scrollRef.current.scrollLeft);
        if (
            Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
            scrollRef.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    const slide = (shift) => {
        scrollRef.current.scrollLeft += shift;
    };

    useEffect(() => {
        if (
            scrollRef.current &&
            scrollRef?.current?.scrollWidth === scrollRef?.current?.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
        return () => { };
    }, [scrollRef?.current?.scrollWidth, scrollRef?.current?.offsetWidth]);

    return (
        <div style={{ backgroundColor: 'var(--warm-gray)', padding: ' 30px 50px', margin:'0 -40px' }}>
            <div style={{ display: 'flex', marginTop: '10px',  alignItems:'center' }}>
                <img alt='Anh' style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '40px', width: '40px', borderRadius: '50%' }} src='https://i.pinimg.com/736x/5d/d7/a4/5dd7a48ee00eb62a26f0298e873cfe68.jpg'></img>
                <div style={{ lineHeight: '20px', fontWeight: '700', marginLeft:'15px' }}>Kim Aeyong</div>
            </div>
            <div style={{ position: 'relative' }}>
                <ul ref={scrollRef} onScroll={scrollCheck} className='scroll-bar'>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </ul>
                {scrollX !== 0 && (
                    <div onClick={() => slide(-200)} style={{ color: 'white', backgroundColor: 'black', left: '-10px', top: '40%' }} className='background-btn-prev'>
                        <div style={{ position: 'relative' }}>
                            <div className='btn-prev'>
                            </div>
                        </div>
                    </div>
                )}
                {!scrolEnd && (
                    <div onClick={() => slide(200)} style={{ color: 'white', backgroundColor: 'black', right: '-10px', top: '40%' }} className='background-btn-next'>
                        <div className='btn-next'>
                        </div>
                    </div>
                )}

            </div>
        </div>

    );
}

export default ScrollBarModal;