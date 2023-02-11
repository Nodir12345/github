import { Routes ,Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Repository } from "./pages/repository/repository";
import { Home } from "./pages/home/home";
import { Packages } from "./pages/packeges/packages";
import { Projects } from "./pages/projects/projects";
import { Stars } from "./pages/stars/stars";
import { Followers } from "./pages/followers/followers";
import { Following } from "./pages/following/following";
function App() {
  return (
 <>
 <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/repository" element={<Repository/>}/>
  <Route path="/packages" element={<Packages/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/stars" element={<Stars/>}/>
  <Route path="/followers" element={<Followers/>}/>
  <Route path="/following" element={<Following/>}/>
  <Route path="*" element={<h1>Page yuq bratishka</h1>}/>
</Routes>
<Footer/>
 </>
  );
}

export default App;
