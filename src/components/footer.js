import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
    <p>&copy;&nbsp; new Date().toISOString().substr(0,4);&nbsp;David Seacombe <span> <script type="text/javascript">document.write(new Date().getFullYear())</script> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:ds@2ir.io">ds@2ir.io</a></p>
    
    </div>
  </footer>
)

export default Footer