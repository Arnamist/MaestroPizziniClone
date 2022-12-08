import styled from "styled-components"

export default function Sector2(props) {
    return(
        <Items>
            <img src={props.image} alt="pizza" />
            <h5>{props.title}</h5>
            <h4>Nullam nibh sem, imperdiet ultrices</h4>
            <h4>commodo a, vulputate vel ligula. Duis</h4>
            <h4>venenatis at eros sed egestas. Mauris rutrum</h4>
            <h4>quam risus, vel hendrerit dui tempor in.</h4>
            <h3>${props.price}</h3>
        </Items>
    )
    
}
const Items = styled.div`
    width: 33%;
    h5{
        margin:0;
        margin-top: 20px;
        line-height: 1rem;
        font-size: 25px;
        color:black;
    }
    h3{
        font-size: 40px;
        font-weight: 400;
        margin: 0;
        margin-bottom: 30px;
    }
    h4{
        font-size: 18px;
        font-weight: 200;
        line-height: 2px;
        
    }
    img{
        width: 250px;
        height: 250px;
    } 
`