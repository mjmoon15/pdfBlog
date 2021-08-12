import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Canvas } from '@react-pdf/renderer';
import Header from './Header/header.js'
import Footer from './Footer/footer.js'
import SampleTable from './Table/table.js'
import sampleImage from './images/desertSample.jpg'

// Create styles
const styles = StyleSheet.create({
		document: {
		display: 'flex',
		width: '100%', 
		height: '100%'
	},
	page: {
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
	pageWrapper: {
		padding: 25,
		position: 'absolute',
		justifyContent: 'space-around'
	}
});

const PageWrapper = (props) => {
	return (
		<Page size="Letter" style={styles.pageWrapper}>
			<Header />
				{props.children}
			<Footer />
		</Page>
	)
}

const TestPDF = () => (
	<Document>
		<PageWrapper>
			<View style={{flexDirection: 'column'}}>
				<View style={{flexDirection: 'row'}}>
					<View style={{width: '50%', padding: 5}}>
						<Text style={{fontSize: 9}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</Text>
					</View>
					<View style={{width: '50%', padding: 5}}>
						<Image src={sampleImage} />
					</View>
				</View>
				<View style={{flexDirection: 'row', padding: 20}}>
					<View style={{width: '50%', paddingTop: 20, paddingRight: 10}}>
						<Canvas 
							style={{availableWidth: 100, availableHeight: 100, backgroundColor: 'black'}} 
							paint={painter =>
								painter
								.moveTo(3, 87)
								.lineTo(87, 3)
								.lineTo(50, 125)
								.lineTo(125, 50)
								.lineTo(100, 125)
								.fill('green')
								.moveTo(75, 75)
								.lineTo(62, 100)
								.lineTo(100, 62)
								.lineTo(112, 87)
								.fill('red')
								.moveTo(62, 112)
								.lineTo(75, 112)
								.lineTo(125, 100)
								.lineTo(62, 130)
								.fill('blue')
						}/>
					</View>
					<View style={{width: '50%', padding: 5}}>
						<SampleTable />
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={{width: '50%', padding: 5}}>
						<Text style={{fontSize: 9}}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
						</Text>
					</View>
				</View>
			</View>
		</PageWrapper>
	</Document>
);

export default TestPDF