function HomePage() {
  return (
    <div>
      <section className="hero">
        <header id="header">
          <a id="logo" href="/">
            <img src="(./src/assets/images/p-logo-no-backgournd)" />
          </a>
          <nav>
            <a id="menu-icon">≡</a>
          </nav>
        </header>
        <header className="hero-header">
          <h1 className="hero-title">ParkIt</h1>
        </header>
        <footer className="hero-footer">
          <a className="button button-primary" href="#">
            Need a Spot?
          </a>
          <a className="button" href="#">
            Found a Spot?
          </a>
        </footer>
      </section>
    </div>
  );
}

export default HomePage;
