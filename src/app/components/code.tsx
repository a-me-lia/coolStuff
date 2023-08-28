// Using ES6 import syntax
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

interface props {
  code: string;
  language: string;
}

export default function Code(props: props) {
  const highlightedCode = hljs.highlight(
    "const [bingChilling, setBingChilling] = useState(0)",
    { language: props.language },
  ).value;

  return (
    <div className="w-full rounded-2xl whitespace-pre">{highlightedCode}</div>
  );
}
