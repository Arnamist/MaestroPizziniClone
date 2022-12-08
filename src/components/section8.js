import styled from "styled-components"
import Sector2 from "./section8.1"

export default function Section8() {
    return(
        <Box>
            <ImagedDiv1/>
            <Content>
                <h1>Pizza Menu</h1>
                <h2>WELCOME TO </h2>
                <h2>MAESTRO PIZZINI</h2>
                <br/><br/><br/>
                <Sector>    
                    <Sector2 image="images/pizza1.png" title="Pizza Margeritta" price="39" /> 
                    <Sector2 image="images/pizza2.png" title="Pizza Prosciutto" price="25" />
                    <Sector2 image="images/pizza3.png" title="Beer Pizza Crust" price="49" />
                    <Sector2 image="images/pizza4.png" title="Crazy Crust Pizza" price="25" />
                    <Sector2 image="images/pizza5.png" title="Pizza Biscuit Bake" price="29" />
                    <Sector2 image="images/pizza6.png" title="Low Carb Pizza" price="49" />
                </Sector>
            </Content>
        </Box>
    )
    
}

const Box = styled.div`
    height: 1350px;   
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  	align-items: top;
`
const Content = styled.div`
    height: 100%;
    z-index: 2;
    position: absolute;
    font-weight: 700;
    text-align: center;
    margin-top: 4rem;
    width: 80%;
    h1{
        margin: 3px 0;
        padding:0;
        font-size: 33px;
        line-height: 4rem;
        color: grey;
    }
    h2{
        margin: 0px 0;
        font-weight: 650;
        font-size: 42px;  
        line-height: 3rem ;
    }
`
const ImagedDiv1 = styled.div`
	position: absolute;
	z-index: 1;
    height: 100%; 
    width: 100%;
	background-image: url(images/fastfood-home-section3-background-1.jpg);
	background-position: center;
    background-size: cover;
`
const Sector = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
`