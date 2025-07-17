
import { format, parseISO } from 'date-fns'
import { allProjects } from 'content-collections'
import { notFound } from 'next/navigation'
import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki' 

export const generateStaticParams = async () => {
  return allProjects.map((project) => ({ slug: project._meta.path }))
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allProjects.find((p) => p._meta.path === slug)
  if (!post) return { title: 'Post not found' }
  return { title: post.title }
}

const PostLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allProjects.find((p) => p._meta.path === slug)
  if (!post) notFound()

  // Handle date properly - it's already a string
  const postDate = typeof post.date === 'string' ? parseISO(post.date) : new Date(post.date)

  return (
    <article className="mx-auto max-w-xs md:max-w-2xl 2xl:max-w-6xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(postDate, 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 content-container max-w-none">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          async code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : 'plaintext';
            return !inline && match ? (
              <div dangerouslySetInnerHTML={{
                 __html: await codeToHtml(String(children).replace(/\n$/, ''),
                { lang: language as BundledLanguage, theme: 'github-dark' }) 
              }} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.content}
      </Markdown>
      </div>
    </article>
  )
}

export default PostLayout