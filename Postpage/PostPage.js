
function PostPage() {
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
        <section class="whole">
        // <!-- will have the h1 post here -->
        <section class="text">
          <h1>Post Your Image</h1>
        </section>

        // <!-- will have the button and search bar that will show file name -->
        <section class="addimage">
          <input type="text" placeholder="Add Picture">
          <button type="button" name="button">Select File</button>
        </section>

        // <!-- empty section where image will show up (js) -->
        <section id="imagehere">
        </section>

        // <!-- add comment and button -->
        <section class="addcomment">
          <input type="text" placeholder="Add Comment">
          <button type="button" name="button">Add Comment</button>
        </section>

      </section>


      
      </body>
      </div>
    );
  }

  export default PostPage;
