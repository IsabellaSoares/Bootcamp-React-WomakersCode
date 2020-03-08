import React, { useState } from 'react';
import { Row, Spin } from 'antd';
import MovieCard from './MovieCard';

function MoviesList () {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const URL_TO_FETCH = 'https://ghibliapi.herokuapp.com';
    
    fetch(URL_TO_FETCH + '/films', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        setList(data);
        setLoading(false);
    }).catch(function(err) { console.log(err) });

    return (
        <>
        {
            loading ? ( <Spin size="large" /> ) : (
                <Row justify="center" gutter={[16, 24]} style={{margin: '0 70px'}} >
                    {list.map((movie, index) => {
                        return(
                            <MovieCard key={movie.id} movie={movie} index={index} />
                        );
                    })}
                </Row>
            )
        }
        </>
    );
}

export default MoviesList;