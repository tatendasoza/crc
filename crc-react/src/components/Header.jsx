import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="gc_main_menu_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-xs hidden-sm">
            <div className="gc_header_wrapper">
              <div className="gc_logo">
                <Link to="/"><img src="/images/header/logo.jpg" alt="Logo" title="Grace Church" className="img-responsive" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="header-area hidden-menu-bar stick" id="sticker">
              <div className="mainmenu">
                <ul>
                  <li className="gc_main_navigation parent"><Link to="/" className="gc_main_navigation">Home</Link></li>
                  <li className="has-mega gc_main_navigation"><span className="gc_main_navigation">Pages</span>
                    <ul>
                      <li className="parent"><Link to="/about">About</Link></li>
                      <li className="parent"><Link to="/homegroup">Home Group</Link></li>
                      <li className="parent"><Link to="/tithes">Tithes and Offering</Link></li>
                    </ul>
                  </li>
                  <li className="has-mega gc_main_navigation"><Link to="/event" className="gc_main_navigation">event</Link></li>
                  <li className="has-mega gc_main_navigation"><span className="gc_main_navigation">Media</span>
                    <ul>
                      <li className="parent"><Link to="/sermons">Sermons</Link></li>
                      <li className="parent"><Link to="/podcast">Podcast</Link></li>
                    </ul>
                  </li>
                  <li className="has-mega gc_main_navigation"><span className="gc_main_navigation">Gallery</span>
                    <ul>
                      <li className="parent"><Link to="/gallery-ii">Gallery-II</Link></li>
                      <li className="parent"><Link to="/gallery-iii">Gallery-III</Link></li>
                      <li className="parent"><Link to="/gallery-iv">Gallery-IV</Link></li>
                    </ul>
                  </li>
                  <li className="gc_main_navigation parent"><Link to="/contact" className="gc_main_navigation">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
