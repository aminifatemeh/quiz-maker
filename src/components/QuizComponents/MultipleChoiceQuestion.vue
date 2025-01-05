<template>
  <v-container class="pa-0 ma-0">
    <div
      v-for="(options, index) in questionData.options"
      :key="index"
      class="d-flex align-start"
    >
      <v-col class="ma-0 pa-0" cols="8">
        <v-text-field
          :label="'Option ' + (index + 1)"
          v-model="questionData.options[index].text"
          outlined
        />
      </v-col>
      <div class="d-flex align-start flex-column gap-0">
        <v-checkbox
          label="correct"
          v-model="questionData.options[index].isCorrect"
          class="mt-0 ml-2 pa-0"
          hide-details
        />
        <v-btn
          icon
          color="error"
          @click="removeOption(index)"
          class="ma-0 pa-0"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
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
      this.$emit("update-question", this.questionData);
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
