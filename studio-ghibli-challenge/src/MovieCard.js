import React from 'react';
import { Col, Card } from 'antd';
import './App.css';

const cardStyle = {
	width: '95%',
	margin: 'auto',
	borderRadius: '12px',
	minHeight: '100%'
};

function selectHeadStyle(index) {
	if (index % 2 === 0) {
		return {
			backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
			borderRadius: '12px 12px 0 0'
		};
	} else if (index % 3 === 0) {
		return {
			backgroundImage: 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)',
			borderRadius: '12px 12px 0 0'
		};
	} else {
		return {
			backgroundImage: 'linear-gradient(120deg, #f3a0ff 0%, #ffbae5 100%)',
			borderRadius: '12px 12px 0 0'
		};
	}
}

function MovieCard({ title, description, index }) {
	return (
		<Col span={8}>
			<Card
				title={title}
				bordered={true}
				headStyle={selectHeadStyle(index)}
				bodyStyle={{ maxHeight: '222px' }}
				style={cardStyle}
			>
				<p>{description}</p>
			</Card>
		</Col>
	);
}

export default MovieCard;
