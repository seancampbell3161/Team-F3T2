
function SettingsPage() {
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
      <body>
        <section>
          <ul>
              <li><button id="Delete" type="button" name="button">Delete Account</button></li>
              <li><button id="Block" type="button" name="button">Block List</button></li>
              <li><button id="Night" type="button" name="button">Nightmode</button></li>
          </ul>
        </section>


      
      </body>
      </div>
    );
  }

  export default SettingsPage;
