create database NexMeet_DB;

Use NexMeet_DB;

create table Usuario
(
id_usuario int auto_increment,
nombre varchar(100) not null,
email varchar(100) not null,
contra varchar(20) not null,
foto_perfil blob,
fecha_reigstro date default (CURRENT_DATE()),
fecha_nacimiento date,
tipo enum('Administrador', 'Empleado'), 
primary key (id_usuario)
);
alter table Usuario
add estado bit;



create table Evento
(
id_evento int auto_increment not null,
id_usuario int not null,
titulo varchar(100) not null,
descripcion varchar(255),
fecha_evento datetime not null,
lugar varchar(100) not null,
foto_portada blob,
fecha_creacion datetime default (CURRENT_DATE()),
video varchar(255),
reacciones int,
tipo_evento enum('Deportes', 'Música', 'Arte', 'Tecnología', 'Viajes', 'Gastronomía'), 
Primary key (id_evento),
Foreign Key (id_usuario) references Usuario(id_usuario)
);


create table Comentario
(
id_comentario int auto_increment,
id_usuario int not null,
id_evento int not null,
contenido varchar(255) not null,
fecha_comentario datetime default (CURRENT_DATE()),
foto_comentario blob,
Primary key (id_comentario),
Foreign Key (id_usuario) references Usuario(id_usuario),
Foreign Key (id_evento) references Evento(id_evento)
);


create table Incripcion
(
id_inscripcion int auto_increment,
id_usuario int not null,
id_evento int not null,
fecha_inscripcion datetime default (CURRENT_DATE()),
Primary key (id_inscripcion),
Foreign Key (id_usuario) references Usuario(id_usuario),
Foreign Key (id_evento) references Evento(id_evento)
);



create table Mensajes 
(
id_amistad int auto_increment,
id_emisor int not null,
id_receptor int not null,
texto varchar(255) not null,
fecha_envio datetime default (CURRENT_DATE()),
Primary key (id_amistad),
Foreign Key (id_emisor) references Usuario(id_usuario),
Foreign Key (id_receptor) references Usuario(id_usuario)
);

create table Amistad
(
id_amistad int auto_increment,
id_usu_1 int not null,
id_usu_2 int not null,
texto varchar(255) not null,
estado enum('rechazada', 'pendiente', 'aceptada'),
Primary key (id_amistad),
Foreign Key (id_usu_1) references Usuario(id_usuario),
Foreign Key (id_usu_2) references Usuario(id_usuario)
)



