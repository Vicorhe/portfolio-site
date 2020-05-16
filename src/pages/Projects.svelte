<script>
  import Header from "../components/Header.svelte";
  import Entry from "../components/Entry.svelte";
  import MailingList from "../components/MailingList.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style type="text/scss">
  .projects {
    .page-content {
      .entries {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  @media screen and (min-width: 991px) {
    .projects {
      .page-content {
        padding-top: 120px;
        width: 1024px;
        margin: auto;
        .entries {
          position: absolute;
          top: 240px;
          width: 1024px;
          margin: auto;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }
</style>

<Header home />
<main class="projects">
  <div class="page-content">
    <div class="entries">
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
    <MailingList />
    <Footer />
  </div>
</main>
