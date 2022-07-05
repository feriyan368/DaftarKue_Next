import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const DataKue = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  async function hapusKue(kode) {
    try {
      const response = await axios.delete(`http://localhost:5000/kue/${kode}`);
      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Kue dengan Kode ${kode} telah dihapus`);
    } catch (error) {
      console.log({ message: error.message });
    }
    router.push(`/admin/datakue`);
  }

  return (
    <div className="container">
      <h3>Data Kue</h3>
      <table className="table table-dark table-stiped table-hover">
        <thead>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Expired</th>
          </tr>
        </thead>
        <tbody>
          {data.map((kue, idx) => (
            <tr key={idx}>
              <td>{kue.kode}</td>
              <td>{kue.nama}</td>
              <td>{kue.harga}</td>
              <td>{kue.expired}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <Link
                    href={`/admin/updatemahasiswa?nim=${kue.kode}
                              &nama=${kue.nama}&harga=${kue.harga}
                              &expired=${mhs.expired}`}
                  >
                    <a>Edit</a>
                  </Link>

                  <button className="btn btn-danger btn-sm" value={kue.kode} onClick={(e) => hapusKue(e.target.value)}>
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataKue;
