<template>
  <v-container>
    <h2>Take Your Quiz</h2>

    <!-- Quiz Questions -->
    <v-list v-if="quizQuestions.length">
      <v-list-item-group>
        <v-list-item v-for="(question, index) in quizQuestions" :key="index">
          <v-list-item-content>
            <v-list-item-title>
              <strong>Question {{ index + 1 }}:</strong> {{ question.text }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <!-- Multiple Choice Questions -->
              <template v-if="question.type === 'Multiple Choice'">
                <v-radio-group v-model="userAnswers[index]" row>
                  <v-radio
                    v-for="(option, optIndex) in question.options"
                    :key="optIndex"
                    :label="option.text"
                    :value="option.text"
                  />
                </v-radio-group>
              </template>

              <!-- True/False Questions -->
              <template v-else-if="question.type === 'True/False'">
                <v-radio-group v-model="userAnswers[index]" row>
                  <v-radio label="True" value="True" />
                  <v-radio label="False" value="False" />
                </v-radio-group>
              </template>

              <!-- Short Answer Questions -->
              <template v-else-if="question.type === 'Short Answer'">
                <v-text-field
                  v-model="userAnswers[index]"
                  label="Your Answer"
                  dense
                  outlined
                />
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- Submit Button -->
      <v-btn color="primary" class="mt-4" @click="submitQuiz"
        >Submit Quiz</v-btn
      >
    </v-list>

    <!-- No Questions Available -->
    <div v-else>
      <p>No questions to display. Please add questions in the Quiz Maker.</p>
    </div>

    <!-- Quiz Results -->
    <div v-if="quizSubmitted" class="mt-6">
      <h3>Quiz Results</h3>
      <p>
        You answered <strong>{{ correctAnswers }}</strong> out of
        <strong>{{ quizQuestions.length }}</strong> questions correctly.
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "QuizPreview",
  props: {
    quizQuestions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      userAnswers: [], // Array to store user answers
      correctAnswers: 0, // Counter for correct answers
      quizSubmitted: false, // Flag to check if quiz is submitted
    };
  },
  methods: {
    submitQuiz() {
      // Calculate the number of correct answers
      this.correctAnswers = this.quizQuestions.reduce(
        (count, question, index) => {
          const userAnswer = this.userAnswers[index];
          const isCorrect =
            question.type === "Multiple Choice"
              ? question.options.some(
                  (option) => option.text === userAnswer && option.isCorrect
                )
              : question.correctAnswer === userAnswer;

          return count + (isCorrect ? 1 : 0);
        },
        0
      );

      // Mark quiz as submitted
      this.quizSubmitted = true;
    },
  },
};
</script>

<style>
.mt-6 {
  margin-top: 24px;
}
</style>
