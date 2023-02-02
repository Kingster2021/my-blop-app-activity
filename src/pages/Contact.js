import Header from "./layout/Header"
import Footer from "./layout/Footer"



function Contact() {
    return(
        <>
        <main>
            <div className="container mt-5">
                <h1>Contact Me!</h1>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="firstName" className="form-label">First Name</label>
                        <input type={"text"} className="form-control" id="firstName" required></input>
                    </div>
                    <div className="col-md-6">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type={"text"} className="form-control" id="lastName" required></input>
                    </div>
                    <div className="col-md-8">
                        <label for="emailInfo" className="form-label">E-mail</label>
                        <input type={"email"} className="form-control" id="emailInfo" required></input>
                    </div>
                    <div className="col-md-4">
                        <label for="phoneNumber" className="form-label">Phone Number</label>
                        <input type={"text"} className="form-control" id="phoneNumber" placeholder="+639991234567"></input>
                    </div>
                    <div className="col-md-12">
                        <label for="comments" className="form-label">Comments, Questions?</label>
                        <textarea className="form-control" id="comments" rows={"4"}></textarea>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </main>
        </>
    )
}
export default Contact