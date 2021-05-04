
function LoginPage() {
    return (
      <div className="fpContainer">
        <header>
        <nav class="secondary-nav">
          <h3><a href="#">Team 3FT2 Social Network</a></h3>
          <span>Tagline here</span>
        </nav>         
      </header>

    <section>
        <div class="formContainer">
            <form class="fpForm">
                <h2>Login</h2>
            <div class="formTop">
                <label class="useremail" for="email">Email Address</label>
                <input class="useremail" type="email" placeholder="abc123@example.com" name="email"></input>
            </div>
            <div class="formBottom">
                <label class="password" for="pw">Password</label>
                <input class="password"type="password" placeholder="Enter Password" name="pw"></input>
            </div>
            </form>
        </div>
    </section>
      </div>
    );
  }
  
  export default LoginPage;