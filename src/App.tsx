import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { SignUp } from "@/components/SignUp";
import { SignIn } from "@/components/SignIn";
import { Home } from "@/components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App