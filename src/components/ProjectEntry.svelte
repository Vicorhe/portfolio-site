<style type="text/scss">
  @import "../styles/color_pallete";
  .entry {
    box-sizing: border-box;
    width: 80%;
    max-width: 330px;
    padding: 20px;
    border: 1px solid $border;
    border-radius: 4px;
    margin-bottom: 25px;
    background-color: $foreground;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 30px;
      height: 75%;
    }
    .divider {
      width: 90%;
      border-top: 1px solid $border;
      margin: 20px 0;
    }
    h2 {
      margin: 0 0 10px;
      font-size: 2em;
      color: $primary;
    }
    p {
      margin: 0;
      font-size: 1.25em;
      color: $primary;
    }
  }

  @media screen and (min-width: 991px) {
    .entry {
      width: 230px;
      padding: 20px;
      margin-bottom: 0;
      img {
        margin-top: 10px;
        height: 100px;
      }
      .divider {
      }
      h2 {
      }
      p {
      }
    }
  }
</style>

<div class="entry">
  <img src="assets/images/mock_product.svg" alt="Mock Product" />
  <div class="divider" />
  <h2>SaaS Template</h2>
  <p>Everything you need</p>
</div>
