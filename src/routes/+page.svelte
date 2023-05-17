<script>
  import  INPUT_CLASS  from '$lib/input.style';

  let action = '?/login';
  let isRegister = false;

  const handleRegisterOrLogin = () => {
    isRegister = !isRegister;
    action = isRegister ? '?/register' : '?/login'
  };
</script>

<main class="p-4"> 
  <form {action} method="post" class="flex flex-col">
    <h1>XauenDevs</h1>
    <label class="my-3" for="email">Correo Electronico</label>
    <input class="{INPUT_CLASS}" type="text" name="email" id="email">
    <label class="my-3" for="password">Contraseña</label>
    <input class="{INPUT_CLASS}" type="text" name="password" id="password">
    <div>
      <button class="my-3 hover:underline decoration-teal-600 underline-offset-8" type="button" on:click={handleRegisterOrLogin}>{isRegister ? 'Registrate' : 'Ya tienes una cuenta?, Inicia Sesión'}</button>
    </div>
    <button class="{INPUT_CLASS}" type="submit">{isRegister ? 'Registrarse' : 'Iniciar Sesión'}</button>
    
  </form> 

</main>
