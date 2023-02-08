import Link from 'next/link'
import { TfiArrowTopRight } from 'react-icons/tfi'

const GeneralLink = ({ href, 
                      body, 
                      ext }: { href: string,
                               body: string,
                               ext: boolean }) => {

  const LinkBody = <div className="flex
                                   text-3xl
                                   border-b
                                   border-black
                                   dark:border-off-white
                                   dark:hover:cursor-dark
                                   group
                                   ease-out
                                   duration-300
                                   cursor-link
                                   hover:dark:cursor-link
                                   w-fit">
                     <div>{body}</div>
                     <span className="mt-2
                                      group-hover:-rotate-45
                                      ease-out
                                      ml-2
                                      duration-300">
                       <TfiArrowTopRight />
                     </span>
                   </div>

  return (
    <div className="w-fit">
    {
      (ext)
        ? <a href={href} target="_blank" rel="noreferrer">{LinkBody}</a>
        : <Link href={href}>
            <a>
              {LinkBody}
            </a>
          </Link>
    }
    </div>
  )
}

export default GeneralLink
