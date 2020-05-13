<style type="text/scss">
  @import "../styles/color_pallete";
  .mailing-list {
    text-align: center;
    margin-bottom: 30px;
    h1 {
      color: $primary;
      margin: 0 0 10px;
    }
    .input-row {
      max-width: 90%;
      margin: auto;
      input {
        display: inline-block;
        padding: 0.8rem;
        font-size: 1.25rem;
        &#email {
          width: 230px;
          margin-right: 7px;
        }
        &#submit {
          width: 50px;
          color: $primary;
          font-weight: bold;
          background-color: $highlight;
        }
      }
    }
  }
</style>

<div class="mailing-list">
  <h1>New posts</h1>
  <div class="input-row">
    <input type="email" id="email" placeholder="Enter your email" />
    <input type="submit" value="Go" id="submit" />
  </div>
</div>
