const PageContainer = ({ children }: { children: any }) => {
  return (
    <div className="w-full flex justify-center dark:bg-dark min-h-screen">
      <div className="sm:max-w-desktop
                      sm:w-9/12
                      w-11/12
                      min-h-screen
                      max-w-phone
                      mt-24
                      mb-24
                      relative">
        {children}
      </div>
    </div>
  )
}

export default PageContainer
