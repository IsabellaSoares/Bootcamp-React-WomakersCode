import React from 'react';
import { Col, Card } from 'antd';

const cardStyle = {
    width: 380,
    margin: 'auto',
    borderRadius: '12px'
};

const headStyle = {
    backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    borderRadius: '12px 12px 0 0'
};

function MovieCard({ title, description }) {
	return (
		<Col span={8}>
            <Card 
                title={title}
                bordered={true}                
                headStyle={headStyle}
                style={cardStyle}
                >
				<p>{description}</p>
			</Card>
		</Col>
	);
}

export default MovieCard;
