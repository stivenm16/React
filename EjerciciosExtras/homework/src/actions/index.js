export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export function getAllUsers () {
    return (dispatch) => {
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then(r => r.json())
        .then(data => {
            let dataFiltrada = data.map(({name, email, id, username}) => {
                return {
                    id,
                    name,
                    username,
                    email
                }
            })
            dispatch({ type: GET_ALL_USERS, payload: data })
            }
        )
    }
}

export function getAllUserPosts(id) {
    return function(dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((r) => r.json())
    .then(json => dispatch({ type: GET_ALL_USERS_POST, payload: json }))
    };
  }

  let idIncrement = 0
  export function getAllCommentsPost(id) {
    return function(dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((r) => r.json())
    .then(json => 
        {
            let dataFil = json.map(({body}) => {
                idIncrement++
                return {
                    body,
                    id: idIncrement
                }
            })
            dispatch({ type: GET_ALL_COMMENTS_POST, payload: dataFil })
        })
    };
  }

  export function getAllPosts() {
    return function(dispatch) {
      return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((r) => r.json())
    .then(json => dispatch({ type: GET_ALL_POSTS, payload: json }))
    };
  }
