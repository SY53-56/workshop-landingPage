type CardProps = {
  title?: string;
  data?: string;
  className?: string;
};

export default function Card({
  title,
  data,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white bg-slate-900 p-6 text-center shadow-lg shadow-slate-950/10 transition-all duration-300 ${className}`}
    >
      <h3 className="text-lg font-semibold text-slate-300 mb-2">
        {title}
      </h3>

      <p className="text-3xl font-bold tracking-tight text-white">
        {data}
      </p>
    </div>
  );
}