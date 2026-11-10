import { useState } from "react";
import type { Kerekpar } from "../type/kerekpar";
import "bootstrap/dist/css/bootstrap.min.css";

type KerekparProps = {
  kerekpar: Kerekpar;
};

export function KerekparCard({ kerekpar }: KerekparProps) {
  const [reszletek, setReszletek] = useState(true);

  return (
    <div className="card h-100 border-0 shadow-sm rounded-4">
      <div className="card-body p-4">

        <h3 style={{color: kerekpar.szin}} className="card-title fw-bold mb-3">{kerekpar.nev}</h3>

        {reszletek && (
          <div className="bg-light rounded-3 p-3 mb-3">
            <p className="mb-2">
              <i className="text-success me-2"></i>
              <strong>Típus:</strong> {kerekpar.tipus}
            </p>

            <p className="mb-0">
              <i className="text-dark grey me-2"><strong>Napi díj:</strong></i>
            </p>

            <h4 className="text-success fw-bold mt-2">
              {kerekpar.napiDij} Ft
              <em className="text-muted fs-6"> / nap</em>
            </h4>
          </div>
        )}

        <button
          className={`btn w-100 rounded-pill ${
            reszletek ? "btn-outline-secondary" : "btn-success"
          }`}
          onClick={() => setReszletek(!reszletek)}
        >
          {reszletek ? "Adatok elrejtése" : "Részletek megtekintése"}
        </button>
      </div>
    </div>
  );
}
