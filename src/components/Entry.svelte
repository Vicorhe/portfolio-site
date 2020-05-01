<style type="text/scss">
  $border: #bcd6f1;
  $foreground: rgba(228,238,245,.93);
  .entry {
    min-width: 300px;
    padding: 20px;
    border: 1px solid $border;
    border-radius: 4px;
    margin-bottom: 20px;
    //background-color: red;
    background-color: $foreground;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 30px;
      height: 200px;
    }
    .divider {
      width: 90%;
      border-top: 1px solid $border;
      margin: 20px 0;
    }
    h2 {
      margin: 0 0 10px;
      color: rgb(99, 85, 66);
    }
    p {
      margin: 0;
    }
  }
</style>

<div class="entry">
  <img src="assets/images/mock_product.svg" alt="Mock Product">
  <div class="divider" />
  <h2>SaaS Templatekkkk</h2>
  <p>Everything you need</p>
</div>
