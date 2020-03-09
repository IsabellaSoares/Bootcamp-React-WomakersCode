import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import { cardStyle, selectHeadStyle } from './Styles';

function MovieCard({ movie, index }) {
	return (
		<Col span={8}>
			<Link to={`/movie/${movie.id}`}>
				<Card
					hoverable
					title={movie.title}
					bordered={true}
					headStyle={selectHeadStyle(index)}
					bodyStyle={{ maxHeight: '222px' }}
					style={cardStyle}
				>
					<p>{movie.description}</p>
				</Card>
			</Link>
		</Col>
	);
}

export default MovieCard;
