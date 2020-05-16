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
      font-size: 1.75rem;
      color: $primary;
    }

    .divider {
      border-bottom: 1px solid $primary;
    }

    p {
      font-size: 1.25rem;
      color: $primary;
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
  <p>Practice.</p>
  <p>Everytime I try to attach a constructive motive, I talk myself out.</p>
  <p>Build an audience? Promote a business? Showcase my work? Get clients?</p>
  <p>
    Sounds awesome, but to get it rolling will require more effort than I can
    currently expend.
  </p>
  <p>Maybe I can help someone build something useful at a later point.</p>
  <p>Until then, I need as much practice as possible.</p>
  <h1>Me</h1>
  <div class="divider" />

  <p>Software Engineer @ LA.</p>
  <p>UC San Diego @ 2018</p>
</main>
<Footer />