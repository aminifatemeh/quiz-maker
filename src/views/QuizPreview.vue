<template>
  <v-container>
    <h2>Quiz Preview</h2>
    <div v-if="quizQuestions.length">
      <ul>
        <li v-for="(question, index) in quizQuestions" :key="index">
          <strong>Q{{ index + 1 }}:</strong> {{ question.text }}
          <div v-if="question.type === 'Multiple Choice'">
            <h4>Options:</h4>
            <ul>
              <li
                  v-for="(option, i) in question.options"
                  :key="i"
                  :class="{ correct: option.isCorrect }"
              >
                {{ option.text }}
              </li>
            </ul>
          </div>
          <div v-if="question.type === 'True/False'">
            <h4>Correct Answer: {{ question.correctAnswer }}</h4>
          </div>
          <div v-if="question.type === 'Short Answer'">
            <h4>Expected Answer: {{ question.correctAnswer }}</h4>
          </div>
        </li>
      </ul>
    </div>
    <v-btn color="primary" @click="$router.push({ name: 'QuizDesign' })">
      Back to Quiz Design
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "QuizPreview",
  data() {
    return {
      quizQuestions: [],
    };
  },
  created() {
    // Retrieve quiz data from route params
    this.quizQuestions = this.$route.params.quiz || [];
  },
};
</script>

<style scoped>
.correct {
  font-weight: bold;
  color: green;
}
</style>
