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
import TabButton from './components/TabButton/TabButton';



function App() {

  // const xyz = ()=>{
  //   console.log("Hello World-parent");
  // }

  let DynamicContent="please press any button"

  const xyz = (abc)=>{
    DynamicContent=abc;
    console.log(abc);
  }

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      {/* <img src={imgMain} alt="Stylized atom" /> */}
      {/* < TabButton/> */}
      <main>
        
        <section id='core-concepts' >
        <h2>Core Concepts</h2>
      <ul>
        {/* <CoreConcept {...CORE_CONCEPTS[0] } />    image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} 
        <CoreConcept {...CORE_CONCEPTS[1] } />
        <CoreConcept {...CORE_CONCEPTS[2] } />
        <CoreConcept {...CORE_CONCEPTS[3] } /> */}

        { CORE_CONCEPTS.map(

          (concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ) )
          
        }

      </ul>
        </section>


        <section id='examples' >
            <h2>Examples</h2>
        

        <menu>
          {/* <TabButton  >Through Children</TabButton>
          <TabButton  >Through Children</TabButton>
          <TabButton title='Through props' ></TabButton>
          <TabButton title='Through props' ></TabButton> */}
          <TabButton select={()=>{xyz('Through children')}} >Through Children</TabButton>
          <TabButton select={()=>{xyz('Components')}} >Components</TabButton>
          <TabButton select={()=>{xyz('Through props')}} title='Through props'></TabButton>

          {/* <TabButton select={xyz} >Through Children</TabButton>
          <TabButton select={xyz} title='Through props' ></TabButton>
          <TabButton select={xyz} title='Through props' ></TabButton>
          <TabButton select={xyz} >Components</TabButton> */}
         
        </menu>
        {DynamicContent}
        </section>

      </main>

    </div>
  );
}

export default App;
