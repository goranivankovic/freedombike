import React, { Component } from 'react'
import onamaStyles from '../../styles/Onama.module.css'
import{Container,Row,Col } from 'react-bootstrap'
import b8 from '../../img/b8.jpg'
import {RiStarSFill} from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Onama extends Component {
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
        AOS.init();
     
        return (
            <div className={onamaStyles.onamaDiv} id="oNama">


                <div className={onamaStyles.headline}>
                     O nama 
                </div>

              

               <div className={onamaStyles.mainDiv}>

                  


               <div className={onamaStyles.firstDiv}>
                
               <img src={b8} className={onamaStyles.slika} onMouseOver={this.umanji} onMouseOut={this.uvecaj}

                 data-aos="fade-up"
                 data-aos-offset="300"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-once="false"
               
               />

                  
                   <div className={onamaStyles.firstDiv_text_right}
               
                   onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                   data-aos="fade-up"
                   data-aos-offset="200"
                   data-aos-delay="600"
                   data-aos-duration="1000"
                   data-aos-easing="ease-in-out"
                   data-aos-once="false"
                   
                   >
                   Prepoznatljivi smo u gradu zbog našeg kvaliteta  marljivog rada i profesionalnog tima koji već godinama Novosađanima  pruža vrhunske usluge, fantastičnu ponudu i svakako kvalitetne savete.

Freedom Bike Shop je nastao 2020. godine kao rezultat višegodišnjeg  i internacionalnog iskustva građenog u segmentu prodaje i održavanja, tako i u takmičarskom segmentu na internacionalnom nivou.

Mi smo savršen spoj mladosti i iskustva. Naša pozitivna energija i sportski duh su kombinacija koja vam može pomoći.
                      


                   </div>

                   </div>



               </div>


               <div className={onamaStyles.comment}>



                  <div className={onamaStyles.comment_left}
                    onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                  >
     
           <div> <RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" />  Pre mesec dana </div>   
                            
                              
                       
                            Servis za bicikle, ujedno i prodajno mesto, u širem centru grada. Rad je kvalitetan, cene prihvatljive, a pri tome nema prevelikog čekanja.
                          
                       
                     
                            -Nikola T.

                </div>




                     

                <div className={onamaStyles.comment_right}
                 onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                 data-aos="fade-down"
                 data-aos-offset="300"
                 data-aos-delay="600"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-once="false"
                >

              <div> <RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" />  Pre tri meseca </div> 
                             
                              
                       
                             Super je ovaj servis! Baš su brzi i nisu skupi naročito za komplet godišji servis. Sve pohvale!
                        
                    
                  
                         -Sofija M.



                    </div>





               </div>



       
    
                         

       
                
            </div>
        )
    }
}
