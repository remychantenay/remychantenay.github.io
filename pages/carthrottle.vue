<template>
  <div id="page">
    <div id="content" class="center">
      <h1 class="no-select center">Car Throttle</h1>
      <h2 class="no-select center">Building the Android App</h2>
      <img class="cover mt-24 mb-24" src="../src/assets/images/ct/screenshots.jpg" alt="cover-ct" />
      <h3 class="no-select left mt-24">Background</h3>
      <p class="no-select left">Car Throttle is one of the largest automotive community platforms on the internet, 
        with almost 6 million MAU. We were building a next-generation media platform with the backing of the minds and investors behind <em>Facebook</em>, <em>Skype</em> and <em>AOL</em>.
        After starting life as a car blog in 2009, Car Throttle quickly evolved into a popular site covering car news, reviews and video content. 
      </p>
      <p class="no-select left">Our users were constantly asking for an app in the website comments and were creating 
        posts about it on the website. 
        Also, we had conducted multiple surveys that always showed a heavy weighting towards an app being the next 
        feature users wanted.</p>

      <h3 class="no-select left mt-24">My Role</h3>
      <p class="no-select left">I joined Car Throttle as their first mobile engineer and my mission was to build a native, butter-smooth Android app for our users.</p>      
      <h3 class="no-select left mt-24">Outcome</h3>
      <p class="no-select left">
        Thanks to an amazing collaboration with our design team, the application was one of very first to be aligned with the Material Design guidelines from Google, which got us the privilege to be featured in the Google Play Store.
      </p>
      <p class="no-select left">
        More importantly, we delivered our first version within only four months. 
        I am particularly proud of this achievement not only due to the record time-to-market but because our customers loved it. 
        As a result, the app gained incredible success and was loved by our users.
      </p>
      <img class="mt-24 mb-24 graphic" src="../src/assets/images/ct/numbers.jpg"/>
      <h3 class="no-select left mt-24">Technologies</h3>
      <p class="no-select left">Android Studio, Java, ButterKnife, Glide, Retrofit, Google DFP, RxJava</p>
      <h3 class="no-select left mt-24">Articles</h3>
      <p class="no-select left"><a @click="open('https://medium.com/@remy.chantenay/how-to-implement-flexible-night-mode-in-your-android-app-f00f0f83b70e')" class="link-carthrottle">How To Implement Flexible Night Mode In Your Android App</a> (Medium)</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "CarThrottle",
  methods: {
    trackEvent(action, category) {
      this.$gtag.event(action, {
        event_category: category
      });
    },
    open(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/variables.scss";

#content {
    max-width:  90%;
    width:  90%;
    margin:  $spacing-5 auto $spacing-4;
    padding:  $spacing-4;

  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.03em;
    margin-bottom: 0px;
  }

  h2 {
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-top: 0px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  p {
      font-size: 16px;
      line-height: 28px;
  }

  img {
    max-width: 100%;
    //border-radius:  $border-radius;
  }

  a {
    cursor: pointer;
  }

  .graphic {
    width: 100%;
  }

  @media only screen and (min-width: $small-bp) {

    max-width:  60%;
    width:  60%;
    margin:  $spacing-2 auto $spacing-2;
    padding:  $spacing-2;

    h1 {
      font-size: 60px;
      line-height: 70px;
    }

    h2 {
      font-size: 30px;
      line-height: 60px;
    }

    h3 {
      font-size: 24px;
      line-height: 28px;
    }

    p {
        font-size: 18px;
        line-height: 30px;
    }

    .graphic {
      width: 100%;
    }
  }
}
</style>
