//import React , {useState} from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    let myStyle = {
      color: props.mode === 'dark' ? 'white' : '#042743',
      backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white', border: '2px solid',
      borderColor: props.mode === 'dark'?'#042743':'white'
    }
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>
    //    {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
  return (
    <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
    <h1 className="my-3">About Us</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtil is a free character counter tool that provides instant character
              and word count statistics for a given text. TextUtils reports the number of
              words and characters. Thus it is suitable for writing text with a
              character counter. This is useful for writing text with a character
              limit. It also has a word counter that tells you how many words you have
              used. You can also use this tool to count the number of characters in
              your text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtil is Free to use character counter tool. It provides instant
              character count statistics for any given text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtil is compatible with all browsers, including Chrome, Firefox,
              Internet Explorer, Safari, Opera. It is a perfect character counter tool.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
      <button onClick = {toggleStyle} type = "button" className=" btn btn-success my-2 mx-2">{btnText}</button>
      </div> */}
    </div>
  );
}
