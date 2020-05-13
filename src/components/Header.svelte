<script>
  import Nav from "./Nav.svelte";
</script>

<style type="text/scss">
  @import "../styles/color_pallete";
  .page-hero {
    padding: 3rem 0 1rem;
    text-align: center;
    background-color: white;
    h1 {
      color: $primary;
      font-size: 2.75rem;
      font-weight: 700;
      font-family: Roboto, sans-serif;
      a {
        text-decoration: none;
        &:visited {
          color: unset;
        }
        &:hover {
          color: $highlight;
        }
      }
    }
  }
  .divider {
    position: relative;
    top: -12px;
    margin-left: -15%;
    margin-bottom: 30px;
    border-top: 1px solid $primary;
    box-shadow: 41px 9px 0 9px $background;
    -webkit-transform: rotate(-1deg);
    -ms-transform: rotate(-1deg);
    transform: rotate(-1deg);
  }
  @media screen and (min-width: 991px) {
    .page-hero {
      padding-top: 2rem;
      padding-bottom: 5rem;
      h1 {
        font-size: 6rem;
      }
    }
    .divider {
      box-shadow: 41px 19px 0 20px #f1f4f6;
    }
  }
</style>

<div class="page-hero">
  <Nav />
  <h1><a href="/">Victor He</a></h1>
</div>
<div class="divider" />
