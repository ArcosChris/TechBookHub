import '../assets/css/App.css';
import 'bulma/css/bulma.min.css';
import MainNav from '../components/Navbar';
import NewBooks from './NewBooks';


function App() {
  return (
    <>
      <MainNav />
      <NewBooks />
    </>
  );
}

export default App;
