import React from "react";
import "../../style/CardTutorial.css"
import { AiFillHeart } from "react-icons/ai"
import { BiShow } from "react-icons/bi"
function CardTutorial(props) {
    return (
        <div className="cardTutorial">
            <div style={{display:"flex"}}>
                <div className="cardTutorial-left">
                    <img alt="Anh" src="https://imagew.2dep.vn/wtmnews/637x358/upload/nguyenkhanhlinh/2021/04/02/ha-anh-tuan-ra-mat-mv-khien-khan-gia-lien-tuong-den-thang-tu-la-loi-noi-doi-cua-em-1-1617330063.jpg"></img>
                </div>
                <div className="cardTurotial-right">
                    <div className="cardTurotial-right_title">Tutorial</div>
                    <div className="cardTurotial-right_des">A tutorial video Motion Trend. Let"s Learn Motion TRends</div>
                    <div className="cardTurotial-right_interac">
                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                <AiFillHeart></AiFillHeart>
                                <span style={{ marginLeft: "2px" }}>4</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "8px" }}>
                                <BiShow></BiShow>
                                <span style={{ marginLeft: "2px" }}>4</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CardTutorial;