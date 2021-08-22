import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Parser from "html-react-parser";
import { useHistory } from "react-router-dom";

import "./WebEditorDesktop.css";
import imgFrame2 from "../assets/img/Group 1.png";
import imgUp from "../assets/img/Shape.png";
import imgDown from "../assets/img/Shape2.png";
import imgRight from "../assets/img/Shape right.png";

const WebEditor = () => {
  let history = useHistory();

  let defaultTextState;
  if (localStorage.getItem("textState") === null) {
    console.log("local storage null");
    defaultTextState =
      '<p style="text-align: center;"><strong>Text</strong></p><p style="text-align: left;">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>';
  } else {
    defaultTextState = localStorage.getItem("textState");
  }

  const [textState, setTextState] = useState(defaultTextState);
  const onChangeTextState = (content, editor) => {
    console.log("Content was updated:", content);
    setTextState(content);
    localStorage.setItem("textState", textState);
  };

  const [showContent, setShowContent] = useState({
    visibility: "visible",
    img: imgUp,
  });
  const onClickShowContent = () => {
    if (showContent.visibility === "visible") {
      setShowContent({ visibility: "hidden", img: imgDown });
    } else {
      setShowContent({ visibility: "visible", img: imgUp });
    }
  };

  const onClickPublish = () => {
    history.push("/result");
  };

  return (
    <div className="gridContainer">
      <div className="gridItem1">
        <h1 className="title">Customisation</h1>
        <p className="description">The text will reflect mobile view</p>
        <button type="button" onClick={onClickShowContent} class="collapsible">
          <div class="container-grid">
            <div class="imgButton">
              <img src={showContent.img} alt="" />
            </div>
            <div class="textButton">Text</div>
          </div>
        </button>
        <div class="content" style={{ visibility: showContent.visibility }}>
          <Editor
            onEditorChange={onChangeTextState}
            value={textState}
            init={{
              height: 380,
              width: 545.36,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
                "spellchecker",
              ],
              toolbar_mode: "wrap",
              toolbar:
                "cut copy paste |" +
                "undo redo|" +
                "spellchecker|" +
                "link unlink|" +
                "quickimage |" +
                "insertfile|" +
                "bold | italic | underline |" +
                "removeformat |" +
                "numlist bullist |" +
                "outdent indent |" +
                "alignleft aligncenter alignright alignjustify alignnone |" +
                "styleselect |" +
                "formatselect |" +
                "fontselect |" +
                "fontsizeselect |" +
                "forecolor backcolor|",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button type="button" onClick={onClickPublish} class="buttonPublish">
            <div class="containerGridPublish">
              <div class="imgButtonPublish">
                <img src={imgRight} alt="" />
              </div>
              <div class="textButtonPublish">Publish</div>
            </div>
          </button>
        </div>
      </div>
      <div className="gridItem2">
        <div className="gridContainter2">
          <div className="containerPile">
            <img src={imgFrame2} alt="" srcset="" />
            <div className="textFrame">{Parser(textState)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebEditor;
