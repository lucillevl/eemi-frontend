import {getContentData} from '../lib/content'

export async function getStaticProps() {
  const contentMentions = await getContentData('mentions-legales')
  return {
    props: {
      contentMentions
    }
  }
}
export default function Contact({contentMentions}) {
  return(
    <div>
    <main>
        <h1 className="title">
          {contentMentions.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: contentMentions.contentHtml }} />
    </main>
    </div>
  )
}