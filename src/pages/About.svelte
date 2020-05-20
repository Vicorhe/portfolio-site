<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style type="text/scss">
  @import "../styles/color_pallete";
  .about {
    margin: 0 20px 35px;
    .headshot-container {
      display: flex;
      justify-content: center;
      #headshot {
        width: 50%;
        max-width: 300px;
      }
    }

    h1 {
      margin-top: 30px;
      font-size: 1.75em;
      color: $primary;
    }

    .divider {
      border-bottom: 1px solid $primary;
    }

    p {
      font-size: 1.25em;
      color: $primary;
    }
  }
  @media screen and (min-width: 991px) {
    .about {
      max-width: 400px;
      margin: 0 auto 120px;
      p {
        margin-bottom: 0;
      }
    }
  }
</style>

<Header />
<main class="about">
  <div class="headshot-container">
    <img id="headshot" src="assets/images/headshotTemp.jpg" alt="" />
  </div>

  <h1>What is the Point of this Site?</h1>
  <div class="divider" />
  <p>Share some free neat things.</p>
  <p>Reach out to suggest projects.</p>
  <h1>Me</h1>
  <div class="divider" />

  <p>Software Engineer @ LA.</p>
  <p>UC San Diego @ 2018</p>
  <Footer />
</main>
