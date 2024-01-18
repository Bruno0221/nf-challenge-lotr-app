import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation";

export default function Fellowship() {
  const book = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const coverStyle = {
    display: "block",
    margin: "5rem",
    border: "1px solid #fff",
  };

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((book) => {
          return (
            <li key={book.ordinal}>
              <h3>{book.ordinal}</h3>
              <p>{book.title}</p>
            </li>
          );
        })}
      </ul>
      <Image
        style={coverStyle}
        height={230}
        width={140}
        src={book.cover}
        alt={book.title}
      />

      <Navigation book={book} />
    </>
  );
}
