import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-e6514.firebaseio.com/'
})