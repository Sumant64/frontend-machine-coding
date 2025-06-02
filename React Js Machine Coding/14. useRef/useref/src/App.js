import { useState } from "react";
import ProblemWithoutRef from "./components/ProblemWithoutRef";
import RenderCountWithRef from "./components/RenderCountWithRef";
import FocusWithRef from "./components/FocusWithRef";
import PreviousValueWithRef from "./components/PreviousValueWithRef";


function App() {

  return (
    <>
      {/* <ProblemWithoutRef /> */}
      <RenderCountWithRef />
      <FocusWithRef />
      <div style={{marginTop: '20px'}}>
        <PreviousValueWithRef />
      </div>
    </>
  );
}

export default App;
