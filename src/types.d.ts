type apiQuizResponse = {
  "name": string;
  "heading": string;
  "activities": apiActivity[];
}

type apiActivityOne = {
  "activity_name": 'Activity One';
  "order": number;
  "questions": apiQuestion[];
}
type apiActivityTwo = {
  "activity_name": "Activity Two";
  "order": number;
  "questions": apiRound[];
}

type apiRound = {
  "round_title": string;
  "order": number;
  "questions": apiQuestion[];
}

type apiQuestion = {
  "is_correct": boolean;
  "stimulus": string;
  "order": number;
  "user_answers": [];
  "feedback": string;
}
