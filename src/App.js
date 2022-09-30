import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Routes from "./router/Routes";
import SliderNav from "./components/SliderNav";
import Nav from "./components/Nav";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const [dir, setDir] = useState("ltr");
  const history = useHistory();
  useEffect(() => {
    if (!!search) {
      history.push("/cars");
    }
  }, [search]);

  return (
    <div className="w-full relative md:absolute min-h-screen md:flex h-full overflow-hidden" dir={dir} data-dev-hint="container">
      <SliderNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} setDir={setDir} dir={dir} />
      <main className="flex flex-1 flex-col w-full">
        <Nav setIsNavOpen={setIsNavOpen} setSearch={setSearch} isNavOpen={isNavOpen} />
        <div className=" mx-auto flex-1 p-6 lg:px-8 bg-stone-100 rounded-sm overflow-auto w-full">
          <Routes search={search} />
        </div>
      </main>
    </div>
  );
}

export default App;
