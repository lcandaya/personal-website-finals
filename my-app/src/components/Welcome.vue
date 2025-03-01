<template>
  <div class="background">
    <div class="background-overlay"></div>
    <div class="card-container">
      <div class="card">
        <!-- Welcome image with text -->
        <div class="image-section">
          <div class="welcome-text">Hi! I'm Lalainne</div>
        </div>

        <div class="button-section">
          <!-- Initial buttons -->
          <button class="btn gtkm-btn" @click="toggleGtkm">Get to know me!</button>
          <button class="btn home-btn" @click="reset" :disabled="!isGtkmVisible"></button>
        </div>

        <!-- Buttons under gtkm -->
        <div class="gtkm-btns" v-if="isGtkmVisible">
          <button id="aboutMeBtn" class="btn" @click="navigateTo('/about')">About Me</button>
          <button id="galleryBtn" class="btn" @click="navigateTo('/gallery')">Photo Gallery</button>
          <button id="educationBtn" class="btn" @click="navigateTo('/education')">Education</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RibbonBackground from '@/assets/ribbon_background.png';
export default {
  data() {
    return {
      isGtkmVisible: false,
      bgImage: RibbonBackground
    };
  },
  methods: {
    toggleGtkm() {
      this.isGtkmVisible = true;
    },
    reset() {
      this.isGtkmVisible = false;
    },
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
  display: flex;
  align-items: center;
  justify-content: center;
}


.card-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.card {
  background-color: #FF8DA3;
  width: 400px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.image-section {
  background: url("https://i.pinimg.com/originals/71/47/62/71476294e8d1bfb9ae869acdd28e60b0.gif") no-repeat center;
  background-size: cover;
  height: 150px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
}

.welcome-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.button-section {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.gtkm-btn {
  background-color: #FFDAF1;
  border: none;
  color: #E37E91;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: calc(100% - 65px);
  cursor: pointer;
  text-align: center;
}

.gtkm-btn:hover {
  background-color: #fe5a78;
  color: #FFDAF1;
}

.home-btn {
  background-image: url('@/assets/icon_home.png');
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #FFDAF1;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 50px;
  height: 38px;
}

.gtkm-btns {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
}

#aboutMeBtn, #galleryBtn, #educationBtn {
  background-color: #FFDAF1;
  border: none;
  color: #E37E91;
  padding: 12px;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  flex: 1;
}

#aboutMeBtn:hover, #galleryBtn:hover, #educationBtn:hover {
  background-color: #fe5a78;
  color: #FFDAF1;
}

@media (max-width: 768px) {
  .card {
    width: 90%;
    padding: 15px;
  }

  .image-section {
    height: 120px;
  }

  .button-section {
    gap: 10px;
  }

  .gtkm-btn {
    width: 100%;
    font-size: 0.9rem;
    padding: 8px;
  }

  .gtkm-btns {
    flex-direction: column;
  }

  #aboutMeBtn, #galleryBtn, #educationBtn {
    font-size: 0.9rem;
    padding: 8px;
  }

  .home-btn {
    width: 40px;
    height: 30px;
  }
}
</style>