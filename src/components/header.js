import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useState } from 'react';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

export default function Header(){
	const [menuStatus, setMenuStatus] = useState(false);

	return(
		<Center>
			<TopMenu>
				<TopLeft>
					<ul>
						<li>Call Us:</li>
						<li><p>(+04) 743 323 424</p></li>
						<li></li>
						<li>Address:</li>
						<li><p>New York, Thomas Nolan 5322</p></li>
					</ul>
				</TopLeft>
				<TopRight>
					<ul>
						<li><a href="/"><FacebookIcon style={{ width: "15px"}} /></a></li>
						<li><a href="/"><GoogleIcon style={{ width: "15px"}} /></a></li>
						<li><a href="/"><InstagramIcon style={{ width: "15px"}} /></a></li>
						<li></li><li></li>
						<li><a href="/"><SearchIcon style={{ padding:0 }} /></a></li>
						<li><CustomMenuIcon style={{ padding:0 }} onClick = {() => setMenuStatus(true)}><MenuIcon /></CustomMenuIcon></li>
					</ul>
				</TopRight>
				<Hamburger open = {menuStatus} >
				<CloseWrapper>
					<CrossIcon onClick = {() => setMenuStatus(false)}/>
				</CloseWrapper>
				<BottomLeft>
						<a href='/'><img src="images/logo.png" alt="logo" /></a>
				</BottomLeft>
				<Box component="form" noValidate autoComplete="off" 
                    sx={{
                        '& .MuiTextField-root': { m: 1.5, width: '30ch', height: '5ch' }, 
                        '& label': { paddingLeft: (theme) => theme.spacing(2) },
                        '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                        '& fieldset': { paddingLeft: (theme) => theme.spacing(2.5), borderRadius: '30px', },
                    }}
				>
					<TextField label="Search..." variant="outlined" />
				</Box>
				<li>
					<h2>Recent Posts</h2>
					<div><a href="/"> {'>'} Restaurant Event Night</a></div>
					<a href="/"> {'>'} Pizza Delivery Menu</a>
				</li>
				<li>
					<h2>Recent Comments</h2>
				</li>
				<li>
					<h2>Archives</h2>
					<a href="/"> {'>'} January 2018</a>
				</li>
				<li>
					<h2>Categories</h2>
					<a href="/"> {'>'} Pizza</a>
				</li>
				<li>
					<h2>Meta</h2>
					<a href="/"> {'>'} Log in</a>
					<a href="/"> {'>'} Entries feed</a>
					<a href="/"> {'>'} Comments feed</a>
					<a href="/"> {'>'} WordPress.org</a>
				</li>
			</Hamburger>
			</TopMenu>
			<Divider></Divider>
			<BottomMenu>
				<BottomLeft>
						<a href='/'><img src="images/logo.png" alt="logo" /></a>
				</BottomLeft>
				<BottomRight>
					<ul>
						<li><a href="/">HOME</a></li>
						<li><a href="/">MENU</a></li>
						<li><a href="/">ABOUT</a></li>
						<li><a href="/">SHOP</a></li>
						<li><a href="/">NEWS</a></li>
						<li><a href="/">CONTACT</a></li>
					</ul>
				</BottomRight>
			</BottomMenu>
		</Center>
	)
}

const Center = styled.div`
	background-color: transparent;
	font-weight: 700;
	text-decoration: none;
	color: white;
	flex-direction: column;
	width: 100%;
	height: 120px;
	display: flex;
	align-items: center;
	z-index: 10;
	
	a{
		text-decoration: none;
		color: white;
		justify-content: center;
  		align-items: center;
	}
`
const TopMenu = styled.div`
	width: 71rem;
	height: 45px;
	display: flex;
	justify-content:space-between;
	align-items: flex-start;
	font-size: 14px;
	ul{
		display: flex;
		margin: 7px;
		padding:0;
	}
	li{
		list-style: none;
		padding-right: .5rem;
	}	
`
const BottomMenu = styled.div`
	width: 71rem;
	height: 67px;
	display: flex;
	padding:0;
	margin:0;
	justify-content:space-between;
	align-items: flex-end;
`
const Divider = styled.div`
	border-bottom: 1px solid darkgrey;
	min-width: 100%;
	margin:0;
	padding:0;
`
const TopRight = styled.div`
	ul{li{
		margin:0;
		padding:0 6px;
	}}
`
const TopLeft = styled.div`
	padding-top: 3px;
	ul{li{p{
		margin:0;
		font-weight: 400;
	}}}
`
const BottomLeft = styled.div`
img{
	width: 13rem;
}
`
const BottomRight = styled.div`
	ul{
		display: flex;
	}
	li{
		list-style: none;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`
const CustomMenuIcon = styled.button`
	background: transparent;
	border: transparent;
	color: white;
	font-weight: bold;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	cursor: pointer;
`
const Hamburger = styled.ul`
	position: fixed;
	border: transparent;
	color: black;
	background: #fff;
	width: 400px;
	height: 1900px;
	right: ${props => props.open ? 0 : '-410px'};
	transition: all 0.5s ease-in-out;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	z-index: 99;
	li{
		padding: 20px;
		text-align: left;
	}
	h2{
		border-bottom: 4px solid red;
	}
	a{ 
		color: black;
		font-weight: 200;
		opacity: 0.7;
	}
`
const CloseWrapper = styled.div`
	margin-top: 20px;
	margin-right: 20px;
	display: flex;
	justify-content: flex-end;
`
const CrossIcon = styled(CancelOutlinedIcon)`
	cursor: pointer;
	background: transparent;
	border: transparent;
	color: black;
`
