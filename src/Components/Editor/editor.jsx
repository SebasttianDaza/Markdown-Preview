import "./Style/editor.scss";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleError";

const Editor = ({ icon, state, setState }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setState(e.target.value);
    }
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <header className="header">
        <div className="header-content">
          {icon}
          <h3 className="header-title">Editor</h3>
        </div>
        <textarea value={state} className="editor-content" onChange={handleChange} />
      </header>
    </ErrorBoundary>
  );
};

Editor.propTypes = {
  icon: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.func,
};

export default Editor;
