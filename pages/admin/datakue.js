import DataKue from "../../components/admin/DataKue";
import DataKue from "../../components/admin/DataKue";
import LayoutKue from "../../components/admin/LayoutKue";
import KueByKode from "../../components/admin/KueByKode";

const datakue = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutKue>
      <KueByKode />
      <DataKue data={data} />
    </LayoutKue>
  );
};
export async function getServerSideProps({ query }) {
  const kode = query.kode;
  let url = `http://localhost:5000/kue`;
  if (typeof kode === "string") {
    url = `http://localhost:5000/kue/${kode}`;
  }
  //fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default datakue;
