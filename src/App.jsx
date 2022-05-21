import "./App.scss";

import { BsFillMarkdownFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";

import Editor from "./Components/Editor/editor.jsx";
import Previewer from "./Components/Previewer/previewer";

const App = () => {
  return (
    <main className="container-all">
      <h1>React Markdown Preview</h1>
      <div className="child-divider">
        <Editor icon={<BsFillMarkdownFill size={30} />} />
      </div>
      <div className="child-divider">
        <Previewer icon={<VscPreview size={30} />} />
      </div>
    </main>
  );
};

export default App;
