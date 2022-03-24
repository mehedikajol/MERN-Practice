import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="Post"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sapiente
        nihil laudantium corrupti, minima maiores tempore praesentium suscipit
        unde nemo quisquam libero. Vero recusandae, et velit eius delectus
        dolore voluptatum! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quae sapiente nihil laudantium corrupti, minima maiores tempore
        praesentium suscipit unde nemo quisquam libero. Vero recusandae, et
        velit eius delectus dolore voluptatum! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Quae sapiente nihil laudantium corrupti,
        minima maiores tempore praesentium suscipit unde nemo quisquam libero.
        Vero recusandae, et velit eius delectus dolore voluptatum! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Quae sapiente nihil
        laudantium corrupti, minima maiores tempore praesentium suscipit unde
        nemo quisquam libero. Vero recusandae, et velit eius delectus dolore
        voluptatum!
      </p>
    </div>
  );
}
