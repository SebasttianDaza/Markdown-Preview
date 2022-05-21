import "./Style/editor.scss";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleError";

const Editor = ({ icon }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <header className="header">
        <div className="header-content">
          {icon}
          <h3 className="header-title">Editor</h3>
        </div>
        <textarea className="editor-content" />
      </header>
    </ErrorBoundary>
  );
};

Editor.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default Editor;
