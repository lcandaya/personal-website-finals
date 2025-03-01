<template>
  <div class="background">
    <div class="main-container">
      <div class="header">
        <div class="title-container">Photo Gallery</div>
        <button class="home-btn" @click="navigateTo('/')"></button>
      </div>
      
      <div class="gallery-container">
        <figure v-for="photo in photos" :key="photo.name">
          <img :src="photo.url" :alt="photo.name">
          <figcaption>{{ photo.name }}</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      photos: [
        { name: 'Profile', url: '/images/me.jpg' },
        { name: 'Me in Cebu', url: '/images/me_in_cebu.jpg' },
        { name: 'My dog', url: '/images/my_dog.jpg' },
        { name: 'My friends', url: '/images/friends4.png' },
        { name: 'My friends', url: '/images/friends2.png' },
        { name: 'My family', url: '/images/family.jpg' }
      ]
    };
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

.main-container {
  width: 80%;
  max-width: 1000px;
  max-height: 80vh;
  background-color: #FF8DA3;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; 
  scrollbar-width: none; 
}

.main-container::-webkit-scrollbar {
  display: none;
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
  margin-right: 10px;
  border-radius: 8px;
  background-color: #FFDAF1;
  color: #E37E91;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

figure {
  width: 120px;
  padding: 10px;
  background-color: #FFDAF1;
  color: #E37E91;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

figcaption {
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
