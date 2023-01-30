import hl from "highlight.js"
import python from "highlight.js/lib/languages/python"
import 'highlight.js/styles/github-dark.css';

export default function Code({ children }) {
  hl.registerLanguage('python', python);
  return <pre className="code">
    <code dangerouslySetInnerHTML={
      {
        __html:
          hl.highlight(children, { language: "python" }).value
      }
    } />
  </pre>

}
