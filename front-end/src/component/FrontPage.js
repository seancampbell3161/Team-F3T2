
function FrontPage() {
    return (
      <div>
          <header>
          <nav class="main-nav">      
            <ul>
                <li><h3><a href="/FrontPage.js">Team 3FT2 Social Network</a></h3></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">New Post</a></li>
                <li><a href="#">Logout</a></li>
            </ul>        
          </nav>         
      </header>

      <main>
          <section class="main-feed">
              <div class="main-container">
                  <div class="main-post">
                          <img src="" alt="pic" class="img-fluid"/>
                  </div>

                  <div class="main-post">
                          <img src="" alt="pic2" class="img-fluid"/>       
                  </div>

                  <div class="main-post">  
                      <img src="" alt="pic3" class="img-fluid"/>
                  </div>
              </div>
              
          </section>
      </main>
      </div>
    );
  }
  
  export default FrontPage;