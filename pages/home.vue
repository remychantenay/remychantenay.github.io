<template>
  <div id="homepage" v-smooth-scroll>
    <h2 class="center no-select p-16">
      Remy Chantenay
    </h2>
    <div id="social-icons" class="center mb-24">
        <img 
          id="ic-linkedin"
          @click="openSocialLink('https://www.linkedin.com/in/rchantenay/')"
          src="../src/assets/images/ic-linkedin.svg" 
          alt="ic-linkedin" />
        <img 
          id="ic-github"
          @click="openSocialLink('https://github.com/remychantenay')"
          src="../src/assets/images/ic-github.svg" 
          alt="ic-github" />
        <img 
          id="ic-medium"
          @click="openSocialLink('https://medium.com/@remy.chantenay')"
          src="../src/assets/images/ic-medium.svg" 
          alt="ic-medium" />
    </div>
    <div class="no-select center p-16">
      <div id="profile-summary" class="left">
        <p>
          <strong>8+ years of experience in software development</strong>, distributed systems, architecture and cloud solutions.
        </p>
        <p>
          <strong>Well-rounded:</strong> broad skill set, full stack experience. Thorough understanding of distributed systems at scale as well as mobile ecosystems.
        </p>
        <p>
          <strong>Quality-driven:</strong> strong track record of using emerging technologies to continuously improve and innovate products and workflows.
        </p>
        <p>
          <strong>Soft skills:</strong> pursuing the long-term perspective and working to the highest standards of quality, both as a leader and as an individual contributor.
        </p>
        <p>
          <strong>Avid learner:</strong> constantly improving my knowledge of cutting-edge technologies across the stack and outside of my domain of expertise.
        </p>
        <p>
          Team leadership & stakeholder management — I managed and grew engineers and leaders in fast-paced, dynamic environments for the past few years. 
        </p>
      </div>
      <p class="center mt-24">
        Scroll down to see my work.
      </p>
      <div class="center">
        <img id="ic-scroll-down" src="../src/assets/images/ic-scroll-down.svg" alt="ic-scroll-down" />
      </div>
    </div>

    <div class="mt-24">
    <Card 
      :coverImagePath="`image-cover-wilo.jpg`"  
      :project="`wilo`" 
      v-on:onCardClicked="goto" />
    <Card 
      :coverImagePath="`image-cover-wtm.jpg`" 
      :project="`wtm`" 
      v-on:onCardClicked="goto" />
    <Card 
      :coverImagePath="`image-cover-gotaxfree.jpg`" 
      :project="`gotaxfree`" 
      v-on:onCardClicked="goto" />
    <Card 
      :coverImagePath="`image-cover-supercard.jpg`" 
      :project="`supercard`" 
      v-on:onCardClicked="goto" />
    <Card 
      :coverImagePath="`image-cover-ct.jpg`" 
      :project="`carthrottle`" 
      v-on:onCardClicked="goto" />
    <Card 
      :coverImagePath="`image-cover-bundll.jpg`" 
      :project="`bundll`" 
      v-on:onCardClicked="goto" />
    <Card 
      :coverImagePath="`image-cover-pdlp.jpg`" 
      :project="`pdlp`" 
      v-on:onCardClicked="goto" />
    </div>
  </div>
</template>

<script>
import Card from "../components/content/Card";
export default {
  name: "Home",
  components: {
    Card
  },
  methods: {
    trackEvent(action, category) {
      this.$gtag.event(action, {
        event_category: category
      });
    },
    goto(project) {
      this.$router.push(`/${project}`).catch(err => {
        console.log(err);
      });
    },
    openSocialLink(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/variables.scss";

#homepage {
  h2 {
    text-shadow: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 50px;
    letter-spacing: 0.05em;
    margin-bottom: 0px;
  }

  h3 {
    text-shadow: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.02em;
  }

  @media only screen and (min-width: $small-bp) {
    h2 {
      font-size: 42px;
      line-height: 50px;
    }
    h3 {
      font-size: 24px;
      line-height: 30px;
    }
  }
}

#ic-scroll-down {
  width: 32px;
  height: 32px;
}

#social-icons {
  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-left: $spacing-3;
    margin-right: $spacing-3;
  }
}

#profile-summary {
  background:  $grey;
  max-width:  800px;
  margin:  30px auto 16px;
  padding:  16px;
  border-radius:  $border-radius;
  mix-blend-mode: normal;
}
</style>
