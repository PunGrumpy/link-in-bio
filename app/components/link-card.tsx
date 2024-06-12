export const LinkCard: React.FC<{ href: string; title: string }> = ({
  href,
  title
}) => (
  <li>
    <a
      className="box block rounded-lg text-white font-mplus font-bold text-center hover:bg-[rgba(255,255,255,0.1)] hover:scale-105 focus:bg-[rgba(255,255,255,0.1)] sm:px-6 sm:py-3 px-4 py-3 transition-all duration-300"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        cursor: ` url('https://tobiasahlin.com/static/cursors/pointer.png'), auto`
      }}
    >
      {title}
    </a>
  </li>
)
