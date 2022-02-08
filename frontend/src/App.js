import { useState } from "react";
import Index from "./components/Index";

function App() {
    const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn ] = useState(token !== undefined);

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>

  );
}

export default App;
