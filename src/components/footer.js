
import { Typography } from "@material-tailwind/react";
import { Logo } from './icons'

const LINKS = [
  {
    title: "Quick Access",
    items: ["Hotels", "Tours", "Attractions"],
  },
  {
    title: "Tranquil Retreat",
    items: ["About us", "FAQ", "Legal", "Support"],
  },
];

function Footer() {
  return (
    <footer className="w-full p-8 bg-primary-blue font-display text-white">
      <div className="mx-auto w-full max-w-7xl px-[100px]">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 items-center">
          <Logo className="w-10" />
          <div className="grid grid-cols-2 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  className="mb-3 font-medium"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <hr className="my-8 border-blue-gray-50" />
          <Typography color="blue-gray" className="text-center font-normal">
            &copy; 2024 Tranquil Retreat
          </Typography>
      </div>
    </footer>
  );
}

export default Footer;

 

 
export function FooterWithSocialLinks() {

}