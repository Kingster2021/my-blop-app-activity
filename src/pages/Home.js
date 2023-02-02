



function Home() {
    return(
        <>
        <main>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmtsYtRcOHe401fDmEMxaR_nQdxp-HnFKJg&usqp=CAU" style={{height:"80vh", width:"80vh"}} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:"black", fontSize:"80px", textShadow:"5px 5px cyan"}}>Welcome to My Page</h5>
        <p>If you can read this text your eyesight is good.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://d2zjx838egoiiq.cloudfront.net/077a0cef/web%20dev-NEW.jpg" style={{height:"80vh", width:"80vh"}} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:"black", fontSize:"80px", textShadow:"5px 5px cyan"}}>This is the Second Slide</h5>
        <p>This is useless text i don't know what am i gonna do.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVG6uA5H6w1ByUaweD2CA5nBpjXG-I4Z7wGjOokiuM21Rz1sC1PJZJwtZ9vFDpHIPFMag&usqp=CAU" style={{height:"80vh", width:"80vh"}} class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:"black", fontSize:"80px", textShadow:"5px 5px cyan"}}>The Third Slide</h5>
        <p>What a useless page.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</main>
        </>
    )
}
export default Home;