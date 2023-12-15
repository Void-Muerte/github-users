"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type RepoType = {
  name: string;
  description: string;
  html_url: string;
  default_branch: string;
};

export default function ({ params }: { params: { login_id: string } }) {
  const [repos, setRepos] = useState<RepoType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${params.login_id}/repos`
        );
        const data = await response.json();
        setRepos(
          data.map(
            ({ name, description, html_url, default_branch }: RepoType) => ({
              name,
              description,
              html_url,
              default_branch,
            })
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.login_id]);
  return repos?.length ? (
    <ul>
      {repos?.map(({ name, description, html_url, default_branch }) => (
        <li key={name}>
          <Link href={`${params.login_id}/${name}/${default_branch}`}>
            <div>
              <h3>{name}</h3>
              {description}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <div className="container">Did not find repo here</div>
  );
}
