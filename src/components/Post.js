export default function Post(props) {
  console.log(props);

  return (
    <div className="card">
      <h2>{props.post.title}</h2>
      <p>{props.post.text}</p>
    </div>
  );
}
