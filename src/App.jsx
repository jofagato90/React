import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/example";
import Footer from "./components/footer";
import Header from "./components/header";
import UserList from "./components/user/UserList";
import UserForm from "./components/user/UserForm";

function App() {
  return (
    <div style={{
      backgroundRepeat: 'repeat',
backgroundSize: 'cover',backgroundImage:  `url("https://www.fundacionaquae.org/wp-content/uploads/2019/02/nubes-y-cambio-climatico-1024x576.jpg")`}}>      
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Example />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/userForm" element={<UserForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;