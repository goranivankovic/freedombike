import React, { Component } from 'react'


import{MdDirectionsBike} from 'react-icons/md'
import{Container,Row,Col ,Carousel} from 'react-bootstrap'
import pocetnaStyles from '../styles/Pocetna.module.css'
import b11 from '../img/b11.jpg'
import b15 from '../img/b15.jpg'
import b4 from '../img/b4.jpg'
import bikeVideo from '../video/bike.mp4'
import bikeDown from '../video/bikeDown.mp4'
import Anime from 'react-anime'
import AOS from 'aos';

export default class Pocetna extends Component {
  constructor(){
    super()
    this.umanji=this.umanji.bind(this)
    this.uvecaj=this.uvecaj.bind(this)
  }
  umanji(e){
    e.target.style.transition='1200ms'
    e.target.style.transform='rotate(3deg)'


  }
  uvecaj(b){
    b.target.style.transition='600ms'
    b.target.style.transform='rotate(0deg)'

  }
    render() {
      AOS.init();
        return (
            <div className={pocetnaStyles.pocetnaDiv} id="pocetna">
                <Container>
                    <Row>
                        <Col xs={12} className="text-right text-dark h5">
                          <br></br>
                          <br></br>
                   <Anime translateY={[-250,0]} duration={2500} delay={2000} rotate={['-30deg','0deg']} ><span> Freedom Bike  <MdDirectionsBike className="h3 text-primary" /> </span></Anime>  
                        </Col>
                        <Col xs={12} className="text-center h5 text-secondary">
                        <br></br>
                  <Anime translateX={[-1500,0]} duration={3000} rotate={['-20deg','0deg']} delay={1000}><span>SERVIS ZA BICIKLE, SKI SERVIS, RENT-A BAJK</span> </Anime>      
                        </Col>

                        <Col md={4} className={pocetnaStyles.prviDiv}>
                          <br></br>
   <img src={b11} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/> 

                        </Col>
                        <Col md={4} className={pocetnaStyles.prviDiv}>
                          <br></br>
                         
                          <video src={bikeVideo} type="video/mp4" autoPlay={true} muted={true} loop={true}onMouseOver={this.umanji} onMouseOut={this.uvecaj}></video>

                        </Col>
                        <Col md={4} className={pocetnaStyles.prviDiv}>
                          <br></br>
                        
                          <img src={b15} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />

                        </Col>
                     

                        <Col md={7} className={pocetnaStyles.drugiDiv}>
                          <br></br>
                          <div>
                <video src={bikeDown} type="video/mp4" autoPlay={true} muted={true} loop={true} onMouseOver={this.umanji} onMouseOut={this.uvecaj}></video>
                
   
            </div>
                        

                        </Col>
                        <Col md={5} className={pocetnaStyles.drugiDiv}>
                          <br></br>
               
                          <img src={b4} onMouseOver={this.umanji} onMouseOut={this.uvecaj} />

                     
                        </Col>
                     
                        
                      
                    </Row>
                </Container>
                
             

    
                
            </div>
        )
    }
}
