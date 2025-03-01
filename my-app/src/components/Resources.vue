<template>
  <div class="background">
    <div class="main-container">
      <div class="header">
        <div class="title-container">Resources Used</div>
        <button class="btn return-btn" @click="navigateTo('/Education')"></button>
      </div>

      <div class="ref-section">
        <div class="reference-box">
          <p v-for="(link, index) in references" :key="index">
            <a :href="link.url" target="_blank">{{ link.text }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BgImage from '@/assets/ribbon_background.png';
export default {
  data() {
    return {
      references: [
        { text: "Blurred Background Image", url: "https://www.w3schools.com/howto/howto_css_blurred_background.asp" },
        { text: "Building a Complete Responsive Personal Website", url: "https://www.youtube.com/watch?v=UqHILyzcULE" },
        { text: "Button Redirection in JavaScript", url: "https://chatgpt.com/c/6772975f-a7a4-800b-aacd-f1a3951c26c3" },
        { text: "CSS Buttons", url: "https://www.w3schools.com/css/css3_buttons.asp" },
        { text: "CSS Icons", url: "https://www.w3schools.com/icons/tryit.asp?filename=tryicons_awesome" },
        { text: "CSS Overflow Property", url: "https://www.w3schools.com/cssref/pr_pos_overflow.php" },
        { text: "CSS Universal Selector", url: "https://www.w3schools.com/CSS/css_selectors.asp" },
        { text: "Gap Property", url: "https://www.w3schools.com/cssref/css3_pr_gap.php" },
        { text: "Line Height", url: "https://www.w3schools.com/css/tryit.asp?filename=trycss_line-height" },
        { text: "V-for to Create Images and Text", url: "https://www.w3schools.com/vue/tryit.php?filename=tryvue_v-for_foodImgs2" },
        { text: "Vue v-model Directive", url: "https://www.w3schools.com/vue/tryit.php?filename=tryvue_forms_shoppingList2" }
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: #E37E91;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url('@/assets/ribbon_background.png') no-repeat center center fixed;
  background-size: cover;
  z-index: -1;
}

.main-container {
  width: 80%;
  max-width: 1000px;
  margin: 50px auto;
  background-color: #FF8DA3;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #E37E91;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.title-container {
  flex: 1;
  padding: 15px;
  background-color: #FFDAF1;
  margin-right: 10px;
  border: none;
  color: #E37E91;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
}

.return-btn {
  background-image: url('@/assets/icon_return.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #FFDAF1;
  border-radius: 10px;
  border: none;
  width: 49px;
  height: 49px;
  cursor: pointer;
}

.ref-section {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #FFDAF1;
  padding: 10px;
  border-radius: 10px;
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.8;
}

.reference-box {
  width: 100%;
  padding: 5px 0;
  text-align: center;
}
</style>
