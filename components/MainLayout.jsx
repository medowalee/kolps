import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Tooltip, DarkThemeToggle, MegaMenuDropdown,  Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

const nameweb = "minmodes";

export function DefaultHeader() {
  return (
    <>
    <Navbar className="bg-none bg-transparent backdrop-filter backdrop-blur-10">
      <NavbarBrand href="/">
      <img src="https://i.imgur.com/hp3xRDF.png" className="mr-3 h-6 sm:h-12" alt="Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{nameweb}</span>
      </NavbarBrand>
      <div className="flex md:order-2">

      <DarkThemeToggle />
        <Button>Get started</Button>
        <NavbarToggle />

      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <MegaMenuDropdown className="dark:hover:text-primary-500" toggle={<>Browse</>}>
              <ul className="grid grid-cols-">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500 dark:hover:text-white">
                      Modes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500 dark:hover:text-white">
                    Data Packs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500 dark:hover:text-white">
                    Resource Packs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500 dark:hover:text-white">
                    Modpacks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500 hover:text-white">
                    Plugins
                    </a>
                  </li>
                </div>
                {/* <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500 hover:text-white">
                    Plugins
                    </a>
                  </li>
                </div> */}
              </ul>
            </MegaMenuDropdown>
        <NavbarLink href="#">Create</NavbarLink>
        <NavbarLink href="#">Studios</NavbarLink>
        <NavbarLink href="#">Community</NavbarLink>
        <NavbarLink href="#">Support</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </>
  )
}



export function DefaultFooter() {
  return (
    <Footer container className="rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="/"
            src="https://i.imgur.com/hp3xRDF.png"
            alt="Logo"
            name={nameweb}
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="Minmodes™" year={2024} />
      </div>
    </Footer>
  )
}