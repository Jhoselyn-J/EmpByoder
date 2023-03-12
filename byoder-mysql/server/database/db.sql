DROP database IF EXISTS byoder;
CREATE database IF NOT EXISTS byoder;
Use byoder;
CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(25) NOT NULL,
    ap_paterno VARCHAR(25) NOT NULL,
    ap_materno VARCHAR(25) NOT NULL,
    ci INT NOT NULL,
    fecha_nac DATE NOT NULL
);
CREATE TABLE acceso(
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(11) NOT NULL
);
CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_persona INT NOT NULL,
    user VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    id_acceso INT NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES persona(id) on DELETE CASCADE on UPDATE CASCADE,
    FOREIGN KEY (id_acceso) REFERENCES acceso(id) on DELETE CASCADE on UPDATE CASCADE
);
INSERT INTO persona(nombre, ap_paterno, ap_materno, ci, fecha_nac)
VALUES (
        'Ramzeb',
        'Molder',
        'Zaprierc',
        45785478,
        '2000-12-31'
    ),
    (
        'Juan',
        'Molina',
        'Pereira',
        12785478,
        '1988-05-01'
    ),
    (
        'Andy',
        'Molder',
        'Zeballos',
        35685471,
        '2001-11-09'
    ),
    (
        'Seydi',
        'Guzmán',
        'Montaño',
        58748965,
        '1993-03-12'
    ),
    (
        'Peregrina',
        'Zeballos',
        'Nogales',
        6985478,
        '1976-06-16'
    );
INSERT INTO acceso(tipo)
VALUES("user"),
    ("admin");
INSERT INTO usuario(id_persona, user, password, id_acceso)
VALUES (1, "user", "user", 1),
    (2, "admin", "admin", 2),
    (3, "ingesaurio", "ingesaurio", 2),
    (5, "root", "root", 1);