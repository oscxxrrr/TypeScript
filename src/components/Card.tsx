import type { InterfazSostenible } from "../data/Ods";

export const Card = ({ itemOds }: { itemOds: InterfazSostenible }) => {
  return (
    <div
      style={{
        background: itemOds.color,
        borderRadius: "16px",
        padding: "20px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#1e293b", marginBottom: "10px" }}>
        ODS #{itemOds.id}
      </h3>

      <p style={{ color: "#334155", margin: "5px 0" }}>
        <strong>ODS favorito:</strong> {itemOds.odsFav}
      </p>

      <p
        style={{
          marginTop: "10px",
          background: "#3b82f6",
          color: "white",
          padding: "6px 12px",
          borderRadius: "8px",
          display: "inline-block",
          fontSize: "14px",
        }}
      >
        {itemOds.estado}
      </p>
    </div>
  );
};
