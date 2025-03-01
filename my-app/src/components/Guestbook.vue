<template>
  <div class="background">
    <div class="main-container">
      <div class="header">
        <div class="title-container">Guestbook</div>
        <button class="btn return-btn" @click="navigateTo('/AboutMe')"></button>
      </div>

      <form @submit.prevent="addEntry" class="form-container">
        <p>
          Your Name: <br />
          <input type="text" v-model="guestName" placeholder="Enter your name" required />
        </p>
        <p>
          What do you prefer to be called? <br />
          <input type="text" v-model="guestNickname" placeholder="Enter your nickname" required />
        </p>
        <p>
          Send a message <br />
          <textarea v-model="guestMessage" placeholder="Write your message" rows="4" required></textarea>
        </p>
        <button type="submit">Submit</button>
      </form>

      <p v-if="confirmationMessage" class="confirmation">{{ confirmationMessage }}</p>

      <div class="entries-container">
        <h3>Guestbook Entries</h3>
        <ul>
          <li v-for="entry in guestbookEntries" :key="entry.id">
            <strong>{{ entry.guest_name }} ({{ entry.guest_nickname }})</strong>: {{ entry.guest_message }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import supabase from "@/supabase";

export default {
  data() {
    return {
      guestName: "",
      guestNickname: "",
      guestMessage: "",
      confirmationMessage: "",
      guestbookEntries: [],
    };
  },
  async mounted() {
    await this.fetchEntries();
  },
  methods: {
    async addEntry() {
      if (!this.guestName || !this.guestNickname || !this.guestMessage) {
        console.error("All fields are required.");
        return;
      }

      const { data, error } = await supabase.from("guestbook").insert([
        {
          guest_name: this.guestName,
          guest_nickname: this.guestNickname,
          guest_message: this.guestMessage,
        },
      ]);

      if (error) {
        console.error("Error inserting into Supabase:", error.message);
        return;
      }

      console.log("Successfully added entry:", data);

      this.confirmationMessage = `Your message has been submitted, ${this.guestName}!`;
      this.guestName = "";
      this.guestNickname = "";
      this.guestMessage = "";

      setTimeout(() => {
        this.confirmationMessage = "";
      }, 5000);

      await this.fetchEntries();
    },
    async fetchEntries() {
      const { data, error } = await supabase.from("guestbook").select("*").order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching guestbook entries:", error.message);
        return;
      }

      this.guestbookEntries = data;
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
  width: 80%;
  max-width: 600px;
  max-height: 100vh; 
  background-color: #ff8da3;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow-y: auto; /* Allows scrolling inside */
  scrollbar-width: none; /* Hides scrollbar in Firefox */
}

/* Hide scrollbar in Chrome, Safari, Edge */
.main-container::-webkit-scrollbar {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e37e91;
  padding: 15px;
  border-radius: 10px;
}

.title-container {
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  color: #e37e91;
  background-color: #ffdaf1;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.return-btn {
  background-image: url("@/assets/icon_return.png");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffdaf1;
  border-radius: 10px;
  border: none;
  width: 49px;
  height: 49px;
  cursor: pointer;
}

.form-container {
  background-color:rgb(255, 202, 232);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  text-align: center;
}

form p {
  font-size: 14px;
  text-align: left;
  color: #e37e91;
}

form input,
form textarea,
form button {
  width: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e37e91;
  background-color: #FFFBF3;
  font-size: 14px;
}

form input::placeholder,
form textarea::placeholder {
  color: #e37e91;
}

form button {
  background-color: #e37e91;
  color: #FFFBF3;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #c85d73;
}

.confirmation {
  margin-top: 10px;
  font-size: 14px;
  color: #ffdaf1;
  font-weight: bold;
  text-align: center;
}

.entries-container {
  margin-top: 20px;
  text-align: left;
  padding: 15px;
  background: #FFFBF3;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.entries-container h3 {
  color: #e37e91;
  font-size: 16px;
  margin-bottom: 10px;
}

.entries-container ul {
  list-style: none;
  padding: 0;
}

.entries-container li {
  padding: 8px;
  border-bottom: 1px solid #e37e91;
  color: #e37e91;
}

.entries-container li:last-child {
  border-bottom: none;
}
</style>
