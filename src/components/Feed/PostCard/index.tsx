import { StyledPostCard } from "./StyledPostCard";
import PostOptions from "../../../assets/PostOptions.svg";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../providers/PostContext/PostContext";
import { api } from "../../../services/api";

interface iPostCardPros {
  message: string;
  id: number;
  userId: number;
  date: string;
}

export function PostCard({ message, id, userId, date }: iPostCardPros) {
  const { setDeletePost, setDeletePostId } = useContext(PostContext);
  const [username, setUserName] = useState<string | undefined>();
  const [userphoto, setUserPhoto] = useState<string | undefined>();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await api.get(`/users/${userId}`);
      setUserName(response.data.name);
      setUserPhoto(response.data.image);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledPostCard>
      <div className="user__container">
        <div className="user__identity">
          <img src={userphoto} alt="" />
          <div>
            <h3>{username}</h3>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="user__options">
          <button
            onClick={() => {
              setDeletePost(true);
              setDeletePostId(id);
            }}
          >
            <img src={PostOptions} />
          </button>
        </div>
      </div>
      <h2>{message}</h2>
    </StyledPostCard>
  );
}
