import {logo} from "../assets/logo.png"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    </nav>
  )
}
