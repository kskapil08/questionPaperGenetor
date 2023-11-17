// main.js
const fs = require('fs');
const QuestionStore = require('./questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');

// Create a Question Store
const questionStore = new QuestionStore();

// Add sample questions
questionStore.addQuestion(
  'What is the speed of light?',
  'Physics',
  'Waves',
  'Easy',
  5
);
questionStore.addQuestion(
  'What is Newton\'s first law of motion?',
  'Physics',
  'Motion',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the capital of France?',
  'Geography',
  'Countries',
  'Medium',
  7
);

// Add more easy questions
questionStore.addQuestion(
  'What is the capital of Japan?',
  'Geography',
  'Countries',
  'Easy',
  3
);
questionStore.addQuestion(
  'Who is known as the father of computers?',
  'Computer Science',
  'History',
  'Easy',
  4
);
questionStore.addQuestion(
  'What is the square root of 64?',
  'Mathematics',
  'Algebra',
  'Easy',
  2
);

// Add more sample questions
questionStore.addQuestion(
  'Who wrote "Romeo and Juliet"?',
  'Literature',
  'Shakespeare',
  'Medium',
  6
);
questionStore.addQuestion(
  'What is the chemical symbol for gold?',
  'Chemistry',
  'Elements',
  'Hard',
  10
);
questionStore.addQuestion(
  'In which year did World War II end?',
  'History',
  'World War II',
  'Hard',
  9
);

// Add a few more questions
questionStore.addQuestion(
  'What is the largest planet in our solar system?',
  'Astronomy',
  'Planets',
  'Easy',
  4
);
questionStore.addQuestion(
  'Who painted the Mona Lisa?',
  'Art',
  'Paintings',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the formula for water?',
  'Chemistry',
  'Compounds',
  'Hard',
  8
);
// Add more easy questions
questionStore.addQuestion(
  'What is the capital of Japan?',
  'Geography',
  'Countries',
  'Easy',
  3
);
questionStore.addQuestion(
  'Who is known as the father of computers?',
  'Computer Science',
  'History',
  'Easy',
  4
);
questionStore.addQuestion(
  'What is the square root of 64?',
  'Mathematics',
  'Algebra',
  'Easy',
  2
);
questionStore.addQuestion(
  'Which planet is known as the Red Planet?',
  'Astronomy',
  'Planets',
  'Easy',
  3
);
questionStore.addQuestion(
  'What is the largest mammal on Earth?',
  'Biology',
  'Animals',
  'Easy',
  4
);
questionStore.addQuestion(
  'Who wrote "To Kill a Mockingbird"?',
  'Literature',
  'Novels',
  'Easy',
  5
);
questionStore.addQuestion(
  'What is the currency of China?',
  'Economics',
  'Currencies',
  'Easy',
  2
);
questionStore.addQuestion(
  'How many continents are there?',
  'Geography',
  'General Knowledge',
  'Easy',
  3
);
questionStore.addQuestion(
  'Who discovered penicillin?',
  'Medicine',
  'History',
  'Easy',
  4
);
questionStore.addQuestion(
  'What is the capital of Australia?',
  'Geography',
  'Countries',
  'Easy',
  3
);
// Add more easy questions
questionStore.addQuestion(
  'What is the largest ocean on Earth?',
  'Geography',
  'Oceans',
  'Easy',
  5
);
questionStore.addQuestion(
  'Who is the author of "Harry Potter" series?',
  'Literature',
  'Novels',
  'Easy',
  4
);
questionStore.addQuestion(
  'What is the capital of India?',
  'Geography',
  'Countries',
  'Easy',
  3
);
questionStore.addQuestion(
  'What is the square of 9?',
  'Mathematics',
  'Algebra',
  'Easy',
  2
);
questionStore.addQuestion(
  'Which gas do plants absorb from the atmosphere?',
  'Biology',
  'Plants',
  'Easy',
  4
);
questionStore.addQuestion(
  'Who painted the famous painting "Starry Night"?',
  'Art',
  'Paintings',
  'Easy',
  5
);
questionStore.addQuestion(
  'In what year did Christopher Columbus reach the Americas?',
  'History',
  'Exploration',
  'Easy',
  3
);
questionStore.addQuestion(
  'What is the capital of Brazil?',
  'Geography',
  'Countries',
  'Easy',
  3
);
questionStore.addQuestion(
  'How many sides does a hexagon have?',
  'Mathematics',
  'Geometry',
  'Easy',
  2
);
questionStore.addQuestion(
  'Who wrote the play "Romeo and Juliet"?',
  'Literature',
  'Drama',
  'Easy',
  5
);
questionStore.addQuestion(
  'What is the smallest prime number?',
  'Mathematics',
  'Number Theory',
  'Easy',
  2
);
questionStore.addQuestion(
  'Which planet is known as the "Morning Star"?',
  'Astronomy',
  'Planets',
  'Easy',
  4
);
questionStore.addQuestion(
  'What is the main ingredient in guacamole?',
  'Culinary',
  'Foods',
  'Easy',
  3
);
questionStore.addQuestion(
  'Who was the first President of the United States?',
  'History',
  'Presidents',
  'Easy',
  4
);
questionStore.addQuestion(
  'What is the largest desert in the world?',
  'Geography',
  'Deserts',
  'Easy',
  5
);
// Add more medium-level questions
questionStore.addQuestion(
  'What is the boiling point of water in Celsius?',
  'Chemistry',
  'Physical Properties',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who developed the theory of relativity?',
  'Physics',
  'Theories',
  'Medium',
  8
);
questionStore.addQuestion(
  'Which novel is set in the fictional town of Maycomb?',
  'Literature',
  'Novels',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the largest river in the world?',
  'Geography',
  'Rivers',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who discovered penicillin?',
  'Medicine',
  'Discoveries',
  'Medium',
  6
);
questionStore.addQuestion(
  'What is the capital of Canada?',
  'Geography',
  'Countries',
  'Medium',
  6
);
questionStore.addQuestion(
  'In what year did the American Civil War end?',
  'History',
  'American Civil War',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the currency of Japan?',
  'Economics',
  'Currencies',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who wrote the play "Hamlet"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the chemical formula for table salt?',
  'Chemistry',
  'Compounds',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who painted "The Starry Night"?',
  'Art',
  'Paintings',
  'Medium',
  6
);
questionStore.addQuestion(
  'What is the largest mammal on land?',
  'Biology',
  'Animals',
  'Medium',
  8
);
questionStore.addQuestion(
  'In which country is the Great Barrier Reef located?',
  'Geography',
  'Oceans',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who composed the "Moonlight Sonata"?',
  'Music',
  'Classical Music',
  'Medium',
  6
);
questionStore.addQuestion(
  'What is the capital of South Africa?',
  'Geography',
  'Countries',
  'Medium',
  6
);
questionStore.addQuestion(
  'What is the main ingredient in sushi rolls?',
  'Culinary',
  'Foods',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who is the author of "1984"?',
  'Literature',
  'Novels',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the formula for the area of a rectangle?',
  'Mathematics',
  'Geometry',
  'Medium',
  6
);
// Add more medium-level questions
questionStore.addQuestion(
  'What is the capital of Argentina?',
  'Geography',
  'Countries',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who is the author of "Pride and Prejudice"?',
  'Literature',
  'Novels',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the largest desert in Africa?',
  'Geography',
  'Deserts',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the chemical symbol for silver?',
  'Chemistry',
  'Elements',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who wrote the play "Macbeth"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the capital of China?',
  'Geography',
  'Countries',
  'Medium',
  6
);
questionStore.addQuestion(
  'In what year did the French Revolution begin?',
  'History',
  'French Revolution',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the currency of Mexico?',
  'Economics',
  'Currencies',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who discovered the structure of DNA?',
  'Biology',
  'Genetics',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the capital of Italy?',
  'Geography',
  'Countries',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who painted the Sistine Chapel ceiling?',
  'Art',
  'Paintings',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the main component of Earth\'s atmosphere?',
  'Geography',
  'Atmosphere',
  'Medium',
  7
);
questionStore.addQuestion(
  'In which year did the Titanic sink?',
  'History',
  'Titanic',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who is known as the "Father of Modern Physics"?',
  'Physics',
  'Scientists',
  'Medium',
  8
);

questionStore.addQuestion(
  'Who was the first woman to win a Nobel Prize?',
  'History',
  'Nobel Prize',
  'Medium',
  7
);
// Add more medium-level questions
questionStore.addQuestion(
  'What is the currency of Russia?',
  'Economics',
  'Currencies',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who wrote the play "Othello"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the largest mountain in the world?',
  'Geography',
  'Mountains',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the chemical symbol for iron?',
  'Chemistry',
  'Elements',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who discovered the theory of evolution by natural selection?',
  'Biology',
  'Evolution',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the capital of Germany?',
  'Geography',
  'Countries',
  'Medium',
  6
);
questionStore.addQuestion(
  'In what year did the Russian Revolution occur?',
  'History',
  'Russian Revolution',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the currency of South Korea?',
  'Economics',
  'Currencies',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who wrote the play "King Lear"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the largest lake in Africa?',
  'Geography',
  'Lakes',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who painted "The Last Supper"?',
  'Art',
  'Paintings',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the main component of natural gas?',
  'Chemistry',
  'Compounds',
  'Medium',
  7
);
questionStore.addQuestion(
  'In which year did the Berlin Wall fall?',
  'History',
  'Berlin Wall',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who is known as the "Father of the Computer"?',
  'Computer Science',
  'Pioneers',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the currency of Australia?',
  'Economics',
  'Currencies',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who wrote the play "The Tempest"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the highest waterfall in the world?',
  'Geography',
  'Waterfalls',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the chemical symbol for copper?',
  'Chemistry',
  'Elements',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who developed the laws of motion?',
  'Physics',
  'Scientific Laws',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the currency of Brazil?',
  'Economics',
  'Currencies',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who wrote the play "Twelfth Night"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the deepest ocean in the world?',
  'Geography',
  'Oceans',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the chemical symbol for aluminum?',
  'Chemistry',
  'Elements',
  'Medium',
  6
);
questionStore.addQuestion(
  'Who discovered the double helix structure of DNA?',
  'Biology',
  'Genetics',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the capital of Spain?',
  'Geography',
  'Countries',
  'Medium',
  6
);
questionStore.addQuestion(
  'In what year did the Industrial Revolution begin?',
  'History',
  'Industrial Revolution',
  'Medium',
  7
);
questionStore.addQuestion(
  'What is the currency of India?',
  'Economics',
  'Currencies',
  'Medium',
  7
);
questionStore.addQuestion(
  'Who wrote the play "A Midsummer Night\'s Dream"?',
  'Literature',
  'Drama',
  'Medium',
  8
);
questionStore.addQuestion(
  'What is the largest island in the world?',
  'Geography',
  'Islands',
  'Medium',
  6
);


// Add more hard-level questions
questionStore.addQuestion(
  'What is the speed of sound in a vacuum?',
  'Physics',
  'Waves',
  'Hard',
  10
);
questionStore.addQuestion(
  'Who formulated the theory of general relativity?',
  'Physics',
  'Theories',
  'Hard',
  12
);
questionStore.addQuestion(
  'In what year did the Battle of Gettysburg take place?',
  'History',
  'Civil War',
  'Hard',
  15
);
questionStore.addQuestion(
  'What is the capital of Bhutan?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'Who wrote the novel "Crime and Punishment"?',
  'Literature',
  'Novels',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the atomic number of uranium?',
  'Chemistry',
  'Elements',
  'Hard',
  12
);
questionStore.addQuestion(
  'Who composed the opera "The Marriage of Figaro"?',
  'Music',
  'Opera',
  'Hard',
  11
);
questionStore.addQuestion(
  'What is the capital of Kazakhstan?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year was the Magna Carta signed?',
  'History',
  'Medieval England',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical formula for sulfuric acid?',
  'Chemistry',
  'Compounds',
  'Hard',
  15
);
questionStore.addQuestion(
  'Who painted "The Persistence of Memory"?',
  'Art',
  'Paintings',
  'Hard',
  11
);
questionStore.addQuestion(
  'In what year did World War I begin?',
  'History',
  'World War I',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the currency of Saudi Arabia?',
  'Economics',
  'Currencies',
  'Hard',
  13
);
questionStore.addQuestion(
  'Who developed the first successful polio vaccine?',
  'Medicine',
  'Vaccines',
  'Hard',
  12
);
questionStore.addQuestion(
  'What is the capital of Argentina?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year did the Bolshevik Revolution occur?',
  'History',
  'Bolshevik Revolution',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical symbol for platinum?',
  'Chemistry',
  'Elements',
  'Hard',
  12
);
questionStore.addQuestion(
  'Who composed the "Four Seasons"?',
  'Music',
  'Classical Music',
  'Hard',
  11
);
questionStore.addQuestion(
  'What is the capital of Myanmar?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year did the Renaissance begin?',
  'History',
  'Renaissance',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical formula for nitric acid?',
  'Chemistry',
  'Compounds',
  'Hard',
  15
);
questionStore.addQuestion(
  'Who painted "The Birth of Venus"?',
  'Art',
  'Paintings',
  'Hard',
  11
);
questionStore.addQuestion(
  'In what year did the Great Fire of London occur?',
  'History',
  'Great Fire of London',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the currency of Switzerland?',
  'Economics',
  'Currencies',
  'Hard',
  13
);
questionStore.addQuestion(
  'Who discovered the circulation of blood in the human body?',
  'Medicine',
  'Anatomy',
  'Hard',
  12
);
questionStore.addQuestion(
  'What is the capital of Nigeria?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year was the Emancipation Proclamation issued?',
  'History',
  'Civil War',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical symbol for radium?',
  'Chemistry',
  'Elements',
  'Hard',
  12
);
questionStore.addQuestion(
  'Who composed the "Symphony No. 9"?',
  'Music',
  'Classical Music',
  'Hard',
  11
);
questionStore.addQuestion(
  'What is the capital of South Korea?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year did the Industrial Revolution end?',
  'History',
  'Industrial Revolution',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical formula for phosphoric acid?',
  'Chemistry',
  'Compounds',
  'Hard',
  15
);
questionStore.addQuestion(
  'Who painted "The Guernica"?',
  'Art',
  'Paintings',
  'Hard',
  11
);
questionStore.addQuestion(
  'In what year did the Great Depression begin?',
  'History',
  'Great Depression',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the currency of Turkey?',
  'Economics',
  'Currencies',
  'Hard',
  13
);
questionStore.addQuestion(
  'Who discovered the neutron?',
  'Physics',
  'Particles',
  'Hard',
  12
);
questionStore.addQuestion(
  'What is the capital of Thailand?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year did the Black Death occur?',
  'History',
  'Black Death',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical symbol for tungsten?',
  'Chemistry',
  'Elements',
  'Hard',
  12
);
questionStore.addQuestion(
  'Who composed the opera "La Traviata"?',
  'Music',
  'Opera',
  'Hard',
  11
);
questionStore.addQuestion(
  'What is the capital of Mexico?',
  'Geography',
  'Countries',
  'Hard',
  13
);
questionStore.addQuestion(
  'In what year did the American Revolutionary War end?',
  'History',
  'American Revolutionary War',
  'Hard',
  14
);
questionStore.addQuestion(
  'What is the chemical formula for hydrochloric acid?',
  'Chemistry',
  'Compounds',
  'Hard',
  15
);
questionStore.addQuestion(
  'Who painted "The Night Watch"?',
  'Art',
  'Paintings',
  'Hard',
  11
);




// Create a Question Paper Generator
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Generate a question paper
try {
  const questionPaper = questionPaperGenerator.generateQuestionPaper(100, [
    { difficulty: 'Easy', percentage: 20 },
    { difficulty: 'Medium', percentage: 50 },
    { difficulty: 'Hard', percentage: 30 },
  ]);

  // Write the question paper to a file
  fs.writeFileSync('sample_question_paper.json', JSON.stringify(questionPaper, null, 2));

  console.log('Generated Question Paper:');
  console.log(questionPaper);
  console.log('Question Paper has been saved to sample_question_paper.json');
} catch (error) {
  console.error(error.message);
}
