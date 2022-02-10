import React, { Component } from 'react'

import kontaktStyles from '../../styles/Kontakt.module.css'
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


            <div  className={kontaktStyles.headline}>
                Kontakt

            </div>





            <div  className={kontaktStyles.firstDiv}>

            <iframe 
      
            className={kontaktStyles.firstDiv_items}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.7466160786526!2d19.8324705154579!3d45.252916355537735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b119549ec7175%3A0xf061dc7755f86c90!2sFreedom%20Bike!5e0!3m2!1sen!2srs!4v1624907459579!5m2!1sen!2srs"  width="100%" height="100%" style={{borderRadius:'7px'}}  loading="lazy"></iframe>
             
             


                  


              
                           
              <Form onSubmit={this.sendEmailAndMessage} 
               className={kontaktStyles.firstDiv_items}
       
              >


                   <FormGroup style={{width:"90%"}}>
                    {/* <FormLabel className="float-left text-light">Ime I prezime</FormLabel> */}
                    <FormControl type="text" name="ime" placeholder="Ime i Prezime..." required={true}  />

                    </FormGroup>


                   <FormGroup style={{width:"90%"}}>
                    {/* <FormLabel className="float-left text-light">Email</FormLabel> */}
                    <FormControl type="email" name="email" placeholder="Email..." required={true}  />

                    </FormGroup>

                     <Form.Group controlId="exampleForm.ControlTextarea1" style={{width:"90%"}}>
                     {/* <FormLabel className="float-left text-light">Poruka</FormLabel> */}

                     <Form.Control as="textarea" placeholder="Posalji poruku..." rows="4" name="poruka"/>
                     
                    </Form.Group>

                    <Button  className="float-right bg-light text-dark" size='md' type="submit"> Send</Button>
              
                     </Form>
                    


            </div>






            <div  className={kontaktStyles.secondDiv}>

                <div className={kontaktStyles.secondDiv_items}>
                  Ćirpanova 8, Novi Sad

                </div>

           

                <div className={kontaktStyles.secondDiv_items30}>
                <a href ="https://www.instagram.com/freedombikeshop/?hl=en"><FaFacebook  className="text-light h2"/></a>

                </div>
                
                <div className={kontaktStyles.secondDiv_items}>
                +381/060-373-33-64

                </div>


                <div className={kontaktStyles.secondDiv_items30}>
                <a href ="https://www.instagram.com/freedombikeshop/?hl=en"><FaInstagram  className="text-light h2"/></a>

                </div>

            </div>







           {/* <div className={kontaktStyles.threedDiv}>

       
            <Table striped responsive bordered hover variant="dark">
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
                  </div>
                               */}


               



                <div className={kontaktStyles.prazanDiv}>

                </div>






                    



            </div>


           
        )
    }
}
