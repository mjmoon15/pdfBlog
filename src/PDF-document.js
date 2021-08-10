import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Header from './Header/header.js'
import Footer from './Footer/footer.js'
import SampleTable from './Table/table.js'

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
		justifyContent: 'space-between'
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
			<View style={{flexDirection: 'row'}}>
				<View style={{width: '50%'}}>
					<Text>Test text here</Text>
				</View>
				<View style={{width: '50%'}}>
					{/*<SampleTable />*/}
					<Text>Test text here</Text>

				</View>
			</View>	
		</PageWrapper>
	</Document>
);

export default TestPDF