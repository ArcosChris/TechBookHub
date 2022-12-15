import '../assets/css/App.css';
import 'bulma/css/bulma.min.css';
import MainNav from '../components/Navbar';
import BookSection from './BookSection';


function App() {

  let newBooks = 'https://api.itbook.store/1.0/new';
  let category = 'https://api.itbook.store/1.0/search/'

  return (
    <>
      <MainNav />
      <BookSection item={'new'} api={newBooks} sectionTitle={'Top New Books'} />
      <BookSection item={'python'} api={`${category}/python`} sectionTitle={'Python'} />
      <BookSection item={'javascript'} api={`${category}/javascript`} sectionTitle={'JavaScript'} />
      <BookSection item={'beginners'} api={`${category}/beginners`} sectionTitle={'Best for Beginners'} />
      <BookSection item={'csharp'} api={`${category}/csharp`} sectionTitle={'C#'} />
      <BookSection item={'machine-learning'} api={`${category}/machine+learning`} sectionTitle={'Machine Learning'} />
    </>
  );
}

export default App;
