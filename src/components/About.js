import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <h1 className="my-2">About Us</h1>
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              style={myStyle}
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
            class="accordion-collapse collapse show"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              TextUtils gives you a way to anlyze Your text quickly and
              effectively. Be it word count, character count or
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that providers instant
              character count & word count statistics for a given text.
              TextUtils report reports the number of words and characters. Thus
              it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            style={myStyle}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              This word counter software works in any web Browser such as
              chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count character in facebook, blog, excel document, pdf document,
              essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          Enable Dark Mode
        </button>
      </div> */}
    </div>
  );
}
