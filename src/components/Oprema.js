import React, { Component } from 'react'
import opremaStyles from '../styles/Oprema.module.css'
import{Container,Row,Col } from 'react-bootstrap'

import b14 from '../img/b14.jpg'
import b3 from '../img/b3.jpg'
import b7 from '../img/b7.jpg'


export default class Oprema extends Component {
    constructor(){
        super()


 
        this.umanji=this.umanji.bind(this)
        this.uvecaj=this.uvecaj.bind(this)
    }

    umanji(a){
        a.target.style.transition='1200ms'
        a.target.style.transform='scale(0.92)'
    
    
      }
      uvecaj(b){
        b.target.style.transition='600ms'
        b.target.style.transform='scale(1)'
    
      }
    
    render() {
        return (
            
            <div className={opremaStyles.opremaDiv} id="oprema">
            <div className={opremaStyles.opremaDrugiDiv}>
                <Container>
                    <Row>
                        <Col xs={12} className="text-center h4 text-dark">
                            <br></br>
                            
                            Oprema
                            <br></br>
                          
                            
                            
                            </Col>
                           
                            <Col md={4} className={opremaStyles.divSaSlikama} onMouseOver={this.umanji} onMouseOut={this.uvecaj}

data-aos="fade-down"
data-aos-offset="300"
data-aos-delay="300"
data-aos-duration="1000"
data-aos-easing="ease-in-out"
data-aos-once="false"
                            >
                           
                            <img src={b3} />
                             Delovi

                             </Col>
                                                
                            <Col md={4} className={opremaStyles.divSaSlikama} onMouseOver={this.umanji} onMouseOut={this.uvecaj} 
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-delay="600"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                            <img src={b14} />

Najsavremenija Oprema

                               
                           
             
                            </Col>
                            <Col md={4} className={opremaStyles.divSaSlikama} onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-delay="900"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            >
                            <img src={b7} />

Prodaja Bicikla

                               
                           

                            </Col>
                         
                            <Col xs={12} className="text-center h4">
                            <br></br>
                            <br></br>
                       Naši Partneri
                       <br></br>
                       <br></br>
                            </Col>
                            <Col sm={3} className="text-center">
                            Suntour
                            </Col>
                            <Col sm={3} className="text-center">
                            Continental
                            </Col>

                            <Col sm={3} className="text-center">
                            Shimano
                            </Col>
                            <Col sm={3} className="text-center">
                            Bosch
                            </Col>
                            <Col xs={12}>
                                <br></br>
                            </Col>
                            <Col sm={3} className="text-center">
                            Garmin
                            </Col>
                            <Col sm={3} className="text-center">
                            Magura
                            </Col>
                            <Col sm={3} className="text-center">
                            Schwalbe
                            </Col>
                            <Col sm={3} className="text-center">
                            Favero

                            </Col>
                           

                         


                    </Row>
                </Container>
            

                </div>
            </div>
        )
    }
   
}
