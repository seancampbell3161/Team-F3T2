
function AccountPage() {
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
            <section class="user-feed">
                <div class="user-container">
                    <div class="user-post">
                        <img src="images/samplepack-icon.png" alt="userpic"/>
                    </div>
                    <div class="user-post">
                        <img src="images/samplepack-icon.png" alt="userpic"/>
                    </div>
                    <div class="user-post">
                        <img src="images/samplepack-icon.png" alt="userpic"/>
                    </div>
                    <div class="user-post">
                        <img src="images/samplepack-icon.png" alt="userpic"/>
                    </div>
                </div>
            </section>
        </main>
      </div>
    );
  }
  
  export default AccountPage;