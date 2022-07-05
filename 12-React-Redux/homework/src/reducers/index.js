const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

function rootReduce (state = initialState, action) {
    switch(action.type) {
        case "ADD_MOVIE_FAVORITE" :
            return {
                ...state, 
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        
        case "REMOVE_MOVIE_FAVORITE" :
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(e => e.id !== id)
            }

        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            }
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
            }

    }
    
}

export default rootReduce