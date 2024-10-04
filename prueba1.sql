create database EmpresaABC



create table Habitacion(
	IdHabitacion int identity(1,1) primary key,
	Tipo varchar(50) not null,
	Precio int not null,
	Disponibilidad varchar(100) not null
)


create table Clientes(
	IDClientes int identity(1,1) primary key,
	Nombre varchar(100) not null,
	Direccion varchar(100) not null,
	Telefono int not null,
	Estado varchar(100) not null,
)

create table Reservas(
	IDReserva int identity(1,1) primary key,
	FechaEntrada date not null,
	FechaSalida date not null,
	IDCliente int not null,
	IdHabitacion int not null,
	foreign key(IDCliente) references Clientes(IDClientes),
	foreign key(IdHabitacion) references Habitacion(IdHabitacion)
)

Drop table Clientes

use EmpresaABC

Insert into Habitacion(Tipo, Precio, Disponibilidad)
Values('Triple', '1000', 'Disponible')

Insert into Clientes(Nombre, Direccion, Telefono, Estado)
values ('Alma Solares', 'Guatemala, Guatemala',23667894 , 'Activo')

Insert into Reservas(FechaEntrada, FechaSalida, IDCliente, IdHabitacion)
values ('2023-11-7', '2023-11-10', 2, 1)

select *from Reservas where IDCliente = 1

select *from Clientes


