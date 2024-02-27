import {useState} from "react";

const useLoading = () => {
  const [isLoading, setLoading] = useState(false);
  const show = () => {
    setLoading(true);
  }

  const hide = () => {
    setLoading(false);
  }
  return {
    isLoading, show, hide
  }
}

export default useLoading
