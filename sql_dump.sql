-- --------------------------------------------------------
-- Fixed for MariaDB compatibility (cPanel JagoanHosting)
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- ================================================================
-- TABLE: users (must come first — referenced by articles FK)
-- ================================================================
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `username`, `password`, `full_name`, `is_active`, `created_at`) VALUES
	(1, 'admin_bamcargo', '\$2b$10$PaH8SrIM26dS66OCzDCFEe93k.BaXvSdhg82QlP7OEngx.EQkzeea', 'Admin Bamcargo', 1, '2026-02-22 06:13:06');

-- ================================================================
-- TABLE: articles
-- ================================================================
DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `status` enum('published','draft') NOT NULL DEFAULT 'published',
  `tags` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ================================================================
-- TABLE: banners
-- ================================================================
DROP TABLE IF EXISTS `banners`;
CREATE TABLE IF NOT EXISTS `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(500) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `width` int NOT NULL,
  `height` int NOT NULL,
  `is_portrait` tinyint(1) NOT NULL DEFAULT '0',
  `link` varchar(500) DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_schedule` (`start_date`,`end_date`),
  KEY `idx_active_sort` (`is_active`,`sort_order`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `banners` (`id`, `title`, `description`, `image_url`, `alt`, `width`, `height`, `is_portrait`, `link`, `sort_order`, `is_active`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
	(2, 'banner1', NULL, '/uploads/banners/banner-1777671605202-dvet9s.webp', 'banner1', 1024, 576, 0, NULL, 0, 1, NULL, NULL, '2026-05-01 21:40:05', '2026-05-01 21:40:05'),
	(3, 'banner2', NULL, '/uploads/banners/banner-1777671632356-y1v8ga.webp', 'banner2', 1024, 576, 0, NULL, 0, 1, NULL, NULL, '2026-05-01 21:40:32', '2026-05-01 21:40:32'),
	(4, 'banner3', NULL, '/uploads/banners/banner-1777671651806-ji02du.webp', 'banner3', 1024, 576, 0, NULL, 0, 1, NULL, NULL, '2026-05-01 21:40:51', '2026-05-01 21:40:51'),
	(5, 'banner4', NULL, '/uploads/banners/banner-1777671667979-hd75h1.webp', 'banner4', 1024, 576, 0, NULL, 0, 1, NULL, NULL, '2026-05-01 21:41:08', '2026-05-01 21:41:08'),
	(6, 'banner5', NULL, '/uploads/banners/banner-1777671686243-n2ic1n.webp', 'banner5', 1024, 576, 0, NULL, 0, 1, NULL, NULL, '2026-05-01 21:41:26', '2026-05-01 21:41:26'),
	(7, 'banner7', NULL, '/uploads/banners/banner-1777671854921-tjj8t4.webp', 'banner7', 1024, 576, 0, NULL, 0, 1, NULL, NULL, '2026-05-01 21:44:15', '2026-05-01 21:44:15');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;