import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 10
async function getData(slug){
    const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug": slug.current,
          title,
          content,
          titleImage
          
      }[0]
    `;
    const data = await client.fetch(query)
    return data;
}

export default async function BlogArticle({params}){
    const data = await getData(params.slug)
    console.log(data)
    return (
        <div className="mt-3">
        <h1>
            <span className="block text-center text-base text-primary font-semibold tracking-wide uppercase ">Ishin Daily - Blogs</span>
            <span className="mt-2 block text-3xl text-center leading-8  font-bold tracking-tight sm:text-4xl">{data.title}</span>
        </h1>
        <Image src={urlFor(data.titleImage).url()} width={800} height={800} priority alt='Title Image' className=" dark:border-none rounded-lg mt-8 border"/>
        <div className="mt-16 prose-blue prose-lg prose-headings:font-bold prose-headings:text-2xl prose-li:marker:text-primary prose-a:text-primary">
            <PortableText value={data.content}></PortableText>
        </div>
        </div>
        
    )

}