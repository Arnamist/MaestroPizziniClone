import styled from "styled-components"
import Sector1 from "./section7.1"

export default function Section7() {
    return(
        <Box>
            <ImagedDiv1/>
            <Content>
                <h1>Pizza Menu</h1>
                <h2>WELCOME TO </h2>
                <h2>MAESTRO PIZZINI</h2>
                <br/><br/><br/>
                <Sector1 image="images/pizza6.png" title="Low Carb Pizza" price="34" />
                <Sector1 image="images/pizza5.png" title="Pizza Biscuit Bake" price="25" />
                <Sector1 image="images/pizza4.png" title="Crazy Crust Pizza" price="49" />
                <Sector1 image="images/pizza3.png" title="Beer Pizza Crust" price="39" />
                <Sector1 image="images/pizza2.png" title="Pizza Prosciutto" price="19" />
                <Sector1 image="images/pizza1.png" title="Pizza Margeritta" price="9" />
            </Content>
        </Box>
    )
    
}

const Box = styled.div`
    height: 1600px;   
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  	align-items: top;
`
const Content = styled.div`
    z-index: 2;
    position: absolute;
    font-weight: 700;
    text-align: center;
    color: white;
    margin-top: 4rem;
    width: 80%;
    
    h1{
        margin: 3px 0;
        padding:0;
        font-size: 33px;
        line-height: 4rem;
    }
    h2{
        margin: 0px 0;
        font-weight: 650;
        font-size: 45px;  
        line-height: 3rem ;
    }
`
const ImagedDiv1 = styled.div`
	position: absolute;
	z-index: 1;
    height: 100%; 
    width: 100%;
	background-image: url(images/pizza-home-section3-background.jpg);
	background-position: center;
    background-size: cover;
`