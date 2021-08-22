import MediaQuery from "react-responsive";

import WebEditorDesktop from "./WebEditorDesktop";
import WebEditorMobile from "./WebEditorMobile";

const index = () => {
  return (
    <div>
      <MediaQuery maxWidth={768}>
        <WebEditorMobile/>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <WebEditorDesktop />
      </MediaQuery>
    </div>
  );
};

export default index;
