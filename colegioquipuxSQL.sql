-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-10-2020 a las 20:01:55
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `colegioquipux2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `codigo` int(7) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tipodocumento` varchar(20) NOT NULL,
  `numdocumento` int(20) NOT NULL,
  `ciudad` varchar(30) NOT NULL,
  `genero` varchar(15) NOT NULL,
  `direccion` varchar(120) NOT NULL,
  `telefono` int(9) NOT NULL,
  `celular` int(15) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `grado` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `promedio` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`codigo`, `nombre`, `tipodocumento`, `numdocumento`, `ciudad`, `genero`, `direccion`, `telefono`, `celular`, `correo`, `grado`, `estado`, `promedio`) VALUES
(2020001, 'Jacobo Uribe Domínguez', 'T.I', 1031913745, 'Medellín', 'Masculino', 'Calle 22 A 80', 6123568, 1234567891, 'jacouribe2003@gmail.com', 0, 0, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantesgrupos`
--

CREATE TABLE `estudiantesgrupos` (
  `codigo` int(11) NOT NULL,
  `grupo` int(11) NOT NULL,
  `estudiante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estudiantesgrupos`
--

INSERT INTO `estudiantesgrupos` (`codigo`, `grupo`, `estudiante`) VALUES
(1, 20150701, 2020001);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `codigo` int(11) NOT NULL,
  `grado` int(11) NOT NULL,
  `profesor` int(11) NOT NULL,
  `jornada` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`codigo`, `grado`, `profesor`, `jornada`) VALUES
(2020001, 9, 2010001, 'Tarde');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `codigo` varchar(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `profesor` int(7) NOT NULL,
  `grados` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`codigo`, `nombre`, `profesor`, `grados`) VALUES
('LC001', 'Lengua Castellana', 2010001, '9,10,11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materiasgrupos`
--

CREATE TABLE `materiasgrupos` (
  `codigo` int(11) NOT NULL,
  `materia` varchar(8) NOT NULL,
  `grupo` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materiasgrupos`
--

INSERT INTO `materiasgrupos` (`codigo`, `materia`, `grupo`) VALUES
(1, 'LC001', 2020009);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `codigoProfesor` int(11) NOT NULL,
  `nombreProfesor` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`codigoProfesor`, `nombreProfesor`, `correo`) VALUES
(2010001, ' Iván Dario Ramírez', 'iDario312_13@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiantes`
--
ALTER TABLE `estudiantes`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `estudiantesgrupos`
--
ALTER TABLE `estudiantesgrupos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `fk_estudiantes_grupos` (`estudiante`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `profesorDirector` (`profesor`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `materiasgrupos`
--
ALTER TABLE `materiasgrupos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `materiasGrupoFK` (`materia`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`codigoProfesor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `materiasgrupos`
--
ALTER TABLE `materiasgrupos`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estudiantesgrupos`
--
ALTER TABLE `estudiantesgrupos`
  ADD CONSTRAINT `fk_estudiantes_grupos` FOREIGN KEY (`estudiante`) REFERENCES `estudiantes` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `profesorDirector` FOREIGN KEY (`profesor`) REFERENCES `profesores` (`codigoProfesor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `materiasgrupos`
--
ALTER TABLE `materiasgrupos`
  ADD CONSTRAINT `materiasGrupoFK` FOREIGN KEY (`materia`) REFERENCES `materias` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
