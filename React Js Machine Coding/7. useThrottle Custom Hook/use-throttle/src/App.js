import { useEffect, useState } from "react";
import useThrottle from "./hooks/useThrottle";


function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // any expensive operation or API call
    // window.location.reload();
  }

  const throttledHandleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    }

  }, []);

  return (
    <div>
      Window Size: {windowSize.width} X {windowSize.height}
    </div>
  );
}

export default App;
