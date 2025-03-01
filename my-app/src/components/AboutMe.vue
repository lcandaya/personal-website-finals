<template>
  <div class="background">
    <div class="main-container">
      <div class="header">
        <div class="title-container">About Lalainne
          <div class="icons-social">
            <a v-for="(link, index) in socialLinks" :key="index" :href="link.url" class="icon-style" target="_blank">
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
        <button class="btn home-btn" @click="navigateTo('/')"></button>
      </div>
      
      <div class="nav-buttons button-container">
        <button v-for="(section, index) in sections" :key="index" 
          class="nav-btn" 
          :class="{ active: activeSection === section.id }" 
          @click="activeSection = section.id">
          {{ section.label }}
        </button>
      </div>
      
      <div class="content">
        <div class="image-container"></div>
        <div class="display-box centered" v-html="activeContent"></div>
      </div>
      
      <button class="footer-form" @click="navigateTo('/guestbook')">
        Let me get to know you too by clicking here!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'about-me',
      sections: [
        { id: 'about-me', label: 'About Me', content: `
          <h2 class='center-text'>🌸 Lei 🌸</h2>
          <p class='center-text'>I am Lalainne Andaya, but my friends and family call me <i>Lei</i>. I am currently a second-year student
          at Asia Pacific College, taking BSIT with a specialization in Mobile Internet Technologies. I was a graduate 
          of APC-SHS as part of batch 2023, and I took STEM-IT as my SHS track. 
          <br>
          During my stay at APC as a senior high school student, I found myself enjoying what we did which made me decide
          to take the same path for college. And during those years, including the current experience I have, I, along with my 
          teammates, have created a couple of webpages for our projects. We were also able to create a game using Python back in 12th
          grade. It was a fun experience, but it made me realize that game development is not for me.</p>` },
        
        { id: 'goals', label: 'Goals', content: `
          <h2 class='center-text'>🌠 Goals 🌠</h2>
          <p class='center-text'>
          My short-term goals include excelling in my studies, improving my technical skills, 
          and creating more projects to build my portfolio. It is also my goal to pass all my courses with flying colors, graduate on time,
          and graduate with Latin honors.
          </p>` },
        
        { id: 'likes', label: 'Hobbies and Interests', content: `
          <h2 class='center-text'>🌷 Hobbies and Interests 🌷</h2>
          <p class='center-text'>
          As mentioned briefly, I like the color pink. I like it so much that almost everything that I own is in that color. 
          I have been <i>into K-Pop</i> since 2017 and I am into groups such as BTS, Seventeen, XG, and Izna. Back in 2022 to 2023, I used
          to <i>collect photocards</i> which are inclusions in K-Pop albums. I used to have more than three dozen photocards of my biases, but I
          decided to let them go and only kept my top five most favorite photocards.
          <br><br>
          Recently, whenever I'm stressed or feeling overwhelmed, I <i>like making paper stars</i>. It calms me down and eases my mind. I also find
          doing my <i>makeup</i> therapeutic. I have been into makeup only since the first quarter of last year, and since then I have been 
          building my collection bit by bit. Besides all these, I have also been into <i>running</i>. I started it for one of 
          our courses, but I now do it because I enjoy it.
          </p>` }
      ],
    };
  },
  computed: {
    activeContent() {
      return this.sections.find(s => s.id === this.activeSection)?.content || '';
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.center-text {
  text-align: center;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto; 
  scrollbar-width: none; 
}

body::-webkit-scrollbar {
  display: none;
}

.background {
  position: fixed; /* Keep background fixed */
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
  width: 100%; 
  max-width: 1000px; 
  max-height: 90vh;
  background-color: #FF8DA3;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none;
}

.main-container::-webkit-scrollbar {
  display: none; 
}

/* Header */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #E37E91;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  background-color: #FFDAF1;
  color: #E37E91;
  font-size: 1.2rem;
  font-weight: bold;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  flex-grow: 1;

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

/* Navigation Buttons */
.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.nav-btn {
  flex: 1;
  padding: 10px;
  background-color: #E37E91;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.nav-btn.active, .nav-btn:hover {
  background-color: #FFDAF1;
  color: #E37E91;
  font-weight: bold;
  box-shadow: 0 0 5px rgba(255, 138, 163, 0.5);
}

/* Content */
.content {
  text-align: center;
  color: white;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-container {
  background: url('https://i.pinimg.com/originals/43/77/7a/43777aabdfd50ec9184e63cb07919f62.gif');
  background-size: cover;
  width: 100%;
  height: 150px;
  margin: 20px 0;
  border-radius: 10px;
}

.display-box {
  width: 100%;
  max-width: 100%;
  text-align: center;
  padding: 20px;
  background-color: #FFDAF1;
  color: #E37E91;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem; /* Adjusted base font size */
  line-height: 1.4;
}

/* Footer Button */
.footer-form {
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: #FFDAF1;
  color: #E37E91;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.footer-form:hover {
  background-color: #fe5a78;
  color: #FFDAF1;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .main-container {
    width: 90%;
    max-height: 95vh;
    padding: 15px;
  }

  .title-container {
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
  }

  .icons-social {
    justify-content: center;
    margin-top: 5px;
  }

  .nav-buttons {
    flex-direction: column;
    align-items: center;
  }

  .nav-btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .main-container {
    padding: 10px;
    max-height: 97vh;
  }

  .title-container {
    font-size: 0.9rem;
  }

  .image-container {
    height: 100px;
  }

  .display-box {
    font-size: 0.9rem;
    padding: 15px;
  }

  .footer-form {
    font-size: 12px;
  }
}
</style>
