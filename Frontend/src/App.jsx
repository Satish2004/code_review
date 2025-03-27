import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [code, setCode] = useState(``);
  const [review, setreview] = useState(``);

  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting
  }); // Highlight when code updates

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:8080/ai/get-review", {
        code,
      });
      setreview(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className="">
        <div className="left">
          <div className="codeSection">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira Code", monospace',
                height: "100%",
                width: "100%",
                fontSize: 18,
                // backgroundColor: "#2d2d2d", // Background similar to Prism Tomorrow theme
                color: "#ffffff", // Ensuring proper text color
              }}
            />
          </div>
          <div className="reviewBtn" onClick={reviewCode}>
            Review
          </div>
        </div>
        <div className="right">
          <div className="aiCodeReviewSection">
            <Markdown>{review}</Markdown>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
