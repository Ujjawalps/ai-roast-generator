export const initialGroup = [
  {
    id: "name",
    label: "What's your name?",
    type: "text",
    required: true,
  },
  {
    id: "age",
    label: "How old are you?",
    type: "number",
    required: true,
  },
  {
    id: "gender",
    label: "What's your gender?",
    type: "select",
    options: ["Male", "Female", "Other", "Prefer not to say"],
    required: true,
  },
];

export const remainingQuestions = [
  {
    id: "location",
    label: "Where are you from?",
    type: "text",
    required: false,
  },
  {
    id: "religion",
    label: "What's your religion?",
    type: "text",
    required: false,
  },
  {
    id: "job",
    label: "What do you do for a living?",
    type: "text",
    required: false,
  },
  {
    id: "insecurity",
    label: "What's your biggest insecurity?",
    type: "text",
    required: false,
  },
  {
    id: "idol",
    label: "Who do you admire the most?",
    type: "text",
    required: false,
  },
  {
    id: "relationshipStatus",
    label: "What's your relationship status?",
    type: "select",
    options: [
      "Single and proud",
      "Taken but regretting it",
      "It's complicated (even Facebook gave up)",
      "Dating Netflix",
      "Crushing silently",
      "Prefer not to say"
    ],
    required: false,
  },
  {
    id: "education",
    label: "Your highest education level?",
    type: "select",
    options: [
      "Dropout with dreams",
      "High School Graduate (barely)",
      "College Degree (in memes)",
      "Still figuring it out",
      "Too smart for the system",
      "Prefer not to say"
    ],
    required: false,
  },
  {
    id: "sleepSchedule",
    label: "What's your sleep schedule like?",
    type: "select",
    options: [
      "Night Owl",
      "Sleeps like a baby (cries at 3 AM)",
      "Sleeps when depressed",
      "What is sleep?",
      "Power nap king/queen",
      "Prefer not to say"
    ],
    required: false,
  },
  {
    id: "mostEmbarrassingMoment",
    label: "Your most embarrassing moment?",
    type: "text",
    required: false,
  },
  {
    id: "cringeHabit",
    label: "What's one habit you're ashamed of?",
    type: "text",
    required: false,
  },
  {
    id: "celebrityLookalike",
    label: "Which celebrity do people say you look like?",
    type: "text",
    required: false,
  },
];
