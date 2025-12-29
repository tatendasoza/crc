import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="gc_top_header_wrapper hidden-xs">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="gc_left_side_warpper">
                <div className="gc_top_contect">
                  <p><i className="fa fa-phone"></i> &nbsp;+263 77 359 1237/+263 77 767 6200</p>
                  <p className=""><i className="fa fa-envelope"></i> &nbsp;<a href="mailto:info@cityrestorationcenter.org">info@cityrestorationcenter.org</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <div className="et_right_side_main_warpper">
                <div className="gc_right_side_warpper">
                  <ul>
                    <li>
                      <div className="gc_top_socialicon">
                        <ul>
                          <li>Connect with Faith Ministries :</li>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="gc_top_donet_btn">
                        <ul>
                          <li><a href="#">GIVE</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gc_main_menu_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-xs hidden-sm">
              <div className="gc_header_wrapper">
                <div className="gc_logo">
                  <Link to="/"><img src="/site/images/header/logo.jpg" alt="Logo" title="Grace Church" className="img-responsive" /></Link>
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
                    <li className="has-mega gc_main_navigation"><Link to="/event" className="gc_main_navigation">Event</Link></li>
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
    </>
  )
}
