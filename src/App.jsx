import "./App.scss";

import Logo from "../Public/Images/logo.svg";

import Editor from "./Components/Editor/editor.jsx";

const App = () => {
  return (
    <main className="container-all">
      <h1>Hello World</h1>
      <Editor urlImage={Logo} />
    </main>
  );
};

export default App;
