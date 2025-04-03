export const BalanceCard = ({ balance, last4digits }) => (
  <div className="rounded-xl py-6 px-12 bg-gradient-to-r from-green-400 to-lime-400 text-white shadow flex flex-col gap-2 relative w-[440px] h-[196px]">
    <svg
      width="43"
      height="30"
      viewBox="0 0 43 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="15" r="15" fill="white" />
      <circle cx="15" cy="15" r="15" fill="#F8F7F7" fill-opacity="0.56" />
    </svg>

    <p className="text-xl font-semibold">₦{balance.toLocaleString()}</p>
    <p className="text-sm">Balance</p>
    <div className="flex justify-between text-sm">
      <span>**** ****</span>
      <span>{last4digits}</span>
    </div>
    <div className="absolute top-4 right-4 text-white">⋮</div>
  </div>
);
