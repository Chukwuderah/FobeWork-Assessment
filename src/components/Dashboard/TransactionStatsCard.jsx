const ArrowIcon = ({ up }) => (
  <span className={`text-lg ${up ? "text-red-500" : "text-green-500"}`}>
    {up ? "↑" : "↓"}
  </span>
);

export const TransactionStatsCard = ({ label, amount, up }) => (
  <div className="flex items-center justify-between px-8 py-4 w-[440px] h-[96px]">
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-bold text-white">₦{amount.toLocaleString()}</p>
    </div>
    <ArrowIcon up={up} />
  </div>
);