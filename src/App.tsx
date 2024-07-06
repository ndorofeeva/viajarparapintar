import Header from './components/Header';
import Router from './Router';

export default function App(){
  return (
    <div className="app mx-10">
      <Header />
      <main>
        <Router />
      </main>
      <footer>
        <p>© Copyright 2024 Viajar&Pintar</p>
      </footer>
    </div>
  );
}
