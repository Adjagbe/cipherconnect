import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["N° ordre", "N° du ticket",];
 
const TABLE_ROWS = [
  {
    NumeroOrdre: "1",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "2",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "3",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "4",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "5",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "6",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "7",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "8",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "9",
    NumeroTicket: "OP09864DFV56",
  },
  {
    NumeroOrdre: "10",
    NumeroTicket: "OP09864DFV56",
  },
];
 
export function OrdreNumero() {
  return (
    <Card className=" w-full overflow-y-scroll h-[590px] rounded-none">
      <table className="w-full min-w-max   table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" bg-[#30266D] text-white p-4 ">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal text-white leading-none text-lg "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {TABLE_ROWS.map(({ NumeroOrdre, NumeroTicket }, index) => (
            <tr key={NumeroOrdre} className="even:bg-blue-gray-50/50 ">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal text-lg">
                  {NumeroOrdre}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal text-lg">
                  {NumeroTicket}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}