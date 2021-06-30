import React, { Component } from 'react'

import kontaktStyles from '../styles/Kontakt.module.css'
import{Container,Row,Col,Form,FormGroup,FormControl,FormLabel,Button,Table} from 'react-bootstrap'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import{FiHexagon}from 'react-icons/fi'
import emailjs from 'emailjs-com';

export default class Kontakt extends Component {

    constructor(){
        super()
        this.sendEmailAndMessage=this.sendEmailAndMessage.bind(this)
    }


    sendEmailAndMessage(p){
		p.preventDefault();
       


		
	
		emailjs.sendForm('service_9he16kt','template_yddrc99',p.target,'user_2OTsAwy2951Sy3BzNYSHp')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		p.target.reset()

	}





    render() {
        return (

            <div className={kontaktStyles.kontaktDiv} id="kontakt">
            <div className={kontaktStyles.kontaktDrugiDiv}>
                <Container>
                    <Row>
                        <Col xs={12} className="text-center h4 text-light">
                           
                            <br></br>
                            Kontakt
                         
                            </Col>

                            <Col md={6} className={kontaktStyles.kontaktSlika} data-aos="fade-down"
                                data-aos-offset="300"
                                data-aos-delay="300"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-once="false"
                                >
                                <br></br>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7466160786526!2d19.8324705154579!3d45.252916355537735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b119549ec7175%3A0xf061dc7755f86c90!2sFreedom%20Bike!5e0!3m2!1sen!2srs!4v1624907459579!5m2!1sen!2srs" width="100%" height="100%" style={{borderRadius:'7px'}}  loading="lazy"></iframe>

                            </Col>

                            <Col md={6} className={kontaktStyles.kontaktSlika}
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-delay="900"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-once="false">
                                <br></br>
                                <Form onSubmit={this.sendEmailAndMessage}>


                                <FormGroup>
                  <FormLabel className="float-left text-light">Ime I prezime</FormLabel>
                  <FormControl type="text" name="ime" placeholder="Ime i Prezime..." required={true}  />

              </FormGroup>
		

              <FormGroup>
                  <FormLabel className="float-left text-light">Email</FormLabel>
                  <FormControl type="email" name="email" placeholder="Email..." required={true}  />

              </FormGroup>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <FormLabel className="float-left text-light">Poruka</FormLabel>
                        
                        <Form.Control as="textarea" placeholder="Posalji poruku..." rows="6" name="poruka"/>
                    </Form.Group>
                    <Button className="float-right bg-light text-dark btn-sm" type="submit"> Send</Button>
                </Form>





                                </Col>

                                <Col className="text-light text-center" md={6}>
                                <br></br>
                                <br></br>
                                
                               <span className="text-warning">Adressa:</span> Ćirpanova 8, Novi Sad
                                </Col>

                                <Col className="text-light text-center" md={6}>
                                <br></br>
                                <br></br>
                                
                               <span className="text-warning">Broj Telefona:</span> +381/060-373-33-64
                                </Col>
                                <Col className="text-light text-center" xs={6}>
                                <br></br>
                                
                                <span className="text-warning">Instagram:</span> <a href ="https://www.instagram.com/freedombikeshop/?hl=en"><FaInstagram  className="text-light h2"/></a>
                                </Col>

                                <Col className="text-light text-center" xs={6}>
                                <br></br>
                                
                                <span className="text-warning">Facebook:</span> <a href ="https://www.instagram.com/freedombikeshop/?hl=en"><FaFacebook  className="text-light h2"/></a>
                                </Col>



                                <Col className="text-light text-center " md={12}>
                                <br></br>
                                <Table striped bordered hover variant="dark">
                                        <thead>
                                     <tr>
                                   <th colSpan="2">Radno vreme</th>
     
                                    </tr>
                                      </thead>
                                      <tbody>

                                        <tr>
                                  <td>Ponedeljak</td>
                                 <td>10:00-20:00</td>
                                     </tr>

                                 <tr>
                                  <td>Utorak</td>
                                  <td>10:00-20:00</td>
                               </tr>

                                <tr>
                                <td>Sreda</td>
                                 <td>10:00-20:00</td>
                                </tr>

                                <tr>
                            <td>Četvrtak</td>
                             <td>10:00-20:00</td>
                               </tr>
     

  
                          <tr>
                            <td>Petak</td>
                            <td>10:00-20:00</td>
                           </tr>

                         <tr>
                            <td>Subota</td>
                            <td>09:00-16:00</td>
                          </tr>

                          <tr>
                             <td>Nedelja</td>
                            <td>Zatvoreno</td>
                             </tr>
                       </tbody>
                  </Table>
                              

                                </Col>
                                <Col xs={12} className="text-light text-center h5">
                                    <br></br>
                                    <br></br>
                                   
                                      All Rights Reserved || <a href="https://gogadesign.uk/" className="text-light"> gogaDesign<FiHexagon className="text-danger" /></a>2021 
                                 
                                </Col>


                      
                     


                          
                    </Row>
                </Container>
            

                </div>
            </div>


           
        )
    }
}
