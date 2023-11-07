import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "./components/Google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { DarkThemeToggle } from "flowbite-react";
import { ThemeProvider } from "./context/darkMode";
import { useState } from "react";
import { useEffect } from "react";

<style>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
</style>;

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="App">
        {/* <div style={{ width: "40%" }}>
        <GoogleOAuthProvider clientId="722256296301-tirnqfscgeshogqr1kkoiin0favlo9rj.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </div> */}
        <Navbar />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
