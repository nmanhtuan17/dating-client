import {
  CommentGroup
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {useState} from "react";
import {CommentItem} from "@/views/Main-Screen/Newsfeeds/components/CommentItem.tsx";

interface Props {
  comments: IComment[],

}
export const CommentContainer = ({comments}: Props) => {
  const [replyTo, setReplyTo] = useState();

  return (
    <CommentGroup>
      <CommentItem />
    </CommentGroup>
  )
}
