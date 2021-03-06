import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values)

  history.push('/surveys')

  dispatch({ type: 'FETCH_USER', payload: res.data })
}


// export const fetchUser = () => {
//   return dispatch => {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res }))
//   }
// }

// function fetchAlbums() {
//   fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(json => console.log(json))
// }
//
// fetchAlbums()

// const apiUrl = 'http://rallycoding.herokuapp.com/api/music_albums'
//
// const fetchAlbums = async (url) => {
//   const res = await fetch(url)
//   const json = await res.json()
//
//   console.log(json)
// }
//
// fetchAlbums(apiUrl)
