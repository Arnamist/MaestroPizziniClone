import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Footer(){
	return(
        <Center>
            <Container>
                <Top>
                    <Sc1>
                        <h1>About us</h1>
                        <h2>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Eodem </h2>
                        <h2>modo typi, qui nunc nobis videntur. Investigationes demonstraverunt lectores legere me </h2>
                        <h2>lius quod ii legunt saepius. Investigationes demonstraverunt lectores.</h2>
                        <br/>
                        <Container2><h3>Monday to Saturday:&nbsp;</h3><h2> 9.00 am to 9.00 pm</h2></Container2>
                        <Container2><h3>Sunday:&nbsp;</h3><h2>10.00 am to 6.00 pm</h2></Container2>
                    </Sc1>
                    <Sc2>
                        <h1>Quick Links</h1>
                        <h2><a href="/"> {'>'} Need help? Contact us</a></h2>
                        <h2><a href="/"> {'>'} Our latest news</a></h2>
                        <h2><a href="/"> {'>'} About us page</a></h2>
                        <h2><a href="/"> {'>'} Table booking</a></h2>
                        <h2><a href="/"> {'>'} Fast delivery</a></h2>
                    </Sc2>
                    <Sc3>
                        <h1>Recepies</h1>
                        <h2><a href="/"> {'>'} Pizza Biscuit Bake</a></h2>
                        <h2><a href="/"> {'>'} Pizza Margeritta</a></h2>
                        <h2><a href="/"> {'>'} Pizza Prosciutto</a></h2>
                        <h2><a href="/"> {'>'} Pizza Low Carb</a></h2>
                        <h2><a href="/"> {'>'} Pizza Del Sole</a></h2>
                    </Sc3>
                    <Sc4>
                        <h1>Contact us</h1>
                        <h2><a href="/"><LocalPhoneIcon style={{ width: "20px", margin: " 0 5px" }} /></a>(+40) 74 0920 2288</h2>
                        <h2><a href="/"><EmailIcon style={{ width: "20px", margin: " 0 5px" }} /></a>office@example.com</h2>
                        <h2><a href="/"><LocationOnIcon style={{ width: "20px", margin: " 0 5px" }} /></a>New York 11673</h2>
                        <Container2>
                            <a href="/"><FacebookIcon style={{ width: "20px", margin: "10px 5px 0px 10px" }} /></a>
						    <a href="/"><GoogleIcon style={{ width: "20px", margin: "10px 5px 0px 5px" }} /></a>
						    <a href="/"><InstagramIcon style={{ wwidth: "20px", margin: "10px 5px 0px 5px" }} /></a>
                        </Container2>
                    </Sc4>
                </Top>
            </Container>
            <Container>
                <Bottom>
                    <div>
                        <h5>Copyright by ModelTheme. All Rights Reserved.</h5>
                        
                    </div>
                </Bottom>
            </Container>
           
        </Center>
    )
}

const Center = styled.div`
background-color: #252525;
color: white;
width: 100%;
height: 450px;
margin: 0;
padding: 0;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Top = styled.div`
    height: 350px;
    width: 80%;
    text-align: left;
    display: flex;
    justify-content: top;
    align-items: center;
    h1{
        margin-left: 10px;
        font-size: 25px;
    }
    h2{
        font-size: 15px;
        font-weight: 200;
        margin: 0.25rem;
    }
    h3{
        font-size: 15px;
        font-weight: 600;
    }
    a{
        text-decoration: none;
        color: white;
        line-height: 1.5rem;
    }
`
const Bottom = styled.div`
    justify-content:center;
    align-items: center;
    border-top: 2px solid grey;
    width: 80%;
    height: 100px;
    h5{
        font-size: 18px;
        font-weight: 400;
    }
    
`
const Sc1 = styled.div`
    padding-top: 120px;
    width: 600px;   
    height:100%; 
`
const Container2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h3{
        margin: 0;  
    }
    h2{
        margin: 0;
    }   
`
const Sc2 = styled.div`
    padding-top: 120px;
    width: 200px;
    height:100%; 
`
const Sc3 = styled.div`
    padding-top: 120px;
    width: 200px;
    height:100%; 
`
const Sc4 = styled.div`
    padding-top: 120px;
    width: 200px;
    height:100%; 
    h2{
        line-height: 1.5rem;
    }
`