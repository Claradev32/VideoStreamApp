import { useState } from "react";
import Index from "./components/Index";

function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>
      <Index isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>

  );
}

export default App;
