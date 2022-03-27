import React from 'react'

function Copyrights() {
  return (
    <div>
        <footer className="bg-white text-center text-black" >

            <div className="container p-4 pb-0" >

                <section className="mb-2">
                
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                ></a>

                
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                ></a>

               
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                ></a>

               
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                ></a>

                
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                ></a>

                
                <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                ></a>
                </section>
                
            </div>

            <div className="text-center p-3" style={{ backgroundColor:'rgb(255, 255, 255)',color:'black' }} >
                © 2020 Copyright:
                <a className="text-black" href="#">Terrathon</a>
            </div>

        </footer>
    </div>
  )
}

export default Copyrights