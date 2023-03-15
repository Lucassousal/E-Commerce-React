import { Header } from "./components/header";
import { Card } from "./components/card";
import { Footer } from "./components/footer";

import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header/>
      <section className="products-area">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
