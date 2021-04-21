<template>
  <div class="mailing">
    <label for="mailing" class="mailing_label">
      <h1 class="h1"><font-awesome-icon :icon="['far', 'envelope']" size="lg" /> Get latest update & news</h1>
    </label>
    <form action="" class="mailing_form">
      <input id="mailing" type="email" class="input mailing_input" placeholder="Your Email Addres">
      <button class="btn mailing_btn" type="submit">
        <font-awesome-icon :icon="['far', 'paper-plane']" size="lg" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Mailing'
}
</script>

<style scoped lang="scss">
  .mailing,.mailing_form{
    display: flex;
  }

  .mailing{
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .mailing_form{
    align-items: flex-end;
  }
  .mailing_input{
    border: 1px solid transparent;
    background: $gray-f2;
    color: $gray-85;
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
  }

  .h1{
    margin-right: 30px;
  }
  @media (max-width: 992px){
    .h1{
      margin-right: 0;
    }
    .mailing {
      flex-direction: column;
    }

    .mailing_input{
      margin-top: 10px;
      width: 100%;
      max-width: 350px;
    }
  }
</style>
