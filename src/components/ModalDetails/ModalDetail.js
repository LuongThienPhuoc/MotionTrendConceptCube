import React from "react";
import "../../style/ModalDetail.css"
import {AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import ScrollBar from "./ScrollBarModal";
import ModalHeader from "./ModalHeader";
import ModalIntroduce from "./ModalIntroduce";
import ListComments from "./ListComments";
import ProfileUser from "./ProfileUser";
function ModalDetail(props) {
    return (
        <div className="modal-layout">
            <div className="modal-main">
                <div className="modal-tz">TZ</div>
                <div className="modal-hr">HR</div>
                <div style={{ padding: "40px" }}>
                    <ModalHeader></ModalHeader>
                    <ModalIntroduce></ModalIntroduce>
                    <ScrollBar></ScrollBar>
                    <div className="modal-detail-footer">
                        <ListComments></ListComments>
                        <ProfileUser></ProfileUser>
                    </div>
                </div>
            </div>
            <div onClick={() => { props.handleClose(false) }} className="icons-close icons-hover">
                <AiOutlineClose></AiOutlineClose>
            </div>
            <div className="icons-prev icons-hover">
                <AiOutlineLeft></AiOutlineLeft>
            </div>
            <div className="icons-next icons-hover">
                <AiOutlineRight></AiOutlineRight>
            </div>
        </div>
    );
}

export default ModalDetail;