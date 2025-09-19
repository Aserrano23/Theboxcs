import { Link } from "react-router-dom";

interface Props {
  title: string;
  text: string;
  btn1: string;
  linkbtn1: string;
  btn1blank?: boolean;
  btn2?: string;
  linkbtn2?: string;
  btn2blank?: boolean;
}

export const Cta = ({
  title,
  text,
  btn1,
  btn2,
  linkbtn1,
  btn1blank,
  linkbtn2,
  btn2blank,
}: Props) => {
  return (
    <section className="py-12 md:py-16 bg-emerald-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
        <p className="mt-3 text-white/90">{text}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={linkbtn1}
            target={btn1blank ? "_blank" : ""}
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-emerald-800 shadow hover:bg-zinc-100"
          >
            {btn1}
          </Link>
          {btn2 && linkbtn2 && (
            <Link
              to={linkbtn2}
              target={btn2blank ? "_blank" : ""}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white ring-1 ring-white/70 hover:bg-white/10"
            >
              {btn2}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
