import { useState, useEffect } from "react";

function useWindowsize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    function handleResize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

export default useWindowsize;
