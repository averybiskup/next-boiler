const PageSection = ({ children, title }: { children: any, title: string }) => {
  return (
    <section className="mt-5">
      <h1 className="font-black mb-5">{title}</h1>
      {children}
    </section>
  )
}

export default PageSection
