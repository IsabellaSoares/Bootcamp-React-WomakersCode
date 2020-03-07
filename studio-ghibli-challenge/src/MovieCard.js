import React from 'react';
import { Col } from 'antd';

function MovieCard ({ title, description }) {
    return (
        <Col span={8}>{title}</Col>
    );
}

export default MovieCard;