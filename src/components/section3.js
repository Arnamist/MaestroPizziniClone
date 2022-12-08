import styled from "styled-components"

export default function Section3() {
    return(
        <Box>
            <ImagedDiv1></ImagedDiv1>
            <Content>
                <h1>Free Delivery With</h1>
                <h2>PIZZA OF THE DAY</h2>
                <h1>Only 8.99 USD</h1>
                <RedBtn>CALL NOW</RedBtn>
            </Content>
        </Box>
    )
    
}

const Box = styled.div`
    height: 520px;   
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  	align-items: center;
`
const ImagedDiv1 = styled.div`
	position: absolute;
	z-index: 1;
    height: 520px;   
    width: 100%;
	background-image: url(images/maestropizzini-freedelivery-bg.jpg);
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
const Content = styled.div`
    z-index: 2;
    position: absolute;
    font-weight: 700;
    text-align: center;
    color: white;
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
        line-height: 4rem ;
    }
`

const RedBtn = styled.button`
    margin-top: 20px;
    height: 55px;
    width: 180px;
    font-weight: bold;
    font-size: 1rem;
    background-color: rgb(255, 69, 79);
    padding: 12px 24px;
    border-radius: 100px;
    border: none;
    color: white;
`
