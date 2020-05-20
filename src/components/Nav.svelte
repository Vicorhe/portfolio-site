<script>
  import { link, location } from "svelte-spa-router";
</script>

<style type="text/scss">
  @import "../styles/color_pallete";
  #nav {
    span {
      display: inline-block;
      padding: 0 4px;
      color: $primary;
      a {
        text-decoration: none;
        color: $primary;
      }
    }
  }
  @media screen and (min-width: 991px) {
    #nav {
      padding-bottom: 1em;
      padding-right: 2em;
      display: flex;
      justify-content: flex-end;
      font-size: 1.25em;
      span {
        padding: 0 9px;
      }
    }
  }
</style>

<div id="nav">
  {#if $location !== '/'}
    <span>
      <a href="/" use:link>Projects</a>
    </span>
    <span>•</span>
  {/if}

  {#if $location !== '/blog'}
    <span>
      <a href="/blog" use:link>Blog</a>
    </span>
    {#if $location !== '/about'}
      <span>•</span>
    {/if}
  {/if}

  {#if $location !== '/about'}
    <span>
      <a href="/about" use:link>About</a>
    </span>
  {/if}

</div>
