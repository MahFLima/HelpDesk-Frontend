export interface solicitacaoProps {
  id: number;
  numero_patrimonio: string;
  descricao_problema: string;
  status: string;
  created_at: Date;
  adm_id: number;
  user_id: number;
}

interface CardProps {
  title: string;
  collection: solicitacaoProps[]; // Array de objetos do tipo solicitacaoProps
}

const CardTicket: React.FC<CardProps> = ({ title, collection }) => {
  return (
    <section className=" bg-gray-100 p-4 rounded-lg shadow-md min-w-[400px]">
      <strong className="text-xl inline-block text-purple-900 mb-4">
        {title}
      </strong>
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-sm text-purple-900 uppercase bg-gray-200">
          <tr>
            <th className="px-6 py-3">Patrimônio</th>
            <th className="px-6 py-3">Descrição</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Ação</th>
          </tr>
        </thead>
        <tbody>
          {collection &&
            collection.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="px-6 py-4">
                    {item.numero_patrimonio}
                  </td>
                  <td className="px-6 py-4">
                    {item.descricao_problema}
                  </td>
                  <td className="px-6 py-4">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 text-blue-700">
                    <a href="#">Acessar</a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default CardTicket;
