export const SummaryStatCard = ({
  title,
  value,
  percentage,
  label,
  direction,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow py-4 px-8 flex flex-col gap-1 w-[260px] h-fit">
    <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      {value}
    </h2>
    <p
      className={`text-sm flex items-center gap-1 bg-[#86B40A] dark:bg-[#0F4337] w-fit px-2 py-1 rounded-full ${
        percentage > 0 ? "text-green-500" : "text-red-500"
      }`}
    >
      {percentage > 0 ? "▲" : "▼"} {percentage}%{" "}
      <span className="text-gray-400">{label}</span>
    </p>
  </div>
);
