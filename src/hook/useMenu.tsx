import { Link } from "react-router-dom";


export const useMenu = () => {
  return [{
    key: 'home',
    label: (<Link to='/home'>
      <div>
        <h4 style={{ display: 'inline', fontSize: 14, margin: '1px 8px' }}>Bảng tin</h4>
      </div>
    </Link>),
  },
  {
    key: 'search',
    label: (<Link to='/search'>
      <div>
        <h4 style={{ display: 'inline', fontSize: 14, margin: '1px 8px' }}>Tìm kiếm</h4>
      </div>
    </Link>),
  }, {
    key: 'message',
    label: (<Link to='/message'>
      <div>
        <h4 style={{ display: 'inline', fontSize: 14, margin: '1px 8px' }}>Tin nhắn</h4>
      </div>
    </Link>),
  }
  ]
}

// export default useMenu;
