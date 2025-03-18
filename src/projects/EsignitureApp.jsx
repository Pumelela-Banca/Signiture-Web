import Title from "../components/signitureApp/Title";
import React from "react";

export default function EsignitureApp() {
    const inputStyle = {
        padding: "10px",
        margin: "10px",
        width: "50%",
        border: "1px solid #ccc",
        borderRadius: "5px"
    }
    document.body.style.backgroundColor = "#f0f0f0";
    return (
        <div>
        <Title 
        text={"E-Signiture App"}
        classes={"text-center"}
        />
        <footer className="d-flex justify-content-center" style={{
            marginTop: "50px",
            padding: "10px",
            position: "fixed",
            bottom: "0",
            width: "100%",}}>
            <input type="date" value={""} style={inputStyle}/>
            <input type="text" value={""} style={inputStyle}/>
        </footer>
        </div>
    );

}