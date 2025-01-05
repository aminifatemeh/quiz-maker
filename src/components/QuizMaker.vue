<script>
import MultipleChoiceQuestion from "@/components/QuizComponents/MultipleChoiceQuestion.vue";
import TrueFalseQuestion from "@/components/QuizComponents/TrueFalseQuestion.vue";
import ShortAnswerQuestion from "@/components/QuizComponents/ShortAnswerQuestion.vue";

export default {
  name: "QuizMaker",
  components: {
    MultipleChoiceQuestion,
    TrueFalseQuestion,
    ShortAnswerQuestion,
  },

  data() {
    return {
      selectedQuestionType: null,
      questionTypes: ["Multiple Choice", "True/False", "Short Answer"],
      currentQuestion: {
        text: "",
        type: "",
        options: [],
        correctAnswer: null,
      },
      quizQuestions: [],
    };
  },
  computed: {
    getQuestionComponent() {
      switch (this.selectedQuestionType) {
        case "Multiple Choice":
          return "MultipleChoiceQuestion";
        case "True/False":
          return "TrueFalseQuestion";
        case "Short Answer":
          return "ShortAnswerQuestion";
        default:
          return null;
      }
    },
  },
  methods: {
    updateCurrentQuestion(updatedQuestion) {
      this.currentQuestion = updatedQuestion;
    },
    addQuestionToQuiz() {
      if (!this.currentQuestion.text) {
        alert("Please provide the question text.");
        return;
      }

      // Check if the correct answer is selected based on the question type
      if (this.selectedQuestionType === "Multiple Choice") {
        // Ensure at least one option is marked as correct
        const correctOption = this.currentQuestion.options.find(
          (option) => option.isCorrect
        );
        if (!correctOption) {
          alert("Please select a correct answer.");
          return;
        }
      } else if (this.selectedQuestionType === "True/False") {
        // Ensure True/False question has a selected correct answer
        if (!this.currentQuestion.correctAnswer) {
          alert("Please select either True or False as the correct answer.");
          return;
        }
      } else if (this.selectedQuestionType === "Short Answer") {
        // Ensure Short Answer question has a correct answer filled
        if (!this.currentQuestion.correctAnswer) {
          alert("Please provide the expected answer.");
          return;
        }
      }

      // Add the question to the quiz if all conditions are met
      const newQuestion = {
        ...this.currentQuestion,
        type: this.selectedQuestionType,
      };
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
      const previewUrl = this.$router.resolve({
        name: "QuizPreview",
        params: { quiz },
      }).href;

      window.open(previewUrl, "_blank"); // Open in a new tab
    },
  },
};
</script>

<template>
  <v-container>
    <h2 class="mb-4">Design Your Quiz Questions</h2>
    <v-select
      label="Question Type"
      v-model="selectedQuestionType"
      :items="questionTypes"
      outlined
      :menu-props="{ offsetY: true }"
    ></v-select>
    <div v-if="selectedQuestionType">
      <h3 class="mb-2">Enter Question Details</h3>
      <v-text-field
        label="Question Text"
        v-model="currentQuestion.text"
        outlined
      />
      <component
        :is="getQuestionComponent"
        :question="currentQuestion"
        @update-question="updateCurrentQuestion"
      />

      <v-btn color="success" class="mt-4" @click="addQuestionToQuiz">
        Add Question
      </v-btn>
      <v-btn color="info" class="mt-4 ml-4" @click="previewQuiz">
        Preview Quiz
      </v-btn>
    </div>

    <div v-if="quizQuestions.length">
      <h3>Quiz Questions</h3>
      <ul>
        <li v-for="(question, index) in quizQuestions" :key="index">
          <strong>Q{{ index + 1 }}:</strong> {{ question.text }}
          <span v-if="question.type === 'Multiple Choice'"
            >(Multiple Choice)</span
          >
          <span v-if="question.type === 'True/False'">(True/False)</span>
          <span v-if="question.type === 'Short Answer'">(Short Answer)</span>
        </li>
      </ul>
    </div>
  </v-container>
</template>

<style scoped></style>
