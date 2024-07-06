import Header from './components/Header';
import Routes from './components/Routes/RoutesGrid';

export default function App(){
  return (
    <div className="app mx-10">
      <Header />
      <main>
        <Routes />
      </main>
      <footer>
        <p>© Copyright 2024 Viajar&Pintar</p>
      </footer>
    </div>
  );
}
