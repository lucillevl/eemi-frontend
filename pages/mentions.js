import { getContentData } from "../lib/content";

export async function getStaticProps() {
  const contentMentions = await getContentData("mentions-legales");
  return {
    props: {
      contentMentions,
    },
  };
}
export default function Contact({ contentMentions }) {
  return (
    <main className="pt-2">
      <h1 className="title pb-3">{contentMentions.title}</h1>
      <div
        className="mt-2"
        dangerouslySetInnerHTML={{ __html: contentMentions.contentHtml }}
      />
    </main>
  );
}
