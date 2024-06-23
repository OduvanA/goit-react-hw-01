import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.container}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(
        isOnline ? css.isOnline : css.isOffline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  )
}