import React from 'react'
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className="home" id = "home">
      <main>
        <h1>ideainspect</h1>  
        <p>Solution to all your problems</p> 
      </main>
    </div>
    <div className="home2">
       <img src={vg} alt ="Graphics" />
      <div>
        <p>
         we are  your one and only solution to the tech problems you face everyday.
         we are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>  
    </div>
    <div className="home3" id = "about">
      <div>
        <h1>who we are ?</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quos fugit laudantium ipsum! Id unde necessitatibus eos iusto consectetur nobis rerum adipisci sapiente optio facere corrupti natus, quo voluptate reiciendis perferendis esse sint libero rem doloribus, sunt amet est. Omnis a reprehenderit libero dignissimos repellendus explicabo, perspiciatis magnam. Obcaecati, reiciendis.</p>
      </div>
    </div>

    <div className="home4" id ="brands" >
      <div>
        <h1>brands</h1>
        <article>
          <div style = {{
            animationDelay:"0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>
              Google
            </p>
          </div>
            
          <div style = {{
            animationDelay:"0.3s"
            }}>
            <AiFillAmazonCircle/>
            <p>
              Amazon
            </p>
          </div>
            
          <div style = {{
            animationDelay:"0.7s"
            }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style = {{
            animationDelay:"0.7s"
            }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    <div className="home5">

    </div>
    </>
  )
}

export default Home;