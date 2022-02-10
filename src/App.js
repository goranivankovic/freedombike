import React, { Component } from 'react'


import logo from './logo.svg';
import './App.css';
import{Container,Row,Col,Carousel } from 'react-bootstrap'

import Navic from './components/Nav/Navic';
import Pocetna from './components/Pocetna/Pocetna';
import Onama from './components/Onama/Onama';
import Servis from './components/Servis/Servis';
import Oprema from './components/Oprema/Oprema';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




import galerijaStyles from './styles/Galerija.module.css'




import b2 from './img/b2.jpg'
import b3 from './img/b3.jpg'
import b4 from './img/b4.jpg'
import b5 from './img/b5.jpg'


import b6 from './img/b6.jpg'
import b7 from './img/b7.jpg'
import b9 from './img/b9.jpg'
import b10 from './img/b10.jpg'


import b11 from './img/b11.jpg'
import b12 from './img/b12.jpg'
import b13 from './img/b13.jpg'
import b14 from './img/b14.jpg'
import b15 from './img/b15.jpg'
import b17 from './img/b17.jpg'

import{ImCross} from 'react-icons/im'
import { RiBug2Fill } from 'react-icons/ri';
import Kontakt from './components/Kontakt/Kontakt';





export default class App extends Component {
  constructor(){
    super()


    this.state={
        laz:false,

        slika2:b2,
        slika3:b3,
        slika4:b4,
        slika5:b5,
        slika6:b6,

        slika7:b7,
        slika9:b9,
        slika10:b10,
        slika11:b11,
        slika12:b12,
        slika15:b15,

        slika17:b17,
       
        
        
    }

    this.umanji=this.umanji.bind(this)
    this.uvecaj=this.uvecaj.bind(this)

    this.firstFun=this.firstFun.bind(this)
    this.secondFun =this.secondFun.bind(this)
    this.threeFun=this.threeFun.bind(this)
    this.fourFun=this.fourFun.bind(this)

    this.fiveFun=this.fiveFun.bind(this)
    this.sixFun=this.sixFun.bind(this)
    this.sevenFun=this.sevenFun.bind(this)
    this.eightFun=this.eightFun.bind(this)

    this.nineFun=this.nineFun.bind(this)
    this.tenFun=this.tenFun.bind(this)
    this.elevenFun=this.elevenFun.bind(this)
    this.twelweFun=this.twelweFun.bind(this)
}

umanji(a){
    a.target.style.transition='1200ms'
    a.target.style.transform='scale(0.92)'


  }
  uvecaj(b){
    b.target.style.transition='600ms'
    b.target.style.transform='scale(1)'

  }
  firstFun(){

    this.setState({
      laz:true,
      slika2:b2,
      slika3:b3,
      slika4:b4,
      slika5:b5,
      slika6:b6,
      slika7:b7,
      slika9:b9,
      slika10:b10,
      slika11:b11,
      slika12:b12,
      slika15:b15,
      slika17:b17,
    
    })



  }
  secondFun(){
    this.setState({
      laz:true,
      slika2:b3,
      slika3:b4,
      slika4:b5,
      slika5:b6,
      slika6:b7,
      slika7:b9,
      slika9:b10,
      slika10:b11,
      slika11:b12,
      slika12:b15,
      slika15:b17,
      slika17:b2,
      
    })
  }

  threeFun(){
    this.setState({
      laz:true,
      slika2:b4,
      slika3:b5,
      slika4:b6,
      slika5:b7,
      slika6:b9,
      slika7:b10,
      slika9:b11,
      slika10:b12,
      slika11:b15,
      slika12:b17,
      slika15:b2,
      slika17:b3,
    })

  }
  fourFun(){
    this.setState({
      laz:true,
      slika2:b5,
      slika3:b6,
      slika4:b7,
      slika5:b9,
      slika6:b10,
      slika7:b11,
      slika9:b12,
      slika10:b15,
      slika11:b17,
      slika12:b2,
      slika15:b3,
      slika17:b4,
    })

  }
  fiveFun(){

    this.setState({
      laz:true,
      slika2:b6,
      slika3:b7,
      slika4:b9,
      slika5:b10,
      slika6:b11,
      slika7:b12,
      slika9:b15,
      slika10:b17,
      slika11:b2,
      slika12:b3,
      slika15:b4,
      slika17:b5,
    })

  }
  sixFun(){
    this.setState({
      laz:true,
      slika2:b7,
      slika3:b9,
      slika4:b10,
      slika5:b11,
      slika6:b12,
      slika7:b15,
      slika9:b17,
      slika10:b2,
      slika11:b3,
      slika12:b4,
      slika15:b5,
      slika17:b6,

    })
  }

  sevenFun(){
    this.setState({
      laz:true,
      slika2:b9,
      slika3:b10,
      slika4:b11,
      slika5:b12,
      slika6:b15,
      slika7:b17,
      slika9:b2,
      slika10:b3,
      slika11:b4,
      slika12:b5,
      slika15:b6,
      slika17:b7,
    })

  }
  eightFun(){
    this.setState({
      laz:true,
    slika2:b10,
    slika3:b11,
    slika4:b12,
    slika5:b15,
    slika6:b17,
   slika7:b2,
   slika9:b3,
   slika10:b4,
   slika11:b5,
   slika12:b6,
   slika15:b7,
   slika17:b9,
    })
  }
  nineFun(){
    this.setState({
      laz:true,
    slika2:b11,
    slika3:b12,
    slika4:b15,
    slika5:b17,
    slika6:b2,
   slika7:b3,
   slika9:b4,
   slika10:b5,
   slika11:b6,
   slika12:b7,
   slika15:b7,
   slika17:b10,
    })

  }
  tenFun(){
    this.setState({
      laz:true,
    slika2:b12,
    slika3:b15,
    slika4:b17,
    slika5:b2,
    slika6:b3,
   slika7:b4,
   slika9:b5,
   slika10:b6,
   slika11:b7,
   slika12:b9,
   slika15:b10,
   slika17:b11,
    })

  }
  elevenFun(){
    this.setState({
      laz:true,
    slika2:b15,
    slika3:b17,
    slika4:b2,
    slika5:b3,
    slika6:b4,
   slika7:b5,
   slika9:b6,
   slika10:b7,
   slika11:b9,
   slika12:b10,
   slika15:b11,
   slika17:b12,
    })

  }
  twelweFun(){
    this.setState({
      laz:true,
    slika2:b17,
    slika3:b2,
    slika4:b3,
    slika5:b4,
    slika6:b5,
   slika7:b6,
   slika9:b7,
   slika10:b9,
   slika11:b10,
   slika12:b11,
   slika15:b12,
   slika17:b15,
    })

  }
 

  render(){
    AOS.init();

  return (
    <div className="App">

{!this.state.laz ?
      <div>
    
    
      <Navic />
      <Pocetna />


      
      <Onama />
      


      
      <div className={galerijaStyles.galerijaDiv} id="galerija">
                   
              

                   <div className={galerijaStyles.galerijaHeadline}>
                     Galerija


                     </div>
                  
             
                        <div className={galerijaStyles.mainDiv_images}>

                       

                       <div className={galerijaStyles.mainDiv_images_firstRow}>

                   
                  
                           <img src={b2} className={galerijaStyles.slikaHW} 
                               onMouseOver={this.umanji}
                               onMouseOut={this.uvecaj} 
                               onClick={this.firstFun}
   
                                   
                               />
                            
                            
                           
                               <img src={b3} className={galerijaStyles.slikaHW} 
                                    onMouseOver={this.umanji}
                                    onMouseOut={this.uvecaj} 
                                     onClick={this.secondFun}
                               />
                            
                            
                               
                    
                               <img src={b4} className={galerijaStyles.slikaHW}
                                    onMouseOver={this.umanji}
                                    onMouseOut={this.uvecaj}
                                    onClick={this.threeFun}
                              
                               />
                            
                            
                               
                           
                          
       
                               <img src={b5} className={galerijaStyles.slikaHW} 
                                    onMouseOver={this.umanji}
                                    onMouseOut={this.uvecaj}
                                     onClick={this.fourFun}

                               
                               />


                               </div>


                            
                            
                               
                    

                             

                       <div className={galerijaStyles.mainDiv_images_secondRow}>


                     

                               <img src={b6} className={galerijaStyles.slikaHW} 
                                   onMouseOver={this.umanji} 
                                   onMouseOut={this.uvecaj}
                                   onClick={this.fiveFun}
                               />
                            
                            
                               
                         
                               <img src={b7} className={galerijaStyles.slikaHW} 
                                      onMouseOver={this.umanji}
                                       onMouseOut={this.uvecaj}
                                       onClick={this.sixFun}
                               
                               />
                            
                            
                               
                              
                               <img src={b9} className={galerijaStyles.slikaHW} 
                                   onMouseOver={this.umanji}
                                    onMouseOut={this.uvecaj}
                                   onClick={this.sevenFun}
                               />
                            
                            
                            
                               <img src={b10} className={galerijaStyles.slikaHW}
                                    onMouseOver={this.umanji} 
                                    onMouseOut={this.uvecaj}
                                   onClick={this.eightFun}              
                                   
                               />

                               </div>


                               <div className={galerijaStyles.mainDiv_images_threedRow}>


                          
                            
                            
                               
                               <img src={b11} className={galerijaStyles.slikaHW}
                                onMouseOver={this.umanji}
                                 onMouseOut={this.uvecaj}  
                                 onClick={this.nineFun}              
                                   
                               />


                         
                            
                            
                            
                               <img src={b12} className={galerijaStyles.slikaHW}
                               onMouseOver={this.umanji} 
                               onMouseOut={this.uvecaj} 
                                onClick={this.tenFun}              
                              
                               />
                            
                            
                               
                               
                               <img src={b15} className={galerijaStyles.slikaHW} 
                               onMouseOver={this.umanji} 
                               onMouseOut={this.uvecaj}
                               onClick={this.elevenFun}              
                               />
                            
                            
                               
                            
                               
                               <img src={b17} className={galerijaStyles.slikaHW} 
                                  onMouseOver={this.umanji} 
                                  onMouseOut={this.uvecaj}
                                  onClick={this.twelweFun}              
   
                               /> 

                     </div>
                      
                            
                               
                            </div>
                       
                      </div>


                       <Servis />
                       <Oprema />
                      <Kontakt />   

                   </div>


                  :

                    <div className={galerijaStyles.couroselDiv}>
                      <Container>
                          <Row>
                           <Col xs={12} className="text-right h5">
                           <ImCross onClick={()=>{
                            this.setState({
                            laz:false
                          })
                          }} />
                    </Col>
                   
                  <Col xs={12}>
                   <Carousel fade>
                     <Carousel.Item>
                       <img 
                        className="d-block w-100"
                         src={this.state.slika2}
                        alt="Second slide"
                         />
                     </Carousel.Item>


              <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={this.state.slika3}
                    alt="Third slide"
                    />

                </Carousel.Item>


                 <Carousel.Item>
                      <img
                      className="d-block w-100"
                      src={this.state.slika4}
                      alt="Third slide"
                      />

                  </Carousel.Item>

              <Carousel.Item>
                     <img
                     className="d-block w-100"
                     src={this.state.slika5}
                     alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                   <img
                    className="d-block w-100"
                    src={this.state.slika6}
                    alt="Third slide"
                  />

               </Carousel.Item>


               <Carousel.Item>
                  <img
                   className="d-block w-100"
                   src={this.state.slika7}
                   alt="Third slide"
                   />
              </Carousel.Item>
  

             <Carousel.Item>
                  <img
                   className="d-block w-100"
                   src={this.state.slika9}
                   alt="Third slide"
                  />

             </Carousel.Item>


              <Carousel.Item>
                   <img
                    className="d-block w-100"
                    src={this.state.slika10}
                    alt="Third slide"
                  />

              </Carousel.Item>


                <Carousel.Item>
                     <img
                      className="d-block w-100"
                      src={this.state.slika11}
                      alt="Third slide"
                   />

                </Carousel.Item>


                  <Carousel.Item>
                      <img
                      className="d-block w-100"
                      src={this.state.slika12}
                      alt="Third slide"
                    />

                </Carousel.Item>



               <Carousel.Item>
                  <img
                   className="d-block w-100"
                  src={this.state.slika15}
                  alt="Third slide"
                 />
             </Carousel.Item>


             <Carousel.Item>
                <img
                 className="d-block w-100"
                 src={this.state.slika17}
                 alt="First slide"
                />

             </Carousel.Item>


            </Carousel>

          </Col>
        </Row>
      </Container>
  
  
   </div>}
  


</div>
                  
                  
  )
}   
}       
           
