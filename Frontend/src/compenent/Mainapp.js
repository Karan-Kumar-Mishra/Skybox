import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Listnotes from "./Listnotes";
import About from "./About";
import Profile from "./Profile";
import Setting from "./Setting";
import Notfound from "./NotFound";
import Loading from "./Loading";

export default function Mainapp() {
  useEffect(() => {}, []);
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Listnotes />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
