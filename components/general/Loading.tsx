import { useState, useEffect } from 'react'

import { MdAccessibility,
         MdAccessibilityNew,
         MdDirectionsWalk,
         MdDirectionsRun,
         MdDirectionsBike,
         MdElectricBike,
         MdDirectionsCar,
         MdDirectionsCarFilled,
         MdHail,
         MdFlight,
         MdAirlineSeatReclineNormal,
         MdAirlineSeatReclineExtra,
         MdTransferWithinAStation,
         MdBabyChangingStation,
         MdSoap,
         MdDownhillSkiing,
         MdElderly,
         MdKitesurfing,
         MdKayaking,
         MdSportsKabaddi,
         MdSurfing,
         MdOutlineAccessible } from 'react-icons/md'

const Loading = () => {

  const [progress, setProgress] = useState(0)

  const phases1 = [
    <MdAccessibility key={0} />,
    <MdAccessibilityNew key={1} />,
    <MdDirectionsWalk key={2} />,
    <MdDirectionsRun key={3} />,
    <MdDirectionsBike key={4} />,
    <MdElectricBike key={5} />,
    <MdHail key={6} />,
    <MdDirectionsCar key={7} />,
    <MdDirectionsCarFilled key={8} />,
    <MdTransferWithinAStation key={9} />,
    <MdHail key={10} />,
    <MdFlight key={11} />,
    <MdAirlineSeatReclineNormal key={12} />,
    <MdAirlineSeatReclineExtra key={13} />,
    <MdTransferWithinAStation key={14} />,
    <MdBabyChangingStation key={15} />,
    <MdSoap key={16} />,
    <MdDownhillSkiing key={17} />,
    <MdElderly key={18} />,
    <MdKitesurfing key={19} />,
    <MdKayaking key={20} />,
    <MdSportsKabaddi key={21} />,
    <MdSurfing key={22} />,
    <MdOutlineAccessible key={23} />,
  ]

  const maxProgress = phases1.length

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((progress + 1) % (maxProgress))
    }, 200)

    return () => {
      clearInterval(t)
    }

  }, [progress])

  return (
    <>
      <div className="text-7xl">{phases1[progress]}</div>
    </>
  )
}

export default Loading
