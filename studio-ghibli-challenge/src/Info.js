import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Row, Col, Spin, Card } from 'antd';
import Header from './Header';

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

    const cardStyle = {
        borderRadius: '12px'
    };
    
    const descriptionStyle =  {
        fontSize: '16px',
        textAlign: 'center',
        width: '100%'
    };

    const gridStyle = {
        width: '25%',
        textAlign: 'center',
        padding: '12px 24px'
    };
    
    function selectHeadStyle() {
        const random = Math.random();

        if (random % 2 === 0) {
            return {
                backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
                borderRadius: '12px 12px 0 0',
                fontWeight: 'bold',
                fontSize: '20px'
            };
        } else if (random % 3 === 0) {
            return {
                backgroundImage: 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)',
                borderRadius: '12px 12px 0 0',
                fontWeight: 'bold',
                fontSize: '20px'
            };
        } else {
            return {
                backgroundImage: 'linear-gradient(120deg, #f3a0ff 0%, #ffbae5 100%)',
                borderRadius: '12px 12px 0 0',
                fontWeight: 'bold',
                fontSize: '20px'
            };
        }
    }

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
                                <Card.Grid hoverable={false} style={descriptionStyle}>{movie.description}</Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyle}><strong>Avaliação:</strong> {movie.rt_score}</Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyle}><strong>Data de lançamento:</strong> {movie.release_date}</Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyle}><strong>Diretor:</strong> {movie.director}</Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyle}><strong>Produtor:</strong> {movie.producer}</Card.Grid>
                            </Card>
                        </Col>
                    </Row>
                )
            }
        </div>
    );
}

export default MovieInfo;