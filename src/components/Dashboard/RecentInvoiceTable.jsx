import { motion } from "framer-motion";

const statuses = {
  Cancelled: "bg-red-100 text-red-600",
  Paid: "bg-green-100 text-green-700",
  Overdue: "bg-yellow-100 text-yellow-800",
  Unpaid: "bg-purple-100 text-purple-700",
};

const invoices = [
  {
    id: "#BCS101",
    date: "Mar 30, 2022",
    recipient: "John Doe",
    amount: 123890.54,
    status: "Cancelled",
  },
  {
    id: "#ABC112",
    date: "Mar 28, 2022",
    recipient: "Thomas White",
    amount: 89560.04,
    status: "Paid",
  },
  {
    id: "#BER301",
    date: "Mar 25, 2022",
    recipient: "Clinton Vincent",
    amount: 87890.64,
    status: "Overdue",
  },
  {
    id: "#BCS101",
    date: "Mar 21, 2022",
    recipient: "Grace James",
    amount: 13860.5,
    status: "Unpaid",
  },
];

const RecentInvoiceTable = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow border border-green-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Invoice
        </h2>
      </div>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-green-50 dark:bg-green-900">
          <tr className="text-gray-600 dark:text-gray-300">
            <th className="px-4 py-3">No</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Recipient</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <motion.tr
              key={index}
              className="border-t border-gray-100 dark:border-gray-700 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <td className="px-4 py-3">{invoice.id}</td>
              <td className="px-4 py-3">{invoice.date}</td>
              <td className="px-4 py-3">{invoice.recipient}</td>
              <td className="px-4 py-3">₦{invoice.amount.toLocaleString()}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-[5px] text-center w-[89px] h-[28px] ${
                    statuses[invoice.status]
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentInvoiceTable;
