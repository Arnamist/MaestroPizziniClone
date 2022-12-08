
import styled from "styled-components";

export default function Section1() {
    return(
        <Box>
            <Content>
                <h1>Pizza Delivery</h1>
                <h2>MAESTRO PIZZINI</h2>
                <div>
                    <h3>Lorem ipsum dolor sit amet, consectetuer</h3> 
                    <h3>adipiscing elit, sed diam nonummy nibh</h3>
                    <h3>euismod ut laoreet dolore magna.</h3>
                </div>
                <div>
                    <RedBtn>DELIVERY NOW</RedBtn>
                </div>
                
            </Content>
        </Box>
    )
    
}

const Box = styled.div`
    background-color: transparent;
    z-index:11;
  	align-items: center;
    height: 600px;    
    display: flex;
`
const Content = styled.div`
    color: white;
    margin-left: 190px;
    font-weight: 700;
    text-align: left;
    width: 600px;
    height: 500px;    
    h1{
        margin: 3px 0;
        padding:0;
        font-size: 50px;
        line-height: 7rem;
    }
    h2{
        margin: 0px 0;
        font-weight: 1000;
        font-size: 85px;  
        line-height: 5rem ;
    }
    h3{

        font-size: 25px; 
        font-weight: 400; 
        line-height: .5rem;
    }
    div{
        margin-top: 40px;
    }
`
const RedBtn = styled.button`
    margin-top: 10px;
    height: 55px;
    width: 180px;
    font-weight: bold;
    font-size: 0.8rem;
    background-color: rgb(255, 69, 79);
    padding: 12px 24px;
    border-radius: 100px;
    color: white;
    border: none;
`