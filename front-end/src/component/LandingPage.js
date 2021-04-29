
function LandingPage() {
    return (
      <div>
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
      </div>
    );
  }
  
  export default LandingPage;