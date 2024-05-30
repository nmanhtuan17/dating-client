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
import {formatTime} from "@/utils/formatTime.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {UserIcon} from "lucide-react";
import React from "react";


interface Props {
  comment: IComment;
}

export const CommentItem = ({comment}: Props) => {
  return (
    <Comment className={'flex flex-grow gap-3'}>
      <Avatar className="items-center">
        <AvatarImage src={comment.owner.avatar} alt="@shadcn"/>
        <AvatarFallback>
          <UserIcon/>
        </AvatarFallback>
      </Avatar>
      <CommentContent>
        <CommentAuthor as='a'>{comment.owner.fullName}</CommentAuthor>
        <CommentMetadata>
          <div>{formatTime(comment.createdAt)}</div>
        </CommentMetadata>
        <CommentText>
          <p>{comment.text}</p>
        </CommentText>
        <CommentActions>
          <CommentAction>{comment.hasReply && 'Reply'}</CommentAction>
        </CommentActions>
      </CommentContent>
      <CommentGroup>
        {comment.replies.map((item, index) => (<Comment className={'flex flex-grow'}>
          <Avatar className="items-center">
            <AvatarImage src={comment.owner.avatar} alt="@shadcn"/>
            <AvatarFallback>
              <UserIcon/>
            </AvatarFallback>
          </Avatar>
          <CommentContent>
            <CommentAuthor as='a'>{item.owner.fullName}</CommentAuthor>
            <CommentMetadata>
              <div>{formatTime(comment.createdAt)}</div>
            </CommentMetadata>
            <CommentText>{item.text}</CommentText>
          </CommentContent>
        </Comment>))
        }
      </CommentGroup>
    </Comment>
  )
}
