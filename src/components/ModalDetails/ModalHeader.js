import React from "react";
import Button from "./Button";
import "../../style/ModalDetail.css"
import { AiOutlineHeart, AiOutlineUser, AiOutlineFolderAdd } from "react-icons/ai"
function ModalHeader(props) {
    return (
        <>
            <div className="info-user">
                <div className="info-user-right">
                    <img alt="Anh" src="https://i.pinimg.com/736x/5d/d7/a4/5dd7a48ee00eb62a26f0298e873cfe68.jpg"></img>
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}>
                        <div style={{ fontSize: "18px", fontWeight: "600" }}>The first portfolio movement</div>
                        <div style={{ fontSize: "11px" }}>Kim Aeyong <span style={{ marginLeft: "15px", color: "var(--grey-color)" }}>Design, Music Video, Advertising</span></div>
                        <div style={{ display: "flex" }}>
                            <Button content={"Like"} icon={<AiOutlineHeart></AiOutlineHeart>}></Button>
                            <Button isBlack={true} content={"Follow"} icon={<AiOutlineUser></AiOutlineUser>}></Button>
                            <Button isBlack={true} content={"Add"} icon={<AiOutlineFolderAdd></AiOutlineFolderAdd>}></Button>
                        </div>
                    </div>
                </div>
                <div className="info-user_btn">Edit project</div>
            </div>
            <div style={{ backgroundColor: "#f4f4f4", height: "1px", marginBottom: "30px" }}></div>
            <iframe className="modal-detail-video" src="https://www.youtube.com/embed/lxFmeBhoA1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <div className="modal-des">
                Hello i"am  Kim  Aeyong. This is my first portfolio movement. Thanks you very much
                Hello i"am  Kim  Aeyong. This is my first portfolio movement. Thanks you very much
                Hello i"am  Kim  Aeyong. This is my first portfolio movement. Thanks you very much
                Hello i"am  Kim  Aeyong. This is my first portfolio movement. Thanks you very much
                Hello i"am  Kim  Aeyong. This is my first portfolio movement. Thanks you very much
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img alt="ảnh" className="modal-img" src="https://kenh14cdn.com/2020/1/21/photo-1-1579579024548874481855.jpg"></img>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img alt="ảnh" className="modal-img" src="https://kenh14cdn.com/2020/1/21/photo-1-1579579024548874481855.jpg"></img>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img alt="ảnh" className="modal-img" src="https://kenh14cdn.com/2020/1/21/photo-1-1579579024548874481855.jpg"></img>
            </div>
        </>
    );
}

export default ModalHeader;