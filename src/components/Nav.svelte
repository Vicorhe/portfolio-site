<script>
  import { link, location } from "svelte-spa-router";
</script>

<style type="text/scss">
  #nav {
    span {
      display: inline-block;
      padding: 0 4px;
      a {
        text-decoration: none;
      }
    }
  }
</style>

<div id="nav">
  <p>The current page is: {$location}</p>

  <span>
    <a href="/blog" use:link>Blog</a>
  </span>
  <span>•</span>
  <span>
    <a href="/about" use:link>About</a>
  </span>
</div>
