<template>
  <v-container>
    <h1>Create a New Quiz</h1>
    <form>
      <v-text-field label="Quiz Title" v-model="quizTitle" />
      <v-textarea label="Quiz Description" v-model="quizDescription" />
      <v-btn color="primary" @click.prevent="submitQuiz">Create Quiz</v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      quizTitle: "",
      quizDescription: "",
    };
  },
  methods: {
    submitQuiz() {
      if (this.quizTitle && this.quizDescription) {
        alert(`Quiz "${this.quizTitle}" has been created!`);
        this.quizTitle = "";
        this.quizDescription = "";
      } else {
        alert("Please fill out all fields!");
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: auto;
}

h1 {
  margin-bottom: 20px;
}
</style>
