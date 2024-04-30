import React, {useState} from 'react';
import {Button, Input, Modal, Space, Table, Tag} from 'antd';
import {width, height} from '../../../Constant/Size'
import {useAppSelector} from "../../../Store/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const {Search} = Input;

const Home = () => {
  const {account} = useAppSelector(state => state.auth)
  const [searchText, setSearchText] = useState('');
  const [open, setOpen] = useState(false);
  const showModel = () => {
    setOpen(true)
  }
  const hideModel = () => {
    setOpen(false)
  }
  const handleSearch = (value) => {
    setSearchText(value);
  };


  return (
    <div className='d-flex flex-column justify-content-between'>
      
    </div>
  );
};

export default Home;
