import { useState } from "react";
import usePasswordGenerator from "./hooks/use-password-generator";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import './style.css';

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);
  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <>
      <div className="container">
        {/* Password Text and copy */}
        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <button className="copyBtn" onClick={handleCopy}>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}

        {/* character Length */}
        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Checkboxes */}
        <div className="checkboxes">
          {checkboxData.map((item, index) => {
            return (
              <div>
                <input
                  type="checkbox"
                  key={index}
                  checked={item.state}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label>{item.title}</label>
              </div>
            );
          })}
        </div>

        {/* Strength */}
        <PasswordStrengthIndicator password={password} />

        {/* Error Handling */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

        {/* Generate Button */}
        <button className="generateBtn" onClick={() => generatePassword(checkboxData, length)} >
          Generate Password
        </button>

      </div>
    </>
  );
}

export default App;
