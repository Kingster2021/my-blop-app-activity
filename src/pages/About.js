import Header from "./layout/Header"
import Footer from "./layout/Footer"



function About() {
    return(
        <>
        <div>
            <h1 style={{textAlign:"center", fontsize:"40px", padding:"100px"}}>About Us</h1>
        </div>
        <div class="card mb-3">
  <img src="https://img1.wsimg.com/isteam/stock/Y8kdoa7/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Our Team</h5>
    <p class="card-text">I don't really have a team this is all my imagination u also are part of my imagination.</p>
    <p class="card-text"><small class="text-muted">Just Kidding.</small></p>
  </div>
</div>
        </>
    )
}
export default About;