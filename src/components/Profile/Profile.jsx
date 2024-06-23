import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.userAvatar}
          src={image}
          alt="User avatar"
          width={250}
         />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsFollowers}>
          <span>Followers</span>
          <span className={css.statsBold}>{stats.followers}</span>
        </li>
        <li className={css.statsViews}>
          <span>Views</span>
          <span className={css.statsBold}>{stats.views}</span>
        </li>
        <li className={css.statsLikes}>
          <span>Likes</span>
          <span className={css.statsBold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}