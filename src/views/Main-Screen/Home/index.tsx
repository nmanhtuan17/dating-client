import React, {useLayoutEffect, useMemo, useState} from 'react';
import {HomeHeader} from "@/views/Main-Screen/Home/components/HomeHeader.tsx";
import {useAppDispatch, useAppSelector} from "@/store";
import {setAccount} from "@/store/Slice/auth.slice.ts";
import {UserItem} from "@/views/Main-Screen/Home/components/UserItem.tsx";
import {asyncLikes} from "@/store/Action/app.action.ts";

const Home = () => {
  const {users, appLoading, filter} = useAppSelector(state => state.app);
  const {account} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [likes, setLikes] = useState(new Set());
  useLayoutEffect(() => {
    const listId = account?.likes.map(item => item._id);
    setLikes(new Set(listId))
  }, [account]);

  const usersFiltered = useMemo(() =>
    users.filter(user => (
      (filter.age === undefined || filter.age === null || filter.age === user.age) &&
      (filter.gender === undefined || filter.gender === user.gender)
    )), [filter, users])

  const handleClickLike = ({_id}: IUser) => {
    const newLikedItems = new Set(likes);
    if (newLikedItems.has(_id)) {
      newLikedItems.delete(_id);
    } else {
      newLikedItems.add(_id);
    }
    setLikes(newLikedItems);
    setTimeout(() => {
      dispatch(asyncLikes(Array.from(newLikedItems)))
    }, 500)
  };
  const renderItem = (item: IUser) => {
    return (
      <UserItem handleLike={handleClickLike} user={item} liked={likes.has(item._id)}/>
    )
  }
  return (
    <div className='px-[100px] h-screen flex flex-col flex-1 min-h-0 overflow-y-auto '>
      <HomeHeader/>
      <div className='flex flex-wrap gap-2'>
        {usersFiltered.map(renderItem)}
      </div>
    </div>
  );
}


export default Home;
