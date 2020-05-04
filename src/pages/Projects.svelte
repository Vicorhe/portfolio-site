<script>
  import Entry from "../components/Entry.svelte";
  import MailingList from "../components/MailingList.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style type="text/scss">
  main {
    .page-content {
      .entries {
        margin-bottom: 30px;
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
  <div class="page-content">
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
