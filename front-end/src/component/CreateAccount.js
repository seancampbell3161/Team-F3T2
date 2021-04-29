
function CreateAccountPage() {
    return (
      <div className="fpContainer">

        <header>
          <nav class="main-nav">
            <h3>Team 3FT2 Social Network</h3>
            <span>Tagline here</span>
          </nav>         
        </header>

        <h2>Create Account</h2>
        <div class="formContainer">
          <form class="fpForm">
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
      </div>
    );
  }
  
  export default CreateAccountPage;