import React, { useState } from "react";
import { AiOutlineStop, AiOutlineClose } from "react-icons/ai"
function Comment(props) {
    const [isShow, setIsShow] = useState(false)
    const handleMouseEnter = () => {
        setIsShow(true)
    }

    const handleMouseLeave = () => {
        setIsShow(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ width: "90%", marginBottom: "30px", position: "relative" }}>
            <div style={{ display: "flex" }}>
                <img alt="Anh" style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain", height: "40px", width: "40px", borderRadius: "50%" }} src="https://i.pinimg.com/736x/5d/d7/a4/5dd7a48ee00eb62a26f0298e873cfe68.jpg"></img>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}>
                    <div style={{ lineHeight: "20px", fontWeight: "700" }}>Kim Aeyong</div>
                    <div style={{ lineHeight: "20px", display: "flex", color: "var(--grey-color)", justifyContent: "center", alignItems: "center" }}>
                        <div >Korea, Republic of</div>
                    </div>
                </div>
            </div>
            <div style={{ fontSize: "11px", color: "var(--grey-color)", lineHeight: "20px", marginTop: "10px" }}>
                Ammazzing work  you have been here  feels like an
                Hello i"am  Kim  Aeyong. This is my first portfolio movement. Thanks you very much
            </div>
            {isShow && (
                <div style={{ position: "absolute", display: "flex", right: "10px", top: "10px", cursor: "pointer", color: "#6d6d6d" }}>
                    <AiOutlineClose></AiOutlineClose>
                    <AiOutlineStop style={{ marginLeft: "10px" }}></AiOutlineStop>
                </div>
            )}

        </div>
    );
}

export default Comment;