import './App.css';
import ContactsList from './components/ContactsList.js';
function App() {
  console.log("App rendered");

  return (
    <div className="App">
      <ContactsList />
    </div>
  );
}

export default App;
