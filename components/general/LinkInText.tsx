import Link from 'next/link'

const LinkInText = ({ href, 
                      body, 
                      ext }: { href: string,
                               body: string,
                               ext: boolean }) => {


  const LinkBody = <span className="border-b
                     hover:bg-black
                     hover:text-white
                     dark:hover:bg-off-white
                     dark:hover:text-dark
                     dark:border-off-white
                     hover:cursor-link
                     hover:dark:cursor-link
                     cursor-link
                     dark:cursor-link
                     ease-out
                     group
                     duration-300
                     border-black">
                    {body}
                   </span>

  return (
    <span>
    {
      (ext)
        ? <a href={href}
             target="_blank"
             className="cursor-dark
                       "
             rel="noreferrer">{LinkBody}</a>
        : <Link href={href}

          ><a>{LinkBody}</a></Link>
    }
    </span>
  )
}

export default LinkInText
