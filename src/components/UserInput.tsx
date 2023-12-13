import React, { useState, useRef } from "react";
import styles from "./userInput.module.scss";
import { profileType } from "@/utils/types";
import { useProfileContext } from "@/app/page";

type formEvent = React.FormEvent<HTMLFormElement>;
// interface UserInputProps {
//   addUser: (newProfile: profileType) => void;
// }
function UserInput() {
  const [user, setUser] = useState("");
  const [err, setErr] = useState("");
  const [profiles, setProfiles] = useProfileContext();
  const myRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: formEvent) => {
    e.preventDefault();
    const el = myRef.current as HTMLInputElement;
    const val = el.value;

    if (profiles.map((p) => p.login).includes(val)) {
      setErr("The profile already exist!");
      return;
    }

    fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const {
          name,
          login,
          avatar_url,
          blog,
          bio,
          public_gists,
          public_repos,
        } = data;
        if (login) {
          setProfiles([
            ...profiles,
            { name, login, avatar_url, blog, bio, public_gists, public_repos },
          ]);
          setErr("");
          setUser("");
        } else {
          setErr("Profile not found!");
        }
      })
      .catch((err) => setErr(err.message));
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className={styles.input}
          ref={myRef}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      {err && <p className={styles.err}>{err}</p>}
    </div>
  );
}

export default UserInput;
