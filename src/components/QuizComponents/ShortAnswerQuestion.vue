<template>
  <v-container class="pa-0">
    <v-text-field
      label="Expected Answer"
      v-model="questionData.correctAnswer"
      outlined
      class="pa-0"
    />
  </v-container>
</template>

<script>
export default {
  name: "ShortAnswerQuestion",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      questionData: {
        ...this.question,
        correctAnswer: this.question.correctAnswer,
      },
    };
  },
  methods: {
    emitQuestion() {
      this.$emit("update-question", this.questionData);
    },
  },
  watch: {
    question: {
      handler(newQuestion) {
        this.questionData = {
          ...newQuestion,
          correctAnswer: newQuestion.correctAnswer,
        };
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
