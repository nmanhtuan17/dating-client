import {useEffect, useState} from "react";


class PostClient extends EventTarget{
  post: IPost;
  comments: IComment[];

  setPost(post) {
    this.post = post;
    this.dispatchEvent(new Event('onPostChange'));
  }

  setComments(comments) {
    this.comments = comments;
    this.dispatchEvent(new Event('onCommentsChange'));
  }

  usePost () {
    const [post, setPost] = useState(this.post);
    const [comments, setComments] = useState(this.comments);

    useEffect(() => {
      const postListener = (event) => {
        setPost(this.post)
      }

      const commentListener = (event) => {
        setComments(this.comments)
      }

      this.addEventListener('onPostChange', postListener);
      this.addEventListener('onCommentsChange', commentListener);

      return () => {
        this.removeEventListener('onPostChange', postListener);
        this.removeEventListener('onCommentsChange', commentListener);
      }
    }, []);
    return {
      post, comments
    }
  }
}
