<template>
  <div class="background">
    <div class="main-container">
      <div class="header">
        <div class="title-container">About Lalainne's Education</div>
        <button class="btn home-btn" @click="navigateTo('/')"></button>
      </div>
      
      <div class="content">
        <div class="profile">
          <div class="profile-pic"></div>
          <p class="profile-info">
            Lalainne is currently a second-year BSIT-MI student at Asia Pacific College.
          </p>
        </div>
        <div class="info-section">
          <div class="info-box">
            <h3>Educational Background</h3>
            <p><b>Tertiary</b><br>Asia Pacific College<br>2023 - Present<br>BS Information Technology</p>
            <p><b>Senior High School</b><br>Asia Pacific College<br>2021-2023<br>STEM-IT</p>
            <p><b>Junior High School</b><br>Pasay City South High School<br>2017-2021</p>
          </div>

          <div class="info-box">
            <h3>Educational Achievements</h3>
            <p>
              Lalainne graduated with High Honors in Senior High School and successfully presented her paper:
              <i>"Pagsusuri ng Code-Switching sa Klase ng Biology sa Asia Pacific College-Senior High School"</i>
              at the 5th International Conference of the Arts and Sciences, Cebu Normal University.
              With hard work and effort, she became an Academic Awardee last academic year 2023-2024.
            </p>
          </div>
        </div>
      </div>

      <button class="footer-btn" @click="navigateTo('/resources')">
        Click here to view the resources used for the creation of this webpage
      </button>
    </div>
  </div>
</template>

<script>
import RibbonBackground from '@/assets/ribbon_background.png';
export default {
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
  box-sizing: border-box;
}

.background {
  position: absolute;
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

.main-container {
  width: 90%;
  max-width: 1000px;
  background-color: #FF8DA3;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  overflow: auto; /* Allow scrolling inside */
  position: relative; /* Keep it above the background */
  z-index: 1; /* Ensure content stays visible */
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
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #E37E91;
  background-color: #FFDAF1;
  padding: 15px;
  border-radius: 8px;
  margin-right: 10px;
  border: none;
}

.home-btn {
  background-image: url('@/assets/icon_home.png');
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

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.profile {
  flex: 1;
  text-align: center;
  min-width: 300px;
}

.profile-pic {
  background-image: url('@/assets/profile.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 15rem;
  height: 15rem;
  border-radius: 10px;
  margin: 0 auto 10px;
}

.profile-info {
  font-size: 1rem;
  color: #E37E91;
  background-color: #FFDAF1;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: auto;
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px;
}

.info-box {
  background-color: #FFDAF1;
  padding: 15px;
  border-radius: 7px;
  color: #E37E91;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.footer-btn {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #E37E91;
  background-color: #FFDAF1;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
}

.footer-btn:hover {
  background-color: #FE5A78;
  color: #FFDAF1;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .background {
        align-items: flex-start; /* Allow natural content flow */
    }

  .main-container {
    padding: 15px;
    min-height: auto; /* Ensure it grows naturally */
  }

  .title-container {
    font-size: 1rem;
    padding: 8px;
  }

  .profile-pic {
    width: 12rem;
    height: 12rem;
  }

  .profile-info {
    font-size: 0.9rem;
    padding: 12px;
    width: 90%;
  }

  .info-box {
    font-size: 0.9rem;
    padding: 12px;
  }

  .footer-btn {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
    .main-container {
    padding: 10px;
  }

  .title-container {
    font-size: 0.9rem;
  }

  .profile-pic {
    width: 10rem;
    height: 10rem;
  }

  .profile-info {
    font-size: 0.8rem;
  }

  .info-box {
    font-size: 0.8rem;
    padding: 10px;
  }

  .footer-btn {
    font-size: 10px;
  }
}
</style>
