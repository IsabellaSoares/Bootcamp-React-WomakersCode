import React from 'react';
import { Col, Card } from 'antd';

const gridStyle = {
    width: 300,
    margin: 'auto',
};

function MovieCard({ title, description }) {
	return (
		<Col span={8}>
			<Card title={title} bordered={true} style={gridStyle}>
				<p>{description}</p>
			</Card>
		</Col>
	);
}

export default MovieCard;
