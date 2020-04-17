<template>
  <ul class="menu-links">
    <li>
      <a href="" @click.prevent="gotoContact()">
        Contact
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: "MenuLinks",
  methods: {
    trackEvent(action, category, label) {
      // label is optional
      if (label) {
        this.$gtag.event(action, {
          event_category: category,
          event_label: label
        });
      } else {
        this.$gtag.event(action, {
          event_category: category
        });
      }
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
    goto(destination) {
      this.closeMenu();
      this.$router.push(destination).catch(err => {
        console.log(err);
      });
    },
    gotoContact() {
      this.closeMenu();
      this.$router.push('/contact').catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/global-styles/variables.scss";

.menu-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;

    &:last-of-type {
      a,
      div {
        color: $primary;
      }

      svg {
        display: inline;
        margin-right: $spacing-1;
      }
    }
  }

  a,
  div {
    color: inherit;
    display: inline-block;
    padding: $spacing-4 $spacing-3;
    text-decoration: none;
    cursor: pointer;

    &:visited {
      color: $black;
    }

    svg {
      display: none;
    }

    &:focus,
    &:hover {
      color: $primary;
      outline: none;
    }

    &:active {
      background-color: $grey-variant;
      transition: background-color $transition;
    }
  }
}

@media screen and (max-width: $small-bp - 1px) {
  .menu-links {
    border-top: 1px solid $grey-variant;
    flex-flow: wrap;
    padding: 0.5rem 0;
    background: $white;

    li {
      width: 100%;
    }

    a,
    div {
      font-weight: 600;
      display: block;
      font-size: $font-size-4;
      padding: $font-size-4;

      svg {
        display: block;
        float: right;
      }
    }
  }
}
</style>
