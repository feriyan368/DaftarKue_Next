import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const KueByKode = () => {
  const [kode, setKode] = useState("");
  const router = useRouter();
  const getKueByKode = (e) => {
    e.preventDefault();
    router.push({
      pathname: "dataKue",
      query: { kode: kode },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getKueByKode}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input type="text" className="form-control" placeholder="Cari By Kode" value={kode} onChange={(e) => setKode(e.target.value)}></input>
            <input type="submit" value="Cari" className="btn btn-success ms-2 fs-6"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KueByKode;
