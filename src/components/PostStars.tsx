import { createResource, Match, Show, Switch } from "solid-js";

interface Props {
  slug: string;
}

const PostStars = ({ slug }: Props) => {
  const [data, { refetch }] = createResource(async () => {
    const response = await fetch(`/blog/${slug}.json`);
    return response.json();
  });

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    await fetch(`/blog/${slug}.json`, {
      method: "POST",
    });
    await refetch();
  };

  return (
    <>
      <Show when={data.loading}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-5 animate-pulse"
          aria-label="Loading"
        >
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
        </svg>
      </Show>
      <Switch>
        <Match when={data.error}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-red-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 0 1-1.06-2.122m-1.061 4.243a6.75 6.75 0 0 1-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12Z"
            />
          </svg>
        </Match>
        <Match when={data()}>
          <form method="post" onSubmit={handleSubmit}>
            <button
              class="font-semibold flex items-center group gap-2"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="size-5 group-hover:animate-pulse"
              >
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
              </svg>
              {data().stars}
            </button>
          </form>
        </Match>
      </Switch>
    </>
  );
};

export default PostStars;
