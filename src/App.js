import { useEffect, useState } from 'react';
import css from './App.module.css';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const label = darkmode ? 'Light Mode' : 'Dark Mode';

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [darkmode]);

  return <div className={`h-screen flex`}>
    <div className={`${css.demo} darkModeClassThatWorks`}>
      <button onClick={() => setDarkmode(mode => !mode)}>{label}</button>
      <p>This side works =)</p>
    </div>
    <div className={`${css.demo} ${css.darkModeClassThatDoesntWork}`}>
      <button onClick={() => setDarkmode(mode => !mode)}>{label}</button>
      <p>This side doesn't work =(</p>
    </div>
  </div>;
}

export default App;
