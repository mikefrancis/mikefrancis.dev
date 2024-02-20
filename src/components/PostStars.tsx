import { createResource } from "solid-js";

const BASE_URL = import.meta.env.DEV ? "http://localhost:4321" : "";
const fetchStars = async (slug: string) =>
  (await fetch(`${BASE_URL}/blog/${slug}.json`)).json();

interface Props {
  slug: string;
}

const PostStars = ({ slug }: Props) => {
  const [data, { refetch }] = createResource(slug, fetchStars);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await fetch(`${BASE_URL}/blog/${slug}.json`, {
      method: "POST",
    });
    refetch();
  };

  return (
    <>
      {data.loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-4 h-4 animate-ping"
          aria-label="Loading"
        >
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
        </svg>
      ) : (
        <form method="post" onSubmit={handleSubmit}>
          <button class="flex items-center" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 mr-2"
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
            </svg>
            {data().stars}
          </button>
        </form>
      )}
    </>
  );
};

export default PostStars;
