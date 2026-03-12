import type { InterfazSostenible } from "../data/Ods";
import "./Card.css";

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  return (
    <div className="card" style={{ background: itemOds.color }}>
      <h3 className="card-title">ODS #{itemOds.id}</h3>

      <p className="card-text">
        <strong>ODS favorito:</strong> {itemOds.odsFav}
      </p>

      <p className="card-status">{itemOds.estado}</p>
    </div>
  );
};
