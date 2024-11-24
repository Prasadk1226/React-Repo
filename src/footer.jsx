import React from "react";

function footer(){
    return(<>
    <div>
      <div className="inner-container5" id="contact">
        <p className="h3 foot">Let's connect if you wish to work together.</p>
        <a
          href="https://www.linkedin.com/in/prasad-kancheti-776b54241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bvma7O0w%2BTjqYwpgiovkylA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="whatsapp:7660940155" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-whatsapp"></i>
        </a>
        <a href="mailto:pprasad.1226@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-square-envelope"></i>
        </a>
        <a href="https://github.com/Prasadk1226" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>
      <div className="footer h5" style={{ textAlign: 'center', color: 'antiquewhite' }}>
        &copy; 2024 K. Prasad. All Rights Reserved. | Designed and developed with passion.
      </div>
    </div></>)
}
export default footer;