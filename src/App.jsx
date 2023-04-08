
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
//import Layout from "./Components/Layout";
//import { useState } from "react";



// export const themes = {
//   light: {
//     font: "black",
//     background: "white"
//   },
//   dark: {
//     font: "white",
//     background: "black"
//   }
// }


function App() {
  // const [theme, setTheme] = useState(themes.light);


  // const handleChangeTheme = () => {
  //   theme === themes.dark ? setTheme(themes.light) : setTheme(theme.dark)
  // }

  

  return (
      <div className="App">
        {/* <Layout theme={theme}> */}
          <Navbar/>
          < Outlet/>
          <Footer/>
          {/* </Layout> */}
        
      </div>
  );
}

export default App;
