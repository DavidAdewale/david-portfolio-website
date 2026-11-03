import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#18271e] px-5 py-10 text-bone md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-bone/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold">
            David Adewale
          </Link>
          <p className="mt-2 text-sm text-bone/54">Web Design, Development & Website Management</p>
        </div>
        <a
          href="mailto:adewaledavidola@gmail.com"
          className="text-sm text-bone/66 transition hover:text-gold"
        >
          adewaledavidola@gmail.com
        </a>
      </div>
    </footer>
  );
}
