import axios, { AxiosError } from 'axios';

// const getQuestions = async () => {
//   const url = `https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json`
//   const res = fetch(url, {mode: 'no-cors'});
//   const decodedRes = await (await res).json
//   console.log('first: ', res)
//   return decodedRes
// }

const getQuestions = async () => {
  const url = `https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json`;
  try {
    const response: apiQuizResponse = await axios.get(url);
    console.log(response);
    return response
  } catch (error) {
    console.error(error);
    return {
      "name": "Error Find",
      "heading": "There has been a problem fetching your questions.",
      "activities": [
        {
          "activity_name": "Activity One",
          "order": 1,
          "questions": []
        },
        {
          "activity_name": "Activity Two",
          "order": 2,
          "questions": [
            {
              "round_title": "Round 1",
              "order": 1,
              "questions": []
            },
            {
              "round_title": "Round 2",
              "order": 2,
              "questions": []
            }
          ]
        }
      ]
    }
  }
}

export { getQuestions }
