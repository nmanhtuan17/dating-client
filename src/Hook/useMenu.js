import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faStar} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../Store/store";


const useMenu = () => {
  const {account} = useAppSelector(state => state.auth)
  return [{
    key: 'home',
    label: (<Link to='/home'>
      <div>
        <FontAwesomeIcon icon={faHouse}/>
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Môn học</h4>
      </div>
    </Link>),
  },
    !account?.isAdmin && {
      key: 'scores',
      label: (<Link to='/scores'>
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Bảng điểm</h4>
        </div>
      </Link>),
    },
    !account?.isAdmin && {
      key: 'tuition',
      label: (<Link to='/tuition'>
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Học phí</h4>
        </div>
      </Link>),
    },
    account?.isAdmin && {
      key: 'studentList',
      label: (<Link to='/studentList'>
        <div>
          <FontAwesomeIcon icon={faStar}/>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Quản lí sinh viên</h4>
        </div>
      </Link>),
    }
  ]
}

export default useMenu;
