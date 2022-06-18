import React from "react";
import Comment from "./Comment";
import { BsArrowRight } from "react-icons/bs"
import { AiOutlineArrowDown } from "react-icons/ai"

function ListComments(props) {
    return (
        <div className="modal-detail-footer__comment">
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Comments</div>
            <div style={{ marginBottom: "40px", width: "90%", border: "1px solid black", height: "40px", display: "flex", alignItems: "center" }}>
                <input placeholder="Write a comment now..." style={{ width: "80%", border: "none", outline: "none", paddingLeft: "30px" }}></input>
                <div style={{ fontSize: "30px", height: "100%", width: "20%", backgroundColor: "black", color: "white", border: "1px solid black", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>
                    <BsArrowRight></BsArrowRight>
                </div>
            </div>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <div style={{ cursor: "pointer", borderBottom: "1px solid #d9dada", width: "90%" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", lineHeight: "20px", marginRight: "5px", padding: "4px 10px", fontWeight: "600", color: "black", border: "2px solid black" }}>
                    <div style={{ marginRight: "10px" }}>More comments</div>
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                </div>
            </div>
        </div>
    );
}

export default ListComments;