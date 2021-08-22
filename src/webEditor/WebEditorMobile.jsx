import { useState } from "react";
import Parser from "html-react-parser";

import "./WebEditorMobile.css";

function WebEditorMobile() {
  let defaultTextState;
  if (localStorage.getItem("textState") === null) {
    console.log("local storage null");
    defaultTextState =
      '<p style="text-align: center;"><strong>Text</strong></p><p style="text-align: left;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>';
  } else {
    defaultTextState = localStorage.getItem("textState");
  }

  const [textState, setTextState] = useState(defaultTextState);

  return (
    <div className="background">
      <div className="frame">{Parser(textState)}</div>
    </div>
  );
}
export default WebEditorMobile;
