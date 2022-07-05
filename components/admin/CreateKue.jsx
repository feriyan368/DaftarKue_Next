import { useState } from "react";
import axios from "axios";

const CreateKue = () => {
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [expired, setExpired] = useState("");

  async function submitHandler(e) {
    try {
      axios
        .post("http://localhost:5000/kue", {
          kode,
          nama,
          harga,
          expired,
        })
        .then((response) => {
          console.log(response);
        });
      alert("penambahan data sukses");
      //clearInput()
    } catch (e) {
      throw Error(e.message);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Kue</h1>
          <div className="w-75">
            <div className="form-floating">
              <input className="form-control mb-2" id="kode" type="text" placeholder="Kode" value={kode} onChange={(e) => setKode(e.target.value)}></input>
              <label htmlFor="kode">KODE</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="nama" type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}></input>
              <label htmlFor="nama">NAMA</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="harga" type="text" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)}></input>
              <label htmlFor="harga">HARGA</label>
            </div>
            <div className="form-floating">
              <input className="form-control mb-2" id="expired" type="text" placeholder="expired" value={expired} onChange={(e) => setExpired(e.target.value)}></input>
              <label htmlFor="expired">EXPIRED</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-reverse">
            <button className="btn btn-primary" type="submit">
              SIMPAN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateKue;
