import React, { Component } from 'react'
import galerijaStyles from '../../styles/Galerija.module.css'
import{Container,Row,Col,Carousel } from 'react-bootstrap'
import{ImCross} from 'react-icons/im'

import b17 from '../img/b17.jpg'
import b2 from '../img/b2.jpg'
import b3 from '../img/b3.jpg'
import b4 from '../img/b4.jpg'
import b5 from '../img/b5.jpg'


import b6 from '../img/b6.jpg'
import b7 from '../img/b7.jpg'
import b8 from '../img/b8.jpg'
import b9 from '../img/b9.jpg'
import b10 from '../img/b10.jpg'


import b11 from '../img/b11.jpg'
import b12 from '../img/b12.jpg'
import b13 from '../img/b13.jpg'
import b14 from '../img/b14.jpg'
import b15 from '../img/b15.jpg'










export default class Galerija extends Component {
    constructor(){
        super()


        this.state={
            laz:false
        }

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
           
    
      
                <div className={galerijaStyles.galerijaDiv}>
                   
              

            <div className={galerijaStyles.galerijaDrugiDiv}>
           
            <Container>
                <Row>
                    <Col xs={12} className="h4 text-center text-dark">
                        <br></br>
                        <br></br>
                     
                       Galerija
                       <br></br>
                        <br></br>
                   
                    </Col>
                    <Col md={3}>
                        <img src={b17} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b2} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b3} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b4} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col xs={12}>
                        <br></br>
                   
                        </Col>

                        <Col md={3}>
                        <img src={b5} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b6} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b7} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b8} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/>
                     
                     
                        
                        </Col>
                        <Col xs={12}>
                            <br></br>
                        </Col>
                        <Col md={3}>
                        <img src={b9} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/>
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b10} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b11} className={galerijaStyles.slikaHW}onMouseOver={this.umanji} onMouseOut={this.uvecaj}/>
                     
                     
                        
                        </Col>
                        <Col md={3}>
                        <img src={b12} className={galerijaStyles.slikaHW} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/>
                     
                     
                        
                        </Col>
                

                
                    
             
                </Row>
            </Container>

            </div>
            </div>
           
           
           
    
         
          


        )
    }
}
