import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-10 mx-auto max-w-[200px] flex flex-col items-center justify-center">
      <p className="text-sm font-medium">AI Jobs Hub</p>
      <p className="text-xs text-muted-foreground">Space for best AI Jobs</p>
      <p className="text-xs text-muted-foreground">&copy; 2024</p>
      <div className="social flex items-center gap-2 pt-2">
        <div className="size-5 bg-gray-200 rounded-full"></div>
        <div className="size-5 bg-gray-200 rounded-full"></div>
        <div className="size-5 bg-gray-200 rounded-full"></div>
      </div>
      <div className="internal-links w-full mt-4 pt-2 border-t flex justify-between">
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:underline underline-offset-2 hover:text-black"
        >
          Privacy
        </Link>
        <Link
          href="#"
          className="text-sm text-muted-foreground hover:underline underline-offset-2 hover:text-black"
        >
          Terms
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
