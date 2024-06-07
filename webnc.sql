-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июнь 07 2024 г., 18:58
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `webnc`
--
CREATE DATABASE IF NOT EXISTS `webnc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `webnc`;

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
                         `catalogID` int NOT NULL,
                         `catalogName` varchar(100) NOT NULL,
                         `parentID` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`catalogID`, `catalogName`, `parentID`) VALUES
                                                                 (1, 'root-folder', 0),
                                                                 (2, 'Images', 1),
                                                                 (3, 'Games', 1),
                                                                 (4, 'Videos', 1),
                                                                 (5, 'Documents', 1),
                                                                 (6, 'Multiplayer', 3),
                                                                 (7, 'Singleplayer', 3),
                                                                 (8, 'Work', 2),
                                                                 (9, 'Work', 4),
                                                                 (10, 'ShareX', 2),
                                                                 (11, 'OBS', 4),
                                                                 (12, 'Presentations', 5),
                                                                 (13, 'AppData', 5),
                                                                 (14, 'Archive', 2),
                                                                 (15, 'File1.file', 8),
                                                                 (16, 'File2.file', 8),
                                                                 (17, 'File3.file', 10),
                                                                 (18, 'File4.file', 14),
                                                                 (19, 'File5.file', 6),
                                                                 (20, 'File6.file', 7),
                                                                 (21, 'File7.file', 9),
                                                                 (22, 'File8.file', 11),
                                                                 (23, 'File9.file', 12),
                                                                 (24, 'Minecraft', 13);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `files`
--
ALTER TABLE `files`
    ADD PRIMARY KEY (`catalogID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
    MODIFY `catalogID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;