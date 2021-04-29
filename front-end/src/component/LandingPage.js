
function LandingPage() {
    return (
      <div>
        <header>
          <nav class="main-nav">
            <h3><a href="/FrontPage.js">Team 3FT2 Social Network</a></h3>
            
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">New Post</a></li>
            </ul>

          </nav>         
        </header>

          <main>
              <div class="landing-container">
                  <section class="left-landing">
                      <h1>3FT2 Social Network</h1>
                      <span>Tagline here</span>
                  </section>
                <section class="right-landing">
                    <div class="btn-container">
                    <button name="login" class="btn-login" href="/component/LoginPage.js">Login</button>
                    </div>
                    <div class="btn-container">
                    <button name="create-account" class="btn-account">Create Account</button>
                    </div>
                </section>
              </div>
        
        </main>

        <footer></footer>
      </div>
    );
  }
  
  export default LandingPage;