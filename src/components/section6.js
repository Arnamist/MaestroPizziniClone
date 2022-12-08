import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import styled from "styled-components";

export default function Section6() {
    return(
        <Box1>
            <ImagedDiv1>
                <Container>
                    <h1>Quick Delivery</h1>
                    <h2>ORDER A</h2>
                    <h2>PIZZA NOW</h2>
                    <h3><br/>Investigationes demonstraverunt lectores legere me lius</h3>
                    <h3>quod ii legunt saepius. Claritas est etiam processus.</h3>
                    <Box component="form" noValidate autoComplete="off" 
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '30ch', height: '5ch' }, 
                        '& label': { paddingLeft: (theme) => theme.spacing(2) },
                        '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                        '& fieldset': { paddingLeft: (theme) => theme.spacing(2.5), borderRadius: '30px', },
                    }}>
                        <div>
                            <TextField label="First Name" variant="outlined" />
                            <TextField label="Last Name" variant="outlined" />
                        </div>
                        <div>
                            <Box component="form" noValidate autoComplete="off" sx={{'& .MuiTextField-root': { m: 1.5, width: '63ch'  }}}>
                                <TextField label="Enter Street Address" variant="outlined" />
                            </Box>
                        </div>
                        <div>
                        <TextField label="Apartment / Room" variant="outlined" />
                        <TextField label="Phone Number" variant="outlined" />
                        </div>
                        <div>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">PizzaType</InputLabel>
                                <Select sx={{ m: 1.5, width: '61ch' }} disableUnderline>
                                    <MenuItem value=""><em>Pizza Type</em></MenuItem>
                                    <MenuItem value={0}>Pizza Biscuit Bake</MenuItem>
                                    <MenuItem value={1}>Pizza Margeritta</MenuItem>
                                    <MenuItem value={2}>Pizza Proscuitto</MenuItem>
                                    <MenuItem value={3}>Pizza Low Carb</MenuItem>
                                    <MenuItem value={4}>Pizza Del Sole</MenuItem>
                                </Select>
                            </FormControl>
                            
                        </div>
                        <Box component="form" noValidate autoComplete="off" 
                            sx={{
                                '& .MuiTextField-root': { m: .5, width: '30ch', height: '5ch' }, 
                                '& label': { paddingLeft: (theme) => theme.spacing(2) },
                                '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                                '& fieldset': { paddingLeft: (theme) => theme.spacing(2.5), borderRadius: '30px', },
                            }}
                        >
                        <div>
                            <TextField type="number" id="margin-dense" label="Enter Number" variant="outlined" />
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select sx={{ m: .5, width: '32ch' }} disableUnderline>
                                <MenuItem value=""><em>Size</em></MenuItem>
                                <MenuItem value={0}>Small 10/25cm</MenuItem>
                                <MenuItem value={1}>Medium 12/30cm</MenuItem>
                                <MenuItem value={2}>Large 14/35cm</MenuItem>
                                <MenuItem value={3}>X-Large 16/40cm</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        </Box>
                        <RedBtn>QUICK DELIVERY</RedBtn>
                    </Box>

                </Container>
            </ImagedDiv1>
           
        </Box1>
    )
    
}

const Box1 = styled.div`
    height: 750px;  
    display: flex;
    
`
const ImagedDiv1 = styled.div`
	width: 100%;
	height: 750px;
	background-image: url(images/maestropizzini-contact-bg.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
const Container = styled.div`
    width: 600px;
    height: 650px;
    text-align: left;
    margin-top: 30px;
    margin-left: 190px;
    h1{
        color:gray;
        margin: 3px 0;
        padding:0;
        font-size: 32px;
        line-height: 4rem;
    }
    h2{
        margin: 0px 0;
        font-weight: 650;
        font-size: 42px;  
        line-height: 3rem ;
    }
    h3{
        color: grey;
        font-size: 18px; 
        font-weight: 400; 
        line-height: .5rem;
    }    
`
const RedBtn = styled.button`
    margin-top: 10px;
    margin-left: 10px;
    height: 55px;
    width: 90%;
    font-weight: bold;
    font-size: 1rem;
    background-color: rgb(255, 69, 79);
    padding: 12px 24px;
    border-radius: 100px;
    color: white;
    border: none;
`