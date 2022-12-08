import styled from "styled-components"

export default function Sector1(props) {
    return(
        <Sector>
            <Right><img src={props.image} alt="pizza" /></Right>
            <Center>
                <h1>{props.title}</h1>
                <h4>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros </h4>
                <h4>sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</h4>
            </Center>
            <Left>${props.price}</Left>
        </Sector>
    )
    
}
	
const Sector = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: left;
    border-top: 2px dashed grey;
    border-bottom: 2px dashed grey;
    font-weight: 200;
    h1{
        line-height: 4rem;
        font-size: 25px;
    }
    h4{
        font-size: 18px;
        font-weight: 200;
        line-height: 2px;
        
    }
`

const Right = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-right: 2rem;
    img{
        width: 180px;
        height: 180px;
    } 
`
const Center = styled.div`
    width: 1000px;
    height: 200px;
`
const Left = styled.div`
    display: flex;
    width: 200px;
    height: 130px;
    justify-content:center;
    align-items: center;
    margin-right: 3rem;
    text-align: right;
    font-size: 45px;
    font-weight: 400;
`