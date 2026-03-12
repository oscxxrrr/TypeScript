export type EstadoODS = "Aprobado" | "Ejecucion" | "Completado" | "Rechazado";

export interface InterfazSostenible {
  id: number;
  odsFav: string;
  estado: EstadoODS;
  color: string;
}

export const odsAlumnos: InterfazSostenible[] = [
  { id: 1, odsFav: "FIN DE LA POBREZA", estado: "Rechazado", color: "#ef4444" },
  { id: 2, odsFav: "HAMBRE CERO", estado: "Aprobado", color: "#f59e0b" },
  { id: 3, odsFav: "SALUD Y BIENESTAR", estado: "Ejecucion", color: "#22c55e" },
  {
    id: 4,
    odsFav: "EDUCACION DE CALIDAD",
    estado: "Aprobado",
    color: "#3b82f6",
  },
  {
    id: 5,
    odsFav: "IGUALDAD DE GENERO",
    estado: "Completado",
    color: "#ec4899",
  },
  {
    id: 6,
    odsFav: "AGUA LIMPIA Y SANEAMIENTO",
    estado: "Ejecucion",
    color: "#06b6d4",
  },
  {
    id: 7,
    odsFav: "ENERGIA ASEQUIBLE Y NO CONTAMINANTE",
    estado: "Aprobado",
    color: "#facc15",
  },
  {
    id: 8,
    odsFav: "TRABAJO DECENTE Y CRECIMIENTO ECONOMICO",
    estado: "Rechazado",
    color: "#a855f7",
  },
  {
    id: 9,
    odsFav: "INDUSTRIA INNOVACION E INFRAESTRUCTURA",
    estado: "Ejecucion",
    color: "#6366f1",
  },
  {
    id: 10,
    odsFav: "REDUCCION DE LAS DESIGUALDADES",
    estado: "Aprobado",
    color: "#14b8a6",
  },
  {
    id: 11,
    odsFav: "CIUDADES Y COMUNIDADES SOSTENIBLES",
    estado: "Completado",
    color: "#f97316",
  },
  {
    id: 12,
    odsFav: "PRODUCCION Y CONSUMO RESPONSABLE",
    estado: "Ejecucion",
    color: "#84cc16",
  },
  {
    id: 13,
    odsFav: "ACCION POR EL CLIMA",
    estado: "Aprobado",
    color: "#0ea5e9",
  },
  { id: 14, odsFav: "VIDA SUBMARINA", estado: "Completado", color: "#0284c7" },
  {
    id: 15,
    odsFav: "VIDA DE ECOSISTEMAS TERRESTRES",
    estado: "Ejecucion",
    color: "#65a30d",
  },
  {
    id: 16,
    odsFav: "PAZ JUSTICIA E INSTITUCIONES SOLIDAS",
    estado: "Aprobado",
    color: "#64748b",
  },
  {
    id: 17,
    odsFav: "ALIANZAS PARA LOGRAR LOS OBJETIVOS",
    estado: "Completado",
    color: "#9333ea",
  },
];
