<template>
  <div class="contact">
    <h2 class="black no-select mb-24">Contact me</h2>
    <div class="container mt-24">
        <r-grid columns="8">
          <r-cell span="2+3" span-s="row">
            <p>
              
            </p>
            <form
              class="w-100 mt-24"
              action="https://formspree.io/xyydaojy"
              method="POST"
            >
              <label class="mt-24">
                <span>Name</span>
                <input type="text" class="w-100" name="name" />
              </label>
              <label class="mt-24">
                <span>Email Address</span>
                <input type="text" class="w-100" name="_replyto" />
              </label>
              <label class="mt-24">
                <span>Message</span>
                <textarea class="w-100" name="message"></textarea>
              </label>
              <button class="btn btn-primary no-select mt-16" type="submit">
                Send
              </button>
            </form>
          </r-cell>
          <r-cell span="3" span-s="row">
            <div id="lottie-animation-contact"></div>
          </r-cell>
        </r-grid>
      </div>
  
  </div>
</template>
<script>

import lottie from "lottie-web";

export default {
  name: "Contact",
  mounted() {
    this.animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation-contact'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/contact.json'
    });
  },
  beforeDestroy() {
    this.anim.stop();
    this.anim.destroy();
  },
  methods: {
    trackEvent(action, category) {
      this.$gtag.event(action, {
        event_category: category
      });
    },
    showError(msg) {
      this.error = msg;
      this.loading = false;
    }
  },
  data() {
    return {
      error: null,
      loading: false,
      animation: null
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/variables.scss";

.contact {
  background-color: $white;
  background-position: center;
  background-repeat: no-repeat;
  color: $black;
  min-height: fit-content;
  height: fit-content;
  overflow: hidden;
  padding: $spacing-9 0;
  position: relative;
  text-align: center;
  width: 100%;

  h2 {
    margin-top: $spacing-4;
    text-shadow: none;
    font-family: Inter;
    font-style: bold;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  textarea {
    height: 100px;
    padding: $spacing-2;
  }

  #lottie-animation-contact {
    width: 300px;
    height: 300px;
    margin: auto;
  }

  @media only screen and (max-width: $small-bp - 1px) {
    padding: $spacing-5 0;
  }

  @media only screen and (min-width: $small-bp) {
    h2 {
      font-size: 34px;
      line-height: 40px;
    }

    #lottie-animation-contact {
      width: 600px;
      height: 600px;
    }
  }
}
</style>
