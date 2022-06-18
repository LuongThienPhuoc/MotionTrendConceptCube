import React from 'react';
import '../../style/Tutorial.css'
import '../../style/grid.css'
import CardTutorial from './CardTutorial';
function Tutorial(props) {
    return (
        <div className='tutorial grid' style={{marginBottom: '20px'}}>
            <div className='row'>
                <div className='col-tutorial col'>
                    <div className='tutorial-title'>
                        TUTORIAL
                    </div>
                    <div className='tutorial-des'>
                        Let's look at 7 ways to use motion trend more effectively in the first tutorial
                    </div>
                    <div className='tutorial-btn'>WATCH NOW</div>
                </div>
                <div className='col-tutorial col'>
                    <div  style={{ position: 'relative', display:'flex', justifyContent: 'center' }}>
                        <img className='tutorial-img' src='https://imagew.2dep.vn/wtmnews/637x358/upload/nguyenkhanhlinh/2021/04/02/ha-anh-tuan-ra-mat-mv-khien-khan-gia-lien-tuong-den-thang-tu-la-loi-noi-doi-cua-em-1-1617330063.jpg' alt='Anh MV'></img>
                        <div className='tutorial-live'>LIVE</div>
                        <div className='tutorial-play'>
                        </div>
                        <div className='tutorial-time'>02:33</div>
                    </div>
                </div>
                <div className='col-tutorial col'>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginTop: '10px' }}>
                        <CardTutorial></CardTutorial>
                        <CardTutorial></CardTutorial>
                        <CardTutorial></CardTutorial>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;