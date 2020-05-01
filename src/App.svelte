<script>
  import Entry from "./components/Entry.svelte";
  import MailingList from "./components/MailingList.svelte";
  let name = "Victor He";
</script>

<style type="text/scss">
  $primary: #006089;
  $background: #f1f4f6;
  main {
    .page-hero {
      padding: 3rem 0 1rem;
      text-align: center;
      background-color: #ffffff;
      #nav {
        span {
          display: inline-block;
          padding: 0 4px;
          a {
            text-decoration: none;
          }
        }
      }
      h1 {
        color: $primary;
        font-size: 2.75rem;
        font-weight: 700;
        font-family: Roboto, sans-serif;
      }
    }
    .divider {
      position: relative;
      top: -12px;
      margin-left: -15%;
      border-top: 1px solid $primary;
      box-shadow: 41px 9px 0 9px $background;
      -webkit-transform: rotate(-1deg);
      -ms-transform: rotate(-1deg);
      transform: rotate(-1deg);
    }
    .page-content {
      .entries {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <div class="page-hero">
    <div id="nav">
      <span>
        <a href="#blog">Blog</a>
      </span>
      <span>•</span>
      <span>
        <a href="#about">About</a>
      </span>
    </div>
    <h1>{name}</h1>
  </div>
  <div class="divider" />
  <div class="page-content">
    <div class="entries">
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>

  </div>
  <MailingList />
</main>
