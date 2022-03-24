import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Kajol</b>
          </span>
          <span className="singlePostDate">1 Hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, maiores
          optio cupiditate et laboriosam reiciendis deserunt, consequatur qui
          accusantium eligendi tenetur eaque! Voluptatem molestias dignissimos
          ratione placeat, mollitia voluptatum corporis? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nobis fuga libero delectus aut.
          Sunt quas, officiis fugiat rerum voluptates assumenda tenetur sequi
          saepe repellat tempore ab ratione illum eveniet laudantium. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          inventore necessitatibus voluptatem nisi incidunt reiciendis, natus,
          architecto esse, molestiae provident adipisci facilis aspernatur est
          quos ut explicabo iste a labore? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Necessitatibus ex eos labore
          reprehenderit porro libero aspernatur? Porro natus, labore provident
          voluptas consectetur eveniet minus aspernatur. Vero corrupti magni
          sequi eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minus ullam itaque doloremque tenetur. Perferendis minus asperiores
          ducimus fugit aspernatur quidem commodi temporibus voluptatem fugiat
          exercitationem, velit sapiente laboriosam maxime vero.Porro natus,
          labore provident voluptas consectetur eveniet minus aspernatur. Vero
          corrupti magni sequi eum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minus ullam itaque doloremque tenetur. Perferendis
          minus asperiores ducimus fugit aspernatur quidem commodi temporibus
          voluptatem fugiat exercitationem, velit sapiente laboriosam maxime
          vero.Porro natus, labore provident voluptas consectetur eveniet minus
          aspernatur. Vero corrupti magni sequi eum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minus ullam itaque doloremque tenetur.
          Perferendis minus asperiores ducimus fugit aspernatur quidem commodi
          temporibus voluptatem fugiat exercitationem, velit sapiente laboriosam
          maxime vero.
        </p>
      </div>
    </div>
  );
}
