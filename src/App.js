import TestPDF from './PDF-document.js'
import { PDFViewer } from '@react-pdf/renderer'

function App() {
	return (
		<PDFViewer 
			style = {{
				width: '100%',
				height: '100vh'
			}}
		>
			<TestPDF />
		</PDFViewer>
	);
}

export default App;
