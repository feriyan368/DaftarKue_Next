import { useRouter } from "next/dist/client/router";
const kode = () => {
  const kue = [
    { kode: "101", nama: "Kue Tart" },
    { kode: "102", nama: "Kue Brownis" },
    { kode: "103", nama: "Kue Pasar" },
  ];

  const router = useRouter();
  const { kode } = router.query;
  const data = kue.find((m) => m.kode == kode);
  return (
    <>
      <p>KODE : {kode}</p>
      <p>Nama:{data.nama}</p>
    </>
  );
};
export default kode;
