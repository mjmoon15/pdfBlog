import React, { Fragment } from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
	tableWrapper: {
		flex: 1,
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		paddingBottom: 10,
		marginBottom: 25,
		fontSize: 11,
		borderTop: '3 solid #494949',
	},
	tableHeader: {
		paddingBottom: 5,
		backgroundColor: "#fff",
		color: '#000',
		width: '100%',
		fontSize: 12,
		fontFamily: 'Helvetica Neue Medium'
	}, 
	columnHeader: {
		display: 'flex',
		flexWrap: 'wrap',
		borderBottom: '1 solid #494949',
		textAlign: 'left',
		fontFamily: 'Helvetica Neue Bold',
	},
	rowVal: {
		color: 'black', 
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		fontFamily: 'Helvetica Neue',
	}
});


const StandardTableView = ({tableData, columns}) => {
	return (
		<Fragment>
			{columns?.map((header, index) => {
				let borderRight = index === columns?.length - 1 ? '1 solid #808080' : 'none'
				return (
					<Text key={index} style={{...styles.columnHeader, width: header?.width, borderRight: borderRight}}>
						{header?.label}
					</Text>
				)
			})}
			{tableData?.map((data, rowIndex) => {
				let lastRow = rowIndex == tableData?.length - 1 ? true : false
				const row = columns?.map((column) => {
					return {
						...column,
						value: data?.column?.name,
						lastRow: lastRow
					}
				})
				return row?.map((item, valueIndex)=> {
					let borderRight = valueIndex === row?.length - 1 ? '1 solid #808080' : 'none'
					
					return (
						<Text 
							wrap={false}
							key={valueIndex}
							style={{
								...styles.rowVal, 
								width: item?.width,
								borderRight: borderRight,
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}
						>
						</Text>
					)
				})
			})}
		</Fragment>
	)
}

export default StandardTableView