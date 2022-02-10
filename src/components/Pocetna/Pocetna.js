import React, { Component } from 'react'


import{MdDirectionsBike} from 'react-icons/md'
import{Container,Row,Col ,Carousel} from 'react-bootstrap'
import pocetnaStyles from '../../styles/Pocetna.module.css'
import b11 from '../../img/b11.jpg'
import b15 from '../../img/b15.jpg'
import b4 from '../../img/b4.jpg'
import bikeVideo from '../../video/bike.mp4'
import bikeDown from '../../video/bikeDown.mp4'
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
            
                      
                  
                  

                     <div className={pocetnaStyles.icons}> Freedom Bike  <MdDirectionsBike className="h3 text-primary" style={{marginLeft:"10px"}}/> </div>
                     
                   


                     <div className={pocetnaStyles.main_div}>


                    <Anime translateX={[-1500,0]} duration={3000}  delay={1000}>         
                      <div className={pocetnaStyles.headline}>
                       SERVIS ZA BICIKLE, SKI SERVIS, RENT-A BIKE
                       </div>
                      </Anime> 


                       <div className={pocetnaStyles.main_div_firstDiv}>

                       
                         <img src={b11} className={pocetnaStyles.slika} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/> 


                         <video src={bikeVideo} type="video/mp4" className={pocetnaStyles.main_div_firstdDiv_video} autoPlay={true} muted={true} loop={true}onMouseOver={this.umanji} onMouseOut={this.uvecaj}></video>
                        

                         <img src={b15} className={pocetnaStyles.slika} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/> 

                       






                       </div>








                       <div className={pocetnaStyles.main_div_secondDiv}>

                     


                      <video src={bikeDown} type="video/mp4" className={pocetnaStyles.main_div_secondDiv_video} autoPlay={true} muted={true} loop={true}onMouseOver={this.umanji} onMouseOut={this.uvecaj}></video>


                      <img src={b4} className={pocetnaStyles.main_div_secondDiv_slika} onMouseOver={this.umanji} onMouseOut={this.uvecaj}/> 

                           </div>

                     </div>






                     <div className={pocetnaStyles.prazan_div}>

                           </div>


                
            </div>
        )
    }
}
