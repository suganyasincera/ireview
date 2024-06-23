import React,{useEffect,useState} from 'react';
import './Spinner.css';

export default function Spinner() {
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const loadingTexts = ["fetching", "Salary details ...", "Benefits...", "Notice period...","otherclauses...","exclusivity criteria..."];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingTextIndex(prevIndex => (prevIndex + 1) % loadingTexts.length);
    }, 500); // Change the interval as needed

    return () => clearInterval(intervalId);
  }, [loadingTexts.length]);
  return (
  
<div class="loader">{loadingTexts[loadingTextIndex]}</div>



  );
}
