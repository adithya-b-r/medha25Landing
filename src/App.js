import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Sections/Home/Home';

const styles = {
  App: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url("./images/bg3.jpg")`,
    backgroundPosition: "100% 100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
  }
};

function App() {
  return (
    <div className="App"
      style={styles.App}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;