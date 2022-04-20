import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Movie extends Component {

}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        selectedMovie: state.movie.selectedMovie,
        movieId: ownProps.match.params.movieId
    }
}

export default withRouter(connect(mapStateToProps)(Movie));