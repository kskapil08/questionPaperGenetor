// questionPaperGenerator.js
class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
      const totalQuestions = this.questionStore.getQuestions().length;
  
      difficultyDistribution.forEach(({ difficulty, percentage }) => {
        const count = Math.floor((percentage / 100) * totalMarks);
  
        const filteredQuestions = this.questionStore
          .getQuestions()
          .filter((q) => q.difficulty === difficulty);
  
        if (filteredQuestions.length < count) {
          throw new Error(`Not enough ${difficulty} questions available.`);
        }
  
        for (let i = 0; i < count; i++) {
          questionPaper.push(filteredQuestions[i]);
        }
      });
  
      return questionPaper;
    }
  }
  
module.exports = QuestionPaperGenerator;
  