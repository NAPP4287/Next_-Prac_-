const Read = async (props: any) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const result = await res.json();
  return (
    <>
      <h2>{result.title}</h2>
      {result.body}
    </>
  );
};

export default Read;
