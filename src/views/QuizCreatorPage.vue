<template>
  <v-container>
    <h2>Design Your Quiz Questions</h2>

    <!-- Question Type Selection -->
    <v-form>
      <v-select
          label="Question Type"
          v-model="selectedQuestionType"
          :items="questionTypes"
          outlined
      />
    </v-form>

    <!-- Render Inputs Based on Selected Type -->
    <div v-if="selectedQuestionType">
      <h3>Enter Question Details</h3>

      <!-- Common Inputs -->
      <v-text-field
          label="Question Text"
          v-model="currentQuestion.text"
          outlined
      />

      <!-- Multiple Choice Inputs -->
      <div v-if="selectedQuestionType === 'Multiple Choice'">
        <h4>Options</h4>
        <div v-for="(option, index) in currentQuestion.options" :key="index" class="option-row">
          <v-text-field
              :label="'Option ' + (index + 1)"
              v-model="currentQuestion.options[index].text"
              outlined
          />
          <v-checkbox
              label="Correct"
              v-model="currentQuestion.options[index].isCorrect"
          />
          <v-btn
              icon
              color="error"
              @click="removeOption(index)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
        <v-btn color="primary" @click="addOption">Add Option</v-btn>
      </div>

      <!-- True/False Inputs -->
      <div v-if="selectedQuestionType === 'True/False'">
        <v-radio-group v-model="currentQuestion.correctAnswer" row>
          <v-radio label="True" value="True" />
          <v-radio label="False" value="False" />
        </v-radio-group>
      </div>

      <!-- Short Answer Inputs -->
      <div v-if="selectedQuestionType === 'Short Answer'">
        <v-text-field
            label="Expected Answer"
            v-model="currentQuestion.correctAnswer"
            outlined
        />
      </div>

      <!-- Add Question to Quiz -->
      <v-btn color="success" class="mt-4" @click="addQuestionToQuiz">
        Add Question
      </v-btn>
    </div>

    <!-- Display Added Questions -->
    <div v-if="quizQuestions.length">
      <h3>Quiz Questions</h3>
      <ul>
        <li v-for="(question, index) in quizQuestions" :key="index">
          <strong>Q{{ index + 1 }}:</strong> {{ question.text }}
          <span v-if="question.type === 'Multiple Choice'">(Multiple Choice)</span>
          <span v-if="question.type === 'True/False'">(True/False)</span>
          <span v-if="question.type === 'Short Answer'">(Short Answer)</span>
        </li>
      </ul>
    </div>

    <v-btn
        color="info"
        class="mt-4"
        @click="previewQuiz"
    >
      Preview Quiz
    </v-btn>

  </v-container>

</template>

<script>
export default {
  data() {
    return {
      selectedQuestionType: null, // Tracks the selected question type
      questionTypes: ["Multiple Choice", "True/False", "Short Answer"], // Available question types
      currentQuestion: {
        text: "",
        type: "",
        options: [],
        correctAnswer: null,
      }, // Tracks the current question being created
      quizQuestions: [], // Stores all the questions added to the quiz
    };
  },
  methods: {
    addOption() {
      this.currentQuestion.options.push({ text: "", isCorrect: false });
    },
    removeOption(index) {
      this.currentQuestion.options.splice(index, 1);
    },
    addQuestionToQuiz() {
      if (!this.currentQuestion.text) {
        alert("Please provide the question text.");
        return;
      }
      const newQuestion = { ...this.currentQuestion, type: this.selectedQuestionType };
      this.quizQuestions.push(newQuestion);
      this.resetCurrentQuestion();
    },
    resetCurrentQuestion() {
      this.currentQuestion = {
        text: "",
        type: "",
        options: [],
        correctAnswer: null,
      };
      this.selectedQuestionType = null;
    },
// Inside your methods
    previewQuiz() {
      const quiz = this.quizQuestions;
      const previewUrl = this.$router.resolve({ name: 'QuizPreview', params: { quiz } }).href;

      window.open(previewUrl, '_blank'); // Open in a new tab
    }

  },
};
</script>

<style scoped>
.option-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.v-btn {
  margin-top: 20px;
}
</style>
