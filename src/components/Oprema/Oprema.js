import React, { Component } from 'react'
import opremaStyles from '../../styles/Oprema.module.css'
import{Container,Row,Col } from 'react-bootstrap'

import b14 from '../../img/b14.jpg'
import b3 from '../../img/b3.jpg'
import b7 from '../../img/b7.jpg'


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
               
               <div className={opremaStyles.headline}>
                   Oprema
               </div>
         
          <div className={opremaStyles.main_div}>

              <div className={opremaStyles.main_div_firstRow}>
              <img src={b3} alt='' 
                className={opremaStyles.main_div_firstRow_images}
                onMouseOver={this.umanji} onMouseOut={this.uvecaj} 
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
               />

              <img src={b14}  alt='' 
              className={opremaStyles.main_div_firstRow_images}
                onMouseOver={this.umanji} onMouseOut={this.uvecaj} 
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-delay="600"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              />

              <img src={b7}  alt=''
               className={opremaStyles.main_div_firstRow_images}
               onMouseOver={this.umanji} onMouseOut={this.uvecaj} 
               data-aos="fade-down"
               data-aos-offset="300"
               data-aos-delay="900"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-once="false"

               />


              </div>

              <div className={opremaStyles.main_div_secondRow}>

                  <div className={opremaStyles.main_div_secondRow_headline}>
                  Naši Partneri
                  </div>

            
                  <marquee loop direction="left"
                   className ={opremaStyles.slideMarquee}
                   scrollamount="20"
                   >
                  Suntour
                  Continental
                  Shimano
                  Bosch
                  Garmin
                  Magura
                  Schwalbe
                  Favero

                             </marquee>

                             <marquee  direction="right" className ={opremaStyles.slideMarquee}
                             scrollamount="10"
                              >
                  Suntour
                  Continental
                  Shimano
                  Bosch
                  Garmin
                  Magura
                  Schwalbe
                  Favero

                

                             </marquee>


                
              

                

                  </div>



          </div>







          <div className={opremaStyles.prazanDiv}>

          </div>
                            
        
               
            </div>
        )
    }
   
}
