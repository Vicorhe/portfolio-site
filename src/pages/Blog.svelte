<script>
  import Header from "../components/Header.svelte";
  import BlogEntry from "../components/BlogEntry.svelte";
  import MailingList from "../components/MailingList.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style type="text/scss">
  .blog-posts {
    .page-content {
      .sub-header {
        font-size: 1.5em;
        font-family: Garamound, serif;
        font-style: italic;
        color: #555;
        text-align: center;
        margin-bottom: 30px;
      }
      .entries {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  @media screen and (min-width: 991px) {
    .blog-posts {
      width: 645px;
      margin: auto;
      .page-content {
        .entries {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }
    }
  }
</style>

<Header />
<main class="blog-posts">
  <div class="page-content">
    <p class="sub-header">Just some notes</p>
    <div class="entries">
      <BlogEntry />
      <BlogEntry />
      <BlogEntry />
      <BlogEntry />
    </div>

  </div>
  <MailingList />
  <Footer />
</main>
