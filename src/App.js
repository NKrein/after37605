import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
