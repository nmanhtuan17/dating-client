import {
  CommentGroup
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useState} from "react";
import {CommentItem} from "@/views/Main-Screen/Newsfeeds/components/CommentItem.tsx";
export const CommentContainer = () => {
  const [replyTo, setReplyTo] = useState();

  return (
    <CommentGroup>
      <CommentItem />
    </CommentGroup>
  )
}
