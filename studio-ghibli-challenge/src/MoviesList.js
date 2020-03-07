import React, { useState } from 'react';
import { Row } from 'antd';
import MovieCard from './MovieCard';

function MoviesList () {
    const [list, setList] = useState([]);

    const URL_TO_FETCH = 'https://ghibliapi.herokuapp.com';
    
    fetch(URL_TO_FETCH + '/films', {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        setList(data);
    }).catch(function(err) { console.log(err) });

    return (
        <Row justify="center" gutter={[16, 24]}>
            {list.map((film) => {
                return(
                    <MovieCard title={film.title} description={film.description} />
                );
            })}
        </Row>
    );
}

export default MoviesList;