import React, { Component } from 'react'
import onamaStyles from '../styles/Onama.module.css'
import{Container,Row,Col } from 'react-bootstrap'
import b8 from '../img/b8.jpg'
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
                <div className={onamaStyles.onamaDrugiDiv}>
                <Container>
                    <Row>
                        <Col xs={12} className="h4 text-center  text-light">
                            <br></br>
                         
                            O nama 
                            <br></br>
                            <br></br>
                        </Col>
                        <Col md={12}>
                            <br></br>
                            <br></br>
                         
                            
                            </Col>

                        <Col md={6} className={onamaStyles.divSlika} 
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="false"
                         >
                            <br></br>
                            <br></br>
                            <img src={b8} onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                          
                             />
                    
                        </Col>
                        <Col md={6} className={onamaStyles.divText} onMouseOver={this.umanji} onMouseOut={this.uvecaj}
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
                    
                        </Col>

                        <Col xs={12} className="text-center text-light h5">
                            <br></br>
                         
                           Komentari
                            </Col>
                            <Col md={6} className={onamaStyles.divKomentari} onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false"
                            
                            >
                            <span className="text-center" > <RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" />  Pre mesec dana</span>
                                <br></br>
                                <br></br>
                              
                       
                            Servis za bicikle, ujedno i prodajno mesto, u širem centru grada. Rad je kvalitetan, cene prihvatljive, a pri tome nema prevelikog čekanja.
                            <br></br>
                       
                     
                            <span className="text-danger float-right">-Nikola T.</span>
                            </Col>


                            <Col md={6} className={onamaStyles.divKomentari2}onMouseOver={this.umanji} onMouseOut={this.uvecaj}
                                                     data-aos="fade-down"
                                                     data-aos-offset="300"
                                                     data-aos-delay="600"
                                                     data-aos-duration="1000"
                                                     data-aos-easing="ease-in-out"
                                                     data-aos-once="false"
                            >
                            <span className="text-center"><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" /><RiStarSFill className="text-warning" />  Pre tri meseca </span>
                                <br></br>
                                <br></br>
                              
                       
                                Super je ovaj servis! Baš su brzi i nisu skupi naročito za komplet godišji servis. Sve pohvale!
                            <br></br>
                       
                     
                            <span className="text-danger float-right">-Sofija M.</span>
                            </Col>



                      
                        
                 
                    </Row>
                </Container>
                </div>
                
            </div>
        )
    }
}
