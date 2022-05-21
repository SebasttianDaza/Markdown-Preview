import "./App.scss";

import { BsFillMarkdownFill } from "react-icons/bs";

import Editor from "./Components/Editor/editor.jsx";

const App = () => {
  return (
    <main className="container-all">
      <h1>Hello World</h1>
      <Editor icon={<BsFillMarkdownFill size={30} />} />
    </main>
  );
};

export default App;
