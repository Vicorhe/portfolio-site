<script>
  import Header from "../components/Header.svelte";
  import Entry from "../components/Entry.svelte";
  import MailingList from "../components/MailingList.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style type="text/scss">
  .blog-posts {
    .page-content {
      .sub-header {
        font-size: 1.5rem;
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
</style>

<Header />
<main class="blog-posts">
  <div class="page-content">
    <p class="sub-header">Just some notes</p>
    <div class="entries">
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>

  </div>
  <MailingList />
  <Footer />
</main>
