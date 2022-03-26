import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message/Message';

const placeholder = 'Ваша почта';

function App({ name }) {
    return (
        <div className="App" >
            <header className = "App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Привет, {name}!</h3>
                <p>Подпишись на новости!</p>
                <Message placeholder={placeholder}/>
            </header>
        </div>
    );
}

export default App;