<template>
  <div class="mailing">
    <label for="mailing" class="mailing_label">
      <h1 class="h1">
        <font-awesome-icon :icon="['far', 'envelope']" size="lg" />

        Get latest update & news
      </h1>
      <input id="mailing" type="email" class="input mailing_input" placeholder="Your Email Addres">
    </label>
    <button class="btn mailing_btn" type="submit">
      <font-awesome-icon :icon="['far', 'paper-plane']" size="lg" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Mailing'
}
</script>

<style scoped lang="scss">
  .mailing{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
  }
  .mailing_input{
    border: 1px solid transparent;
    background: #f2f2f2;
    color: #858585;
    padding: 8px 15px;
  }
  .mailing_btn{
    min-width: 50px;
    margin: 0;
    padding: 10px 15px;
    height: 38px;
  }
  .mailing_label{
    display: flex;
    align-items: center;
    justify-content: center;
    .h1{
      margin-right: 30px;
    }
  }

  @media (max-width: 992px){
    .mailing {
      align-items: flex-end;
    }
    .mailing_label{
      flex-direction: column;
    }
    .mailing_input{
      margin-top: 10px;
    }
  }
</style>
