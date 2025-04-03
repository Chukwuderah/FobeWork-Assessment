import { SummaryStatCard } from "./SummaryStatCard";
import { BalanceCard } from "./BalanceCard";
import { RevenueChartCard } from "./RevenueChartCard";
import { TransactionStatsCard } from "./TransactionStatsCard";
import RecentInvoiceTable from "./RecentInvoiceTable";

const DashboardOverview = () => {
  const chartData = [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 15000 },
    { month: "Mar", value: 18000 },
    { month: "Apr", value: 30000 },
    { month: "May", value: 22000 },
    { month: "Jun", value: 15000 },
    { month: "Jul", value: 17000 },
    { month: "Aug", value: 19000 },
    { month: "Sep", value: 16000 },
  ];

  return (
    <div className="flex flex-col gap-6 md:flex-row md:flex-wrap w-full mt-8">
      <div className="flex gap-4 w-full">
        <SummaryStatCard
          title="Total Invoice"
          value="16,700"
          percentage={27}
          label="Invoice Last week"
          direction="up"
        />
        <SummaryStatCard
          title="Total Payment Received"
          value="₦2,985.67"
          percentage={40}
          label="Last week payments"
          direction="up"
        />
        <BalanceCard balance={96421.5} last4digits="3667" />
      </div>
      {/* <BalanceCard balance={96421.5} last4digits="3667" /> */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <RevenueChartCard data={chartData} />

        <div className="bg-gray-900 dark:bg-gray-800 rounded-xl shadow divide-y divide-gray-700 h-fit">
          <TransactionStatsCard
            label="Withdrawal"
            amount={650400.42}
            up={true}
          />
          <TransactionStatsCard
            label="Deposits"
            amount={7000000.45}
            up={false}
          />
        </div>
      </div>

      <RecentInvoiceTable />
    </div>
  );
};

export default DashboardOverview;
