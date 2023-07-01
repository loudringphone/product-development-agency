import Header from './components/header/Header';
import Routers from './routers/Routers'
import Footer from './components/UI/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Routers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
