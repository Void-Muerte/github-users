import React from "react";
import { profileType } from "@/utils/types";
import Card from "./Card";
import styles from "./cardlList.module.scss";
import { useProfileContext } from "@/app/page";

function CardList() {
  const [profiles] = useProfileContext();
  return (
    <div className={styles.container}>
      {profiles.map((profile) => (
        <Card key={profile.login} profile={profile} />
      ))}
    </div>
  );
}

export default CardList;
