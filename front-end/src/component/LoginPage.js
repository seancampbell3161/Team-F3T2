
function LoginPage() {
    return (
      <div className="fpContainer">
        <h1>Team-F3T2</h1>
        <div class="formContainer">
          <form class="fpForm">
            <div class="formTop">
              <label class="username" for="un">Username</label>
              <input class="username" type="text" placeholder="Enter Username" name="un"></input>
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
  
  export default LoginPage;