import "./App.scss";

import { useState } from "react";
import { BsFillMarkdownFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";

import Editor from "./Components/Editor/editor.jsx";
import Previewer from "./Components/Previewer/previewer";

const App = () => {
  const [isMarkdown, setIsMarkdown] = useState("");

  return (
    <main className="container-all">
      <h1>React Markdown Preview</h1>
      <div className="child-divider">
        <Editor
          icon={<BsFillMarkdownFill size={30} />}
          setState={setIsMarkdown}
          state={isMarkdown}
        />
      </div>
      <div className="child-divider">
        <Previewer
          icon={<VscPreview size={30} />}
          htmlMarkdown={isMarkdown === undefined ? "There aren't nothing" : isMarkdown}
        />
      </div>
    </main>
  );
};

export default App;
