function Ods(){

    enum listaODS{
        ods1 = "Fin de la pobreza",
        ods2 = "Hambre cero",
        ods3 = "Salud y Bien estar",
        ods4 = "Agua limpia",
        ods5 = "Energia asequible",
        ods6 = "Educacion de calidad", 
        ods7 = "Igualdad de genero", 
        ods8 = "Trabajo docente y crecimiento economico"
    }

    type EstadoODS = 'Aprobado' | 'Ejecucion' | "Completado" | 'Rechazado';

    interface InterfazSostenible {
        id:number;
        odsFav:listaODS;
        estado:EstadoODS;
    }

    const odsAlumnos: InterfazSostenible [] = [
        {
            id:1,
            odsFav:listaODS.ods1,
            estado:'Rechazado'
        },
        {
            id:2,
            odsFav:listaODS.ods2,
            estado:'Aprobado' 
        },
        {
            id:3,
            odsFav:listaODS.ods3,
            estado:'Ejecucion'
        },
        {
            id:4,
            odsFav:listaODS.ods4,
            estado:'Ejecucion'
        }
    ];

    let odsFav = listaODS.ods6; 

    function filtrarProyectosClimaticos(ods: InterfazSostenible[]): InterfazSostenible[]{
        return ods.filter(o => o.estado === "Ejecucion");
    }

    const resultado = filtrarProyectosClimaticos(odsAlumnos);

    return (
        <>
            <h1>Mi ods fav es {odsFav}</h1>
            <h2>Archivos json: {JSON.stringify(resultado, null, 4)}</h2>     
        </>
    );
}

export default Ods;
