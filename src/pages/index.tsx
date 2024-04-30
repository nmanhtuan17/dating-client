import {UserServices} from "@services/user.services";
import {useState} from "react";

const Startup = () => {
  const [image, setImage] = useState<any>();
  const handleFileUpload = async () => {
    try {
      console.log('image', image)
      const uploadData = new FormData();
      uploadData.append("file", image, "file");
      const data = await UserServices.uploadAvatar(uploadData);
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  return <div>
    <input
      type="file"
      onChange={(e) => setImage(e.target.files[0])}
    />
    <button onClick={handleFileUpload}>submit</button>
  </div>
}

export default Startup
