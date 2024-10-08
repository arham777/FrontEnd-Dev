import Header from './components/Header/header';
import imgMain from './assets/react-core-concepts.png'
import imgMain2 from './assets/components.png'
import imgMain3 from './assets/config.png'

import CoreConcept from "./Components/CoreConcept/CoreConcept";
import ConfigImg  from './assets/config.png';
import CompImg  from './assets/components.png';
import UiImg  from './assets/jsx-ui.png';
import StateImg  from './assets/state-mgmt.png';

import { CORE_CONCEPTS } from './data';



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
        <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} desc={CORE_CONCEPTS[0].description} />
        <CoreConcept image={CORE_CONCEPTS[1].image} title={CORE_CONCEPTS[1].title} desc={CORE_CONCEPTS[1].description}  />
        <CoreConcept image={CORE_CONCEPTS[2].image} title={CORE_CONCEPTS[2].title} desc={CORE_CONCEPTS[2].description} />
        <CoreConcept image={CORE_CONCEPTS[3].image} title={CORE_CONCEPTS[3].title} desc={CORE_CONCEPTS[3].description} />
      </ul>
        </section>

      </main>

    </div>
  );
}

export default App;
