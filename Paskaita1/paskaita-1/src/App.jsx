import './App.css';

function App() {
  return (
    <div>
      <header>
        <img
          className="microsoft-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
          alt="microsoft logo"
        />
      </header>
      <nav className="green-background">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contacts</a>
      </nav>
      <main>
        <div>
          <img
            className="desert-image"
            src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
            alt="desert"
          />
          <div className="green-background header-text">
            <h3>About</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus consequatur dolorem unde doloribus labore odio impedit
            laborum, provident, reiciendis commodi, non fugiat adipisci quaerat magni in necessitatibus modi officia praesentium?
          </p>
        </div>
      </main>
      <footer>
        <div>
          <div className="green-background header-text">
            <h3>Contacts</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, perspiciatis qui deleniti ducimus iste praesentium ullam
            cupiditate expedita officia placeat architecto magni aperiam aspernatur rerum tenetur facilis hic officiis reprehenderit?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sequi odit illo veniam, in officiis quia maiores ex mollitia
            possimus praesentium sunt tenetur aut assumenda, molestias nobis non reprehenderit qui?
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
