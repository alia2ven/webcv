

import React from 'react'
import BodyComponent from '../Components/BodyComponent'
import HeaderComponent from '../Components/HeaderComponent'
import SmallHeaderComponent from '../Components/SmallHeaderComponent'
import AvatarComponent from '../Components/AvatarComponent'
import BienvenidaComponent from '../Components/BienvenidaComponent'
import TimelineComponent from '../Components/TimelineComponent'
import WKEtimelineComponent from '../Components/WKEtimelineComponent'
import BarskillsComponent from '../Components/BarskillsComponent'
import PortafolioComponent from '../Components/PortafolioComponent'
import ContactfooterComponent from '../Components/ContactfooterComponent'
function Home() {
  return (
    <div>
     <SmallHeaderComponent /> 
    {/*<AvatarComponent />  */}
      <BodyComponent />
      {/*<HeaderComponent /> */}
       <BienvenidaComponent />
       <TimelineComponent />
      
<WKEtimelineComponent />
<BarskillsComponent />
<PortafolioComponent />
<ContactfooterComponent />
           </div>
  )
}

export default Home

{/*
          También podemos tener
          comentarios multilínea
      */}