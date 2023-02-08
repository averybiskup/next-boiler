const Toggle = ({ value,
                  onLabel,
                  offLabel,
                  onClick }: { value: boolean,
                               onLabel: string,
                               offLabel: string,
                               onClick: any }) => {
  return (
    <label className="relative z-0 inline-flex items-center cursor-dark">
      <input type="checkbox" className="sr-only peer" onClick={onClick} />
      <div className="w-14
                  h-[25px]
                  bg-dark
                  dark:bg-off-white
                  rounded-full
                  peer
                  peer-checked:after:translate-x-full
                  peer-checked:after:border-white
                  after:content-['']
                  after:absolute
                  after:left-[4px]
                  after:top-[3px]
                  after:bg-white
                  dark:after:bg-dark
                  after:rounded-full
                  after:h-6
                  after:w-6
                  after:transition-all
                  peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-dark">
        { (value) ? onLabel : offLabel }
      </span>
    </label>
  )
}

export default Toggle
