import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Education from "./components/Education.tsx";
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Home />
                <Experience />
                <Education />
                <Contact />
            </main>
        </div>
    );
}

export default App;
