import styled from "styled-components"

export default function Section5() {
    return(
        <Box>
            <Container>
                <div>
                    <h1>120</h1>
                    <h2>Awesome Employees</h2>
                </div> 
                <div>
                    <h1>58</h1>
                    <h2>Piza Types</h2>
                </div>              
                <div>
                    <h1>1468</h1>
                    <h2>Satisfied Clients</h2>
                </div> 
                <div>
                    <h1>2031</h1>
                    <h2>Delivery</h2>
                </div> 
            </Container>
        </Box>
    )
    
}

const Box = styled.div`
    background-color: rgb(40 40 40);
    height: 310px;   
    width: 100%;
    margin-right: 600px;
    display: flex;
    justify-content: center;
  	align-items: center;
`
const Container = styled.div`
    color: white;
    padding: 0;
    margin: 0;
    text-align: left;    
    height: 100%;
    display:flex;
    justify-content: center;
	align-items: center;
    div{
        text-align: center;
        width: 200px;
        margin: 50px;
        h1{
            font-size: 60px;
            font-weight: bold;
            line-height: .5rem;
        }
        h2{
            font-size: 20px;
            color: grey;
            font-weight: 200;
            line-height: .5rem;
        }
    }
`