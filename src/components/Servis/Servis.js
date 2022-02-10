import React, { Component } from 'react'
import servisStyles from '../../styles/Servis.module.css'
import{Container,Row,Col,Carousel } from 'react-bootstrap'


import b2 from '../../img/b2.jpg'

import b13 from '../../img/b13.jpg'
import b5 from '../../img/b5.jpg'




export default class Servis extends Component {
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
            
            <div className={servisStyles.servisDiv} id="servis">


               <div className={servisStyles.headline}>
                   Servis
                </div>
                          
                          
                            
                            <div className={servisStyles.mainDiv}>

                          <div className={servisStyles.mainDiv_textLeft}
                               onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                                data-aos="fade-down"
                                data-aos-offset="300"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="false"
                          >

                           
                            Naši serviseri su uvek tu za vas. Oni svojom stručnošću, ljubaznošću i strpljenjem rešavaju vaš problem u najkraćem roku. Isti pristup imamo prema svim biciklima. Do sada smo popravljali sve. Od karbonskih bicikla sa profesionalnom opremom, do bicikla koji 15 godina nije bio u voznom stanju.
                            Donesite Vaš bicikl na servis kod nas, i uverite se u naš rad i uslugu. Budite sigurni da će biti perfektno uradjen.
                            Stalo nam je da potrosači budu zadovoljni a usluga odlična i na vreme.
                           Nalazimo se na pristupačnoj lokaciji, omogućavajući našim klijentima lako pronalaženje. 
                      
                          </div>
                           


                          <div className={servisStyles.mainDiv_imagesRight}
                               data-aos="fade-up"
                               data-aos-offset="300"
                               data-aos-delay="600"
                               data-aos-duration="1000"
                               data-aos-easing="ease-in-out"
                               data-aos-once="false"

                          >

                          <img src={b2}onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                           className={servisStyles.mainDiv_imagesRight_imag1}
                            />


                          <img src={b13} onMouseOver={this.umanji} onMouseOut={this.uvecaj} 
                           className={servisStyles.mainDiv_imagesRight_imag1}
                          />



                          </div>



        
                            </div>
              
      
      
                  <div className={servisStyles.prazanDiv}>

                 </div>
            

             
            </div>
        )
    }
}
