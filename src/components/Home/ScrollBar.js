import React, { useRef, useState, useEffect } from 'react';
import '../../style/ScrollBar.css'
function ScrollBar(props) {
    const [selected, setSelected] = useState('Editing');

    const list = [
        'Editing',
        'Camera Action, Angleăc',
        'Sound, Beat',
        'Graphical',
        'Car',
        'Gun',
        'Motion',
        'Trend',
        'Experimental',
    ]
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
        <div style={{ position: 'relative' }}>
            <ul ref={scrollRef} onScroll={scrollCheck} className='scroll-bar'>
                {
                    list.map((value, key) => (
                        <li onClick={() => {setSelected(value)}} key={key} className={`scroll-bar_item ${selected === value && 'select' }`}>{value}</li>
                    ))
                }
            </ul>
            {scrollX !== 0 && (
                <div onClick={() => slide(-200)} className='background-btn-prev'>
                    <div style={{ position: 'relative' }}>
                        <div className='btn-prev'>
                        </div>
                    </div>
                </div>
            )}
            {!scrolEnd && (
                <div onClick={() => slide(200)} className='background-btn-next'>
                    <div className='btn-next'>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ScrollBar;