import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router/Routes";
import SliderNav from "./components/SliderNav";
import Nav from "./components/Nav";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const [dir, setDir] = useState("rtl");
  // console.log(search);
  return (
    <Router>
      <div className="relative min-h-screen md:flex px-2 " dir={dir} data-dev-hint="container">
        <SliderNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} setDir={setDir} dir={dir} />
        <main className="flex-1">
          <Nav setIsNavOpen={setIsNavOpen} setSearch={setSearch} />
          <div className="max-w-7xl mx-auto flex-1 p-6 lg:px-8 bg-stone-100 rounded-sm">
            {/* Start Content */}
            <div className="px-4 py-6 sm:px-0">
              <Routes search={search} />
            </div>
            {/* /End Content */}
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
