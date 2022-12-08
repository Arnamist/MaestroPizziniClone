import React from 'react'
import Footer from './footer'
import Header from './header'
import styled from 'styled-components'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import Section4 from './section4'
import Section5 from './section5'
import Section6 from './section6'
import Section7 from './section7'
import Section8 from './section8'
export default function Home(){
	return(
		<div>
			<Contain>
				<ImagedDiv1></ImagedDiv1>
				<Con1>
					<Header></Header>
					<Section1></Section1>
				</Con1>		
				
			</Contain>
			<Section2></Section2>
			<Section3></Section3>
			<Section4></Section4>
			<Section5></Section5>
			<Section6></Section6>
			<Section7></Section7>
			<Section8></Section8>
			<Footer></Footer>
		</div>		
	)
}
const Contain = styled.div`
	position: relative;
	width: 100%;
	height: 850px;	
`
const ImagedDiv1 = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 850px;
	background-image: url(images/theme_maestropizzini_slider1_bg.jpg);
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
`
const Con1 = styled.div`
	position: absolute;
	width: 100%;
	z-index: 10;
`