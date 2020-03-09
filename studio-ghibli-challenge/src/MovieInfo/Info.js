import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Row, Col, Spin, Card } from 'antd';
import Header from '../Header';
import { cardStyle, descriptionStyle, gridStyle, selectHeadStyle } from './Styles';

function MovieInfo () {
    const params = useParams();
    const movieId = params.id;
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    fetch('https://ghibliapi.herokuapp.com/films/' + movieId, {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        setMovie(data);
        setLoading(false);
    }).catch(function(err) { console.log(err) });

    return(
        <div className="App">
            <Header />
            {
                loading ? ( <Spin size="large" /> ) : (
                    <Row justify="center">
                        <Col span={21}>
                            <Card
                                title={movie.title}
                                bordered={true}
                                headStyle={selectHeadStyle()}
                                style={cardStyle}
                            >
                                <Card.Grid
                                    hoverable={false}
                                    style={descriptionStyle}
                                >
                                    {movie.description}
                                </Card.Grid>
                                <Card.Grid
                                    hoverable={false}
                                    style={gridStyle}
                                >
                                    <strong>Avaliação:</strong> {movie.rt_score}
                                </Card.Grid>
                                <Card.Grid
                                    hoverable={false}
                                    style={gridStyle}
                                >
                                    <strong>Data de lançamento:</strong> {movie.release_date}
                                </Card.Grid>
                                <Card.Grid
                                    hoverable={false}
                                    style={gridStyle}
                                >
                                    <strong>Diretor:</strong> {movie.director}
                                </Card.Grid>
                                <Card.Grid
                                    hoverable={false}
                                    style={gridStyle}
                                >
                                    <strong>Produtor:</strong> {movie.producer}
                                </Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </div>
    );
}

export default MovieInfo;