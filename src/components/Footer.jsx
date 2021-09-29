import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




export default function Footer(){
    
    


    
    return(
     <section id="footer">
        <div className="bg-gray-800 md-container mx-autosm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            <h1 className="mt-20 pt-20 text-center text-5xl">Follow me on social media</h1>
            <div className="m-8 mt-10 text-center">
                <a
                  className="mr-2 text-2xl" 
                  href="https://github.com/SilverDaml" 
                  target="_blank"
                  rel="noopener noreferrer">GitHub <span className="ml-0 mr-2">
                  <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                  </span>
                  <span classname="ml-2">
                  <FontAwesomeIcon icon={faGithub} size="sm" classname="ml-2"/>
                  </span></a>
                  
                <a
                  className="mr-2 ml-4 text-2xl" 
                  href="https://www.linkedin.com/in/francisco-arellano-57703a17b/" 
                  target="_blank"
                  rel="noopener noreferrer">LinkedIn <span className="ml-0 mr-2">
                  <FontAwesomeIcon icon={faArrowRight} size="xs"/>
                  </span>
                  <span classname="ml-2">
                  <FontAwesomeIcon icon={faLinkedin} size="sm"/>
                  </span></a>
                  
            </div>
            <div className="sticky text-center text-sm">
                <p>Copyright © Francisco Arellano 2021</p>
            </div>
             
        
            
            
            
        </div>
        </section>
    );
    
}



