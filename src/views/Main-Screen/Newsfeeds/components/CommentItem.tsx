import {
  Comment,
  CommentAction,
  CommentActions,
  CommentAuthor,
  CommentAvatar,
  CommentContent, CommentGroup,
  CommentMetadata,
  CommentText
} from "semantic-ui-react";


interface Props {
  comment?: IComment;
}
export const CommentItem = ({comment}: Props) => {
  return (
    <Comment>
      <CommentAvatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <CommentContent>
        <CommentAuthor as='a'>Elliot Fu</CommentAuthor>
        <CommentMetadata>
          <div>Yesterday at 12:30AM</div>
        </CommentMetadata>
        <CommentText>
          <p>This has been very useful for my research. Thanks as well!</p>
        </CommentText>
        <CommentActions>
          <CommentAction>Reply</CommentAction>
        </CommentActions>
      </CommentContent>
      <CommentGroup>
        {/*{comment.replies.map((item, index) => (<Comment>*/}
        {/*  <CommentAvatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />*/}
        {/*  <CommentContent>*/}
        {/*    <CommentAuthor as='a'>Jenny Hess</CommentAuthor>*/}
        {/*    <CommentMetadata>*/}
        {/*      <div>Just now</div>*/}
        {/*    </CommentMetadata>*/}
        {/*    <CommentText>Elliot you are always so right :)</CommentText>*/}
        {/*    <CommentActions>*/}
        {/*      <CommentAction>Reply</CommentAction>*/}
        {/*    </CommentActions>*/}
        {/*  </CommentContent>*/}
        {/*</Comment>))*/}
        {/*}*/}
      </CommentGroup>
    </Comment>
  )
}
