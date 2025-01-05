<template>
  <v-container class="pa-0">
    <v-radio-group
      v-model="questionData.correctAnswer"
      label="Select the correct answer"
      row
      class="pa-0"
    >
      <v-radio label="True" value="True" />
      <v-radio label="False" value="False" />
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  name: "TrueFalseQuestion",
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
