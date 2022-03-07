import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">R$12.000</td>
            <td>Development</td>
            <td>06/03/2022</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$1.100</td>
            <td>House</td>
            <td>01/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
