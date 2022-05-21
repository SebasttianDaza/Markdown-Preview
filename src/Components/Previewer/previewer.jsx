import "./Style/previewer.scss";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleError";

const Previewer = ({ icon }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="preview">
        <div className="preview-content">
          {icon}
          <h2 className="preview-title">Previewer</h2>
        </div>
        <article className="preview-content-marked" />
      </main>
    </ErrorBoundary>
  );
};

Previewer.propTypes = {
  icon: PropTypes.func.isRequired,
};

export default Previewer;
