import React,{useState} from "react";

export default function Textform(props) {
    const [text,setText] = useState("");
    function handleUppercase(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }
    function handlelowercase(){
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerercase","Success");
    }
    function handleClearText(){
        let newText = "";
        setText(newText);
    }
    function handleOnchange(event){
        setText(event.target.value);
    }
    function handleCopyText(){
      const copyText = document.getElementById("userText");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      document.getSelection().removeAllRanges();
    }
  return (
    <>
      <div className="container">
      <div className="mb-3">
        <h1 style={{color: props.mode === "dark"?"white":"black"}}>{props.title}</h1>
        <textarea
          className="form-control"
          id="userText"
          rows="6"
          value={text}
          onChange={handleOnchange}
          style={{backgroundColor: props.mode === "dark"?"#858789":"white"}}
        ></textarea>
      </div>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUppercase}>Convert to Upper-case</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowercase}>Convert to Lower-case</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear</button>
      <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy</button>
    </div>
    <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h2>Text Summary</h2>
        <p>No of words : {text.split(/\s+/).filter(element => {return element.length !==0}).length} </p>
        <p>No of characters : {text.length} </p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Please enter hte text in the above input box" }</p>
    </div>
    </>
  );
}
