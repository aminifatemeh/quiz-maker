<template>
  <v-container>
    <div
      v-for="(options, index) in questionData.options"
      :key="index"
      class="option-row"
    >
      <v-col cols="8">
        <v-text-field
          :label="'option' + (index + 1)"
          v-model="questionData.options[index].text"
          outlined
        />
      </v-col>
      <v-checkbox
        label="correct"
        v-model="questionData.options[index].isCorrect"
      />
      <v-btn icon color="error" @click="removeOption(index)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
    <v-btn color="primary" @click="addOption">Add Option</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "MultipleChoiceQuestion",
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      questionData: { ...this.question, options: [...this.question.options] },
    };
  },
  methods: {
    addOption() {
      this.questionData.options.push({ text: "", isCorrect: false });
      this.emitQuestion();
    },
    removeOption(index) {
      this.questionData.options.splice(index, 1);
      this.emitQuestion();
    },
    emitQuestion() {
      this.$emit("update-question", this.question);
    },
  },
  watch: {
    question: {
      handler(newQuestion) {
        this.questionData = {
          ...newQuestion,
          options: [...newQuestion.options],
        };
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
