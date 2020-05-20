<script>
  import Nav from "./Nav.svelte";
  import { location } from "svelte-spa-router";
  export let home;
</script>

<style type="text/scss">
  @import "../styles/color_pallete";
  .page-hero {
    padding: 3em 0 1em;
    text-align: center;
    background-color: white;
    .sub-header {
      display: none;
    }
    h1 {
      color: $primary;
      font-size: 2.75em;
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
    box-shadow: 41px 16px 0 15px $background;
    -webkit-transform: rotate(-1deg);
    -ms-transform: rotate(-1deg);
    transform: rotate(-1deg);
  }
  @media screen and (min-width: 991px) {
    .page-hero {
      padding-top: 2em;
      padding-bottom: 3em;
      .sub-header {
        display: block;
        font-size: 1.5em;
        font-family: Garamound, serif;
        font-style: italic;
        font-weight: normal;
        color: #555;
        text-align: center;
      }
      h1 {
        margin-top: 0;
        font-size: 6em;
      }
      .gap {
        height: 106px;
      }
    }
    .divider {
      box-shadow: 41px 19px 0 20px #f1f4f6;
    }
  }
</style>

<div class="page-hero">
  <Nav />
  {#if home}
    <h2 class="sub-header">My work</h2>
  {/if}
  <h1>
    <a href="/">Victor He</a>
  </h1>
  {#if home}
    <div class="gap" />
  {/if}
</div>

<div class="divider" />
