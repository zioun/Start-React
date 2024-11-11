import React, { useState } from "react"; 
import DaisyNav from "./components/DaisyNav";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <DaisyNav></DaisyNav>
      <h1 className={`text-3xl font-bold underline ${open ? '' : 'hidden'}`}>Hello world!</h1>
      <button onClick={() => setOpen(!open)} className="px-10 border bg-red-500 text-white">Onclick</button>
    </div>
  );
};

export default App;

