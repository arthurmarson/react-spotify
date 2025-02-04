import { useState } from "react";
import './App.css';
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado da busca

  return (
    <div>
      <Sidebar />
      <Header setSearchTerm={setSearchTerm} />
      <Main searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
