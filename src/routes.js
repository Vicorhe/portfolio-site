import Projects from "./pages/Projects.svelte";
import About from "./pages/About.svelte";
import Blog from "./pages/Blog.svelte";
import Post from "./pages/Post.svelte";

let routes = {
  "/": Projects,
  "/about": About,
  "/blog": Blog,
  "/post/:post_title": Post,
};

export default routes;
