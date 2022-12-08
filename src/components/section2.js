import styled from "styled-components"

export default function Section2() {
    return(
        <Box>
            <Container>
              <div>
                <Content2>
                    <h1>About Us</h1>
                    <h2>WELCOME TO </h2>
                    <h2>MAESTRO PIZZINI</h2>
                    <h3>Investigationes demonstraverunt lectores legere me lius</h3> 
                    <h3>quod ii legunt saepius. Claritas est etiam processus dynaus,</h3>
                    <h3>quise sequitur mutationem consuetudium lectorum.</h3>
                    <RedBtn>READ MORE</RedBtn>
                </Content2>
              </div>
              <div><ImagedDiv2></ImagedDiv2></div>
            </Container>
        </Box>
    )
    
}

const Box = styled.div`
    height: 525px;   
    width: 100%;
    margin-right: 600px;
    display: flex;
    justify-content: center;
  	align-items: center;
`
const Container = styled.div`
    padding: 0;
    margin: 0;
    font-weight: 700;
    text-align: left;    
    width: 1150px;
    height: 350px;
    display:flex;
    justify-content:space-between;
	align-items: flex-start;
    div{
        width: 560px;
        height: 350px;
    }
`
const Content2 = styled.div`
    font-weight: 700;
    text-align: left;
    h1{
        color:gray;
        margin: 3px 0;
        padding:0;
        font-size: 30px;
        line-height: 4rem;
    }
    h2{
        margin: 0px 0;
        font-weight: 650;
        font-size: 40px;  
        line-height: 3rem ;
    }
    h3{
        color: grey;
        font-size: 18px; 
        font-weight: 400; 
        line-height: .5rem;
    }
`
const ImagedDiv2 = styled.div`
	position: absolute;
	z-index: 1;
	background-image: url(images/maestropizzini-aboutus-bg-1.jpg);
    background-size: cover;
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
    color: white;
    border: none;
`
