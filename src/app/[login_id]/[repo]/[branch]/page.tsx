"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
export default ({
  params,
}: {
  params: { branch: string; repo: string; login_id: string };
}) => {
  const [readMeData, setReadMeData] = useState("");
  const { branch, repo, login_id } = params;

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/${login_id}/${repo}/${branch}/README.md`
    )
      .then((res) => res.text())
      .then(setReadMeData);
  }, [params]);
  return (
    <div>
      <ReactMarkdown>{readMeData}</ReactMarkdown>
    </div>
  );
};
