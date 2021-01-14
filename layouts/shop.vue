<template>
  <div class="container">
    <Header />
    <section class="shop">
      <Aside />
      <Nuxt />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style lang="scss">
.login-form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-form_input{
  width: 300px;
  outline: none;
  padding: 4px 6px;
  transition: .3s;
  border: 1px solid #8f8e8e;

&:focus{
   border: 1px solid $main;
 }

}
.login-form_label{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 450px;
  margin-bottom: 20px;
}
.login-form_submit, .login-form_show-btn{
  min-width: 100px;
  border: none;
  margin: 20px 0 0 0;
  padding: 10px 12px;
  font-weight: 500;
  background: $main;
  color:$white;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: .3s;

&:hover{
   background: $black;
   transition: .3s;
 }
}

.login-form_show-btn{
  position: absolute;
  min-width: 50px;
  height: 100%;
  padding: 0;
  margin: 0;
  right: -50px;
  background: $main;
}

.shop{
  display: flex;
}

.radiobutton{
  cursor: pointer;

  &[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: $main;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }
}
</style>
