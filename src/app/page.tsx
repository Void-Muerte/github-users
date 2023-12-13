"use client";
import { useState, useEffect, createContext, useContext } from "react";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import CardList from "@/components/CardList";
import UserInput from "@/components/UserInput";
import { defaultProfile, profileType } from "@/utils/types";

type GlobalProfileContextTypes = [profileType[], (p: profileType[]) => void];
const ProfilesContext = createContext<GlobalProfileContextTypes>([
  defaultProfile,
  (p: profileType[]) => {},
]);
export const useProfileContext = () => useContext(ProfilesContext);
export default function Home() {
  const [profiles, setProfiles] = useState(defaultProfile);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setProfiles([...profiles, defaultProfile[0]])
  //   },500);
  // },[])

  return (
    <ProfilesContext.Provider value={[profiles, setProfiles]}>
      <main>
        <Header />
        <UserInput />
        <CardList />
      </main>
    </ProfilesContext.Provider>
  );
}
