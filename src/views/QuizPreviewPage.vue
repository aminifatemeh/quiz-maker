<template>
  <v-container>
    <h2>Preview Your Quiz</h2>
    <v-list v-if="quizQuestions.length">
      <v-list-item-group>
        <v-list-item v-for="(question, index) in quizQuestions" :key="index">
          <v-list-item-content>
            <v-list-item-title>
              <strong>Q{{ index + 1 }}:</strong> {{ question.text }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <template v-if="question.type === 'Multiple Choice'">
                Options:
                <ul>
                  <li
                    v-for="(option, optIndex) in question.options"
                    :key="optIndex"
                  >
                    {{ option.text }}
                    <strong v-if="option.isCorrect">(Correct)</strong>
                  </li>
                </ul>
              </template>
              <template v-else-if="question.type === 'True/False'">
                Correct Answer: {{ question.correctAnswer }}
              </template>
              <template v-else-if="question.type === 'Short Answer'">
                Expected Answer: {{ question.correctAnswer }}
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div v-else>
      <p>No questions to display. Please add questions in the Quiz Maker.</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "QuizPreview",
  props: {
    quizQuestions: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  mounted() {
    console.log("Received quizQuestions:", this.quizQuestions);
  },
};
</script>
