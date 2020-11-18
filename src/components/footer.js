import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
    <p>&copy;&nbsp; The Association for Process Improvement <script>document.write(new Date().getFullYear())</script>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:ds@2ir.io">ds@2ir.io</a></p>
      <p>A GatsbyJS Starter for Netlify CMS, Made with <span className="icon -love"><RiHeart2Line/></span> by <Link to="/">Stackrole.com</Link></p>
    </div>
  </footer>
)

export default Footer