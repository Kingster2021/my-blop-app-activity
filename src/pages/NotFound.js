import { Link } from "react-router-dom";



function NotFound() {
    return(
        <>
        <body style={{margin:"0", padding:"0", boxSizing:"border-box"}}>
        <section className="page-404" style={{padding:"40px", backgroundColor:"white", fontFamily:"Arvo, serif;"}}>
        <div className="container">
            <div className="row">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                    <div className="four_zero_four_bg" style={{backgroundImage:"url(https://media.tenor.com/vYTwUEafhogAAAAC/404.gif)", height:"400px", width:"1100px", backgroundPosition:"center"}}>
                    <h1 className="text-center" style={{fontSize:"80px"}}>404</h1>
                    </div>
                    <div className="constant_box_404" style={{marginTop:"-50px"}}>
                        <h3 className="h2" style={{fontSize:"80px"}}>Look like you're lost</h3>
                        <p>the page you are looking for is not available</p>
                        <Link to={"/"}><span style={{color:"white", padding:"10px 20px", backgroundColor:"black", display:"inline-block", textDecoration:"none"}}>Home</span></Link>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </body>
        </>
    )
}
export default NotFound;