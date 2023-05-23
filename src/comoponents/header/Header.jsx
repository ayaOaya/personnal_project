import { useEffect } from "react"
import "./style.scss"
import { gsap } from "gsap"

const Header = () => {
    useEffect(() => {
        gsap.to(".title", {opacity:1, duration:1, delay:1.2 })
    }, [])
  return (
    <>
        <div className="header">
            <h1 className="title">aya agnau</h1>
        </div>
    </>
  )
}

export default Header