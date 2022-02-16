import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!','success');

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!','success');

    }

    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Exrta spaces removed!','success');
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied!','success');

    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared!','success');

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter text here');

    return (<><div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
    </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summery</h1>
            <p>{text.trim().split(" ").filter((w) => w !== "").length} words and {text.length} Characters</p>
            <p>{0.008 * text.trim().split(" ").filter((w) => w !== "").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter some text to preview it here"}</p>
        </div>
    </>
    )
}
