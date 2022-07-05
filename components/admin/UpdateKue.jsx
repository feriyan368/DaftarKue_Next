import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UpdateKue = () => {
  const [_kode, setKode] = useState("");
  const [_nama, setNama] = useState("");
  const [_harga, setHarga] = useState("");
  const [_expired, setExpired] = useState("");

  const router = useRouter();
  const { kode, nama, harga, expired } = router.query;

  useEffect(() => {
    if (typeof kode == "string") {
      setKode(kode);
    }
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof harga == "string") {
      setHarga(harga);
    }
    if (typeof expired == "string") {
      setExpired(expired);
    }
  }, [kode, nama, harga, expired]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios
        .put(`http://localhost:5000/kue/${_kode}`, {
          kode: _kode,
          nama: _nama,
          harga: _harga,
          expired: _expired,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push(`/admin/datakue`);
    } catch (e) {
      console.log({ message: e.message });
    }
  };
  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-bold text-center mb-3">Edit data Kue</h1>
          <div className="w-75">
            <div className="form-floating">
              <input className="form-control mb-2" id="kode" type="text" placeholder="KODE" value={_kode} onChange={(e) => setKode(e.target.value)} />
              <label htmlFor="nim">KODE</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="nama" type="text" placeholder="nama" value={_nama} onChange={(e) => setNama(e.target.value)} />
              <label htmlFor="nama">Nama</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="harga" type="text" placeholder="HARGA" value={_harga} onChange={(e) => setHarga(e.target.value)} />
              <label htmlFor="harga">Harga</label>
            </div>

            <div className="form-floating">
              <input className="form-control mb-2" id="expired" type="text" placeholder="expired" value={_prodi} onChange={(e) => setExpired(e.target.value)} />
              <label htmlFor="expired">Expired</label>
            </div>
            <div className="d-flex flex-row-reverse">
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateKue;
