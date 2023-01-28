import './App.css';

import WordProvider from './components/Context';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <div className="App m-auto ">
                <WordProvider>
                    <Header />
                    <Content />
                    <Footer />
                </WordProvider>
            </div>
        </>
    );
}

export default App;
