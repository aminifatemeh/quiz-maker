<template>
  <v-container class="pa-0">
    <v-text-field
      label="Expected Answer"
      v-model="questionData.correctAnswer"
      outlined
      class="pa-0"
      @input="emitQuestion"
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
    // Emit the updated question data when correct answer changes
    emitQuestion() {
      this.$emit("update-question", this.questionData);
    },
  },
};
</script>

<style scoped></style>
