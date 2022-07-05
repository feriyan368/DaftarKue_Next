import { useState } from "react";

const EventState = () => {
  const [nama, setnama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [jenis, setJenis] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [toping, setToping] = useState(false);
  return (
    <>
      <div className="container m-4">
        <div className="row">
          <div className="col-5">
            <h3>Form Pemesanan</h3>
            <hr />
            <div className="mb-2">
              <label htmlfor="nama">Nama</label>
              <input className="form-control" type="text" name="nama" id="nama" value={nama} onChange={(e) => setnama(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlfor="alamat">Alamat</label>
              <input className="form-control" type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="jenis" className="fs-5">
                Jenis
              </label>
              <br />
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="jenis" id="jenisBesar" checked={() => setJenis("Besar")} value="Besar" onChange={(e) => setJenis(e.target.value)} />

                <label className="form-check-label" htmlFor="jenisBesar">
                  Besar
                </label>
              </div>
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="jenis" id="jenisKecil" checked={() => setJenis("Kecil")} value="Kecil" onChange={(e) => setJenis(e.target.value)} />

                <label className="form-check-label" htmlFor="jenisKecil">
                  Kecil
                </label>
              </div>
              <div className="form-check-inline">
                <input type="radio" className="from-check-input" name="jenis" id="jenisSedang" checked={() => setJenis("Sedang")} value="Sedang" onChange={(e) => setJenis(e.target.value)} />

                <label className="form-check-label" htmlFor="jenisSedang">
                  Sedang
                </label>
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="fs-5">
                Pilih Toping
              </label>
              <select name="toping" id="" className="form-select" value={toping} onChange={(e) => setToping(e.target.value)}>
                <option value="Toping Coklat">Toping Coklat</option>
                <option value="Toping Keju">Toping Keju</option>
                <option value="Toping Tiramisu">Toping Tiramisu</option>
                <option value="Toping Kacang">Toping Kacang</option>
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="" className="fs-5">
                Toping
              </label>
              <br />
              <div className="form-check-inline">
                <input type="checkbox" className="form-check-input" name="chkUkuran" id="chkUkuran" checked={ukuran} onChange={(e) => setUkuran(e.target.checked)} />
                <label htmlFor="chkUkuran" className="form-check-label">
                  Ukuran
                </label>
              </div>
            </div>
          </div>

          <div className="col-7">
            <h3>Resume</h3>
            <hr />
            <div>
              <h5 className="mb-2">Nama : {nama}</h5>
            </div>
            <div>
              <h5 className="mb-2">Alamat : {alamat}</h5>
            </div>
            <div>
              <h5 className="mb-2">jenis :{jenis}</h5>
            </div>
            <div>
              <h5 className="mb-2">Ukuran :{progPil}</h5>
            </div>
            <div>
              <h5>Toping : {toping ? "Ada" : "-"}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventState;
