import "./Style/editor.scss";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleError";

const Editor = ({ urlImage }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <header className="header">
        <div className="header-content">
          <img src={urlImage} alt="Avatar" />
          <h3>Editor</h3>
        </div>
        <article className="editor-content" />
      </header>
    </ErrorBoundary>
  );
};

Editor.propTypes = {
  urlImage: PropTypes.string.isRequired,
};

export default Editor;
