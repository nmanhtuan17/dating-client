import { Link } from "react-router-dom";


export const useMenu = () => {
  return [
    {
      key: 'dashboard',
      label: (<Link to='/'>
        <div>
          <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Bảng tin</h4>
        </div>
      </Link>),
    },
    {
      key: 'dating',
    label: (<Link to='/home'>
      <div>
        <h4 style={{display: 'inline', fontSize: 14, margin: '1px 8px'}}>Hẹn hò</h4>
      </div>
    </Link>),
  },
  {
    key: 'favorite',
    label: (<Link to='/favourite'>
      <div>
        <h4 style={{ display: 'inline', fontSize: 14, margin: '1px 8px' }}>Yêu thích</h4>
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
