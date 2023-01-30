import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustomer from './components/navbar/navbar';
import FormCustomer from './components/Form/Form';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className='app'>
    <NavbarCustomer/>
    <FormCustomer/>
    <Footer/>
    </div>
  );
}

export default App;
