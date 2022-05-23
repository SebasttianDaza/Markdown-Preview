import "./Style/previewer.scss";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import ErrorFallback from "../../Errors/handleError";

const Previewer = ({ icon, htmlMarkdown }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="preview">
        <div className="preview-content">
          {icon}
          <h2 className="preview-title">Previewer</h2>
        </div>
        <article className="preview-content-marked">
          {htmlMarkdown === "" ? (
            <h1>You have write</h1>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{htmlMarkdown}</ReactMarkdown>
          )}
        </article>
      </main>
    </ErrorBoundary>
  );
};

Previewer.propTypes = {
  icon: PropTypes.object.isRequired,
  htmlMarkdown: PropTypes.string.isRequired,
};

export default Previewer;
