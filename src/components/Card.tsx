import { profileType } from "@/utils/types";
import React from "react";
import styles from "./card.module.scss";
import Link from "next/link";

interface cardProp {
  profile: profileType;
}
function Card({ profile }: cardProp) {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href={profile.login} className={styles.profs}>
          <img src={profile.avatar_url} alt="Avatar" />
        </Link>
      </div>
      <div className={styles.info}>
        <h2>
          {profile.name}({profile.login})
        </h2>
        <p>{profile.bio}</p>
        <p>
          {profile.blog && (
            <a href={profile.blog} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          <code> Public repositories: {profile.public_repos} </code>
          <code>Public Gist: {profile.public_gists}</code>
        </p>
      </div>
    </div>
  );
}

export default Card;
