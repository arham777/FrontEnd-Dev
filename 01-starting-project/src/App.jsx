import Header from './components/Header/header';
import imgMain from './assets/react-core-concepts.png'
import imgMain2 from './assets/components.png'
import imgMain3 from './assets/config.png'

import CoreConcept from "./Components/CoreConcept/CoreConcept";
import ConfigImg  from './assets/config.png';
import CompImg  from './assets/components.png';
import UiImg  from './assets/jsx-ui.png';
import StateImg  from './assets/state-mgmt.png';



function App() {

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      {/* <img src={imgMain} alt="Stylized atom" /> */}

      <main>
        
        <section id='core-concepts' >
        <h2>Core Concepts</h2>
      <ul>
        <CoreConcept image={ConfigImg} title="Fundamental" desc="Fundamental React Concepts" />
        <CoreConcept image={CompImg} title="Basic" desc="Fundamental desc1"  />
        <CoreConcept image={UiImg} title="Concepts" desc="Fundamental desc2" />
        <CoreConcept image={StateImg} title="React" desc="Fundamental desc3" />
      </ul>
        </section>

      </main>

    </div>
  );
}

export default App;
