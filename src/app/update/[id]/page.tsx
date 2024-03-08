"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Update = () => {
  const params = useParams();
  const id = params.id;

  const [contents, setContents] = useState<any>();

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id)
      .then((res) => res.json())
      .then((result) => setContents(result));
  }, []);

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id, options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const lastId = result.id;
        router.push(`/read/${lastId}`);
        router.refresh();
      });
  };

  return (
    <form onSubmit={(e: any) => handleSubmit(e)}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={contents?.title || ""}
          onChange={(e) => setContents({ ...contents, title: e.target.value })}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={contents?.body || ""}
          onChange={(e) => setContents({ ...contents, body: e.target.value })}
        />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
};

export default Update;
