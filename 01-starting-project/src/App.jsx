import Header from './components/Header/header';
import imgMain from './assets/react-core-concepts.png'
import imgMain2 from './assets/components.png'
import imgMain3 from './assets/config.png'





function App() {

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <img src={imgMain} alt="Stylized atom" />
    </div>
  );
}

export default App;
