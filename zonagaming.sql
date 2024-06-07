-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2024 a las 00:20:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `zonagaming`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `name` varchar(25) NOT NULL,
  `userName` varchar(25) NOT NULL,
  `password` varchar(300) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`name`, `userName`, `password`, `id`) VALUES
('Juan', 'Juancho123', '$2a$08$NAt3ORsgXDANax5AitbVwu1V0l.aY4eAsFP2U9huajD', 1),
('Juan', 'JuanCA', '$2a$08$FEOygPevAzUbGl7YtsfJ3u5xK1FmYUGv9ay1mYqXFlA', 2),
('Juan', 'JuansA', '$2a$08$qW03zkrDXdk7u2oDHBrxmeL2NBadlMU.0jcquzmmue2', 3),
('Juan', 'Juanss', '$2a$08$y6qlX/h7m89VRyHqd1XKj.x6ieoO3AhzGM2mHP6BEVO', 4),
('Juan', 'Juan', '$2a$08$sNBJkTtEF1Mv6bUSSamHWOXlm/2A7RxTn5Pvm9BK15s', 5),
('Kevin', 'kevi', '$2a$08$6DNc0RS7wCdA..If9OnEOOyPYJXJeDQYzi4OhQj.omodErhgmKmGi', 6);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
