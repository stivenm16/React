import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="movie-detail">
                <h1> Titulo: {this.props.movie.Title}</h1>
                <p> Year: {this.props.movie.Year}</p>
                <img src={this.props.movie.Poster}></img>
            </div>
        );
    }
}

function mapState(state){
    return {
        movie: state.movieDetail
    }
}


export default connect(mapState, {getMovieDetail})(Movie);
