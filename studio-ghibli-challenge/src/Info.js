import React from 'react';
import { useParams} from "react-router";

function MovieInfo () {
    const { id } = useParams();
    console.log(id);
    return(
        {}
    );
}

export default MovieInfo;