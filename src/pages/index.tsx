import { UserServices } from "@services/user.services";
import { type } from "os";
import { useState } from "react";

const Startup = () => {
  const [images, setImage] = useState<any>(null);
  
  // console.log(typeof images)

  const logFormData = (formData) => {
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };
  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      for (const file of images) {
        formData.append('photos', file);
      }
      // console.log(formData)
      const data = await UserServices.uploadAvatar(formData);
      // console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  return <div>
    <input
      type="file"
      onChange={(e) => setImage(e.target.files)}
      multiple
    />
    <button onClick={handleFileUpload}>submit</button>
  </div>
}

export default Startup
