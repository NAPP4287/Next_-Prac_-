"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const Buttons = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  const handleDelete = () => {
    const option = { method: "DELETE" };
    fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id, option)
      .then((res) => res.json())
      .then(() => {
        router.push("/");
        router.refresh();
      });
  };

  return (
    <>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        {id && (
          <>
            <li>
              <Link href={`/update/${id}`}>Update</Link>
            </li>
            <li>
              <input type="button" value="delete" onClick={handleDelete} />
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Buttons;
