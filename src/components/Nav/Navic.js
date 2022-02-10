import React, { Component } from 'react'
import{Container,Row,Col } from 'react-bootstrap'
import navicStyles from '../../styles/Navic.module.css'
import {GoThreeBars} from 'react-icons/go'
import Anime from 'react-anime'
import{ImCross} from 'react-icons/im'
import{Link} from 'react-scroll'

export default class Navic extends Component {
    constructor(){
        super()
        this.state={
            sredina:'',
            laz:false
        }
    }
    componentDidMount(){
        this.setState({
            laz:true
        })
  
    }
    render() {
        return (
            <div>
                {!this.state.laz ?
              <div>
                <div className={navicStyles.navicDiv} >
                    <Container>
                        <Row>
                            <Col xs={12} className="h6">
                            <ul className={navicStyles.ul}>
                               <Anime delay={(el,i)=>{return i*250}} duration={1200} translateX={[-450,0]} easing={'easeInOutQuint'}>
                              <Link 
                              to="pocetna"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={1500}
                              delay={1000}
                              isDynamic={true}
                              > <li onClick={()=>{
                                  setTimeout(() => {
                                    this.setState({
                                        laz:true
                                    })
                                      
                                  }, 1200);
                               
                              }}> Početna</li></Link>

                               <Link 
                              to="oNama"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={1500}
                              delay={1000}
                              isDynamic={true}
                              >    <li
                              onClick={()=>{
                                setTimeout(() => {
                                  this.setState({
                                      laz:true
                                  })
                                    
                                }, 1200);
                             
                            }}
                              >O nama</li></Link>

                           <Link 
                              to="galerija"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={1500}
                              delay={1000}
                              isDynamic={true}
                              >    <li
                              onClick={()=>{
                                setTimeout(() => {
                                  this.setState({
                                      laz:true
                                  })
                                    
                                }, 1200);
                             
                            }}
                              >Galerija</li>
                              </Link>

                           <Link 
                              to="servis"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={1500}
                              delay={1000}
                              isDynamic={true}
                              >    <li
                              onClick={()=>{
                                setTimeout(() => {
                                  this.setState({
                                      laz:true
                                  })
                                    
                                }, 1200);
                             
                            }}
                              >Servis</li></Link>

                         <Link 
                              to="oprema"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={1500}
                              delay={1000}
                              isDynamic={true}
                              >     <li>Oprema</li></Link>

                              <Link 
                              to="kontakt"
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={0}
                              duration={1500}
                              delay={1000}
                              isDynamic={true}
                              >    <li
                              onClick={()=>{
                                setTimeout(() => {
                                  this.setState({
                                      laz:true
                                  })
                                    
                                }, 1200);
                             
                            }}
                              >Kontakt</li></Link>
                               </Anime>
                           </ul>

                                 </Col>
                        </Row>
                    </Container>
               
                </div>
            <div id={navicStyles.bars}>
            <GoThreeBars className="bars h5"
                              onClick={()=>{
                                 let bars=document.querySelector('.bars')
                              
                                 bars.style.transform='rotate(360deg)'
                                 bars.style.transformOrigin='center'
                                 bars.style.transition='1200ms'
                              
                              
                         setTimeout(() => {
                            this.setState({
                           
                                laz:true
                            })
                           
                             
                         }, 2000);
                               
                        }
                      } 
                             />

            </div>
              
                </div>
           
                 :
                  <div className={navicStyles.navicDiv5procent}>
               
                         
      
                         <GoThreeBars className="bars h4 text-light" onClick={()=>{


                           let bars=document.querySelector('.bars')
                              
                           bars.style.transform='rotate(-360deg)'
                           bars.style.transformOrigin='center'
                        bars.style.transition='800ms'




                      
                           setTimeout(() => {
                            this.setState({
                              
                                laz:false
                            })
                           
                               
                           }, 1200);
                          
                       
                             
                     }
                   }  />
        




                      </div>

                    }
            



                
            </div>
        )
    }
}
