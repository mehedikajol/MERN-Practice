import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt="Sidebar"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ea
          doloribus quo exercitationem repellendus distinctio rerum ipsam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://www.facebook.com"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          </a>
          <a
            href="https://www.facebook.com"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          </a>
          <a
            href="https://www.facebook.com"
            title="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
