interface Cliente  {
    name: string,
    phone: string,
    address: string,
    email: string,
}

interface Equipo {
    model: string,
    brand: string,
    serialNumber: string,
    description: string,
}

interface Tecnico {
    name: string,
    phone: string,
    email: string,
    specialty: string,
}

interface Servicio {
    serviceId: string,
    client: Cliente,
    equipment: Equipo,
    technician: Tecnico,
    serviceDate: Date,
    serviceDescription: string,
    serviceCost: number,
}

const clienteEjemplo: Cliente = {
    name: "Juan Pérez",
    phone: "555-1234",
    address: "Calle Falsa 123",
    email: "correo@correo.com",
};

const equipoEjemplo: Equipo = {
    model: "X123",
    brand: "MarcaEjemplo",
    serialNumber: "SN123456",
    description: "Descripción del equipo",
};

const tecnicoEjemplo: Tecnico = {
    name: "Carlos López",
    phone: "555-5678",
    email: "carlos@correo.com",
    specialty: "Reparación de computadoras",
};

const servicioEjemplo: Servicio = {
    serviceId: "SVC001",
    client: clienteEjemplo,
    equipment: equipoEjemplo,
    technician: tecnicoEjemplo,         
    serviceDate: new Date(),
    serviceDescription: "Reparación de la pantalla del equipo",
    serviceCost: 150.00,
};