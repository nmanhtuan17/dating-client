import {
  CommentGroup
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {CommentItem} from "@/views/Main-Screen/Newsfeeds/components/CommentItem.tsx";
import {useAppSelector} from "@/store";

interface Props {


}
export const CommentContainer = ({}: Props) => {
  const {comments} = useAppSelector(state => state.post);

  return (
    <CommentGroup>
      {comments && comments.map((comment, index) => {
        return <CommentItem key={index.toString()} comment={comment} />
      })}
    </CommentGroup>
  )
}
