export async function getAllPosts() {
  const res = await fetch("http://localhost:3000/posts");
  const data = await res.json();
  // console.log(data)
  return data;
}

export async function getOnePost(id) {
  const res = await fetch("http://localhost:3000/posts/list/" + id);
  const data = await res.json();
  return data;
}
