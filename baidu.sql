-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-10 04:55:48
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `web5`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidu`
--

CREATE TABLE IF NOT EXISTS `baidu` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `img` text NOT NULL,
  `content` text NOT NULL,
  `date` text NOT NULL,
  `channel` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- 转存表中的数据 `baidu`
--

INSERT INTO `baidu` (`id`, `title`, `img`, `content`, `date`, `channel`) VALUES
(2, '洪峰抵武汉两江交汇清浊交融', 'https://timg01.bdimg.com/timg?tc&size=b716_448&sec=0&quality=75&cut_x=90&cut_y=0&cut_h=0&cut_w=716&di=bbffbba0640ad5adda8dfd2c8070743e&src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C0%252C897%252C448%2Fsign%3D19e5f9d22aa446236a85ff22a5125e3e%2F503d269759ee3d6d213c046349166d224e4adea4.jpg', '内容2', '2017-06-04', '本地'),
(3, '乐视总部门口躺满讨债人', 'https://timg01.bdimg.com/timg?tc&size=b508_318&sec=0&quality=75&cut_x=64&cut_y=0&cut_h=0&cut_w=508&di=75571ff7665f6ba2c397d928053323d1&src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C0%252C637%252C318%2Fsign%3Db21228c0db09b3defff0be28f18f40b1%2Fd009b3de9c82d15828e3d6198a0a19d8bc3e4231.jpg', '吖', '2017-03-06', '社会'),
(4, '北京至雄安新区动车组首发', 'https://timg01.bdimg.com/timg?tc&size=b817_511&sec=0&quality=75&cut_x=102&cut_y=0&cut_h=0&cut_w=817&di=262d6ec43db078e0b88d70a295acd78b&src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C113%252C1022%252C511%2Fsign%3D10422549fd03918fc39e678a6c0d0aa6%2F9e3df8dcd100baa1be7435124d10b912c8fc2e3a.jpg', '空', '2017-02-16', '本地'),
(5, '安理会就朝发射导弹召开会议', 'https://timg01.bdimg.com/timg?tc&size=b718_449&sec=0&quality=75&cut_x=89&cut_y=0&cut_h=0&cut_w=718&di=040e4ae923ca0c56967d9851a2a58c4a&src=http%3A%2F%2Fimgsa.baidu.com%2Fnews%2Fcrop%253D0%252C52%252C898%252C449%2Fsign%3D230bcc8a692762d09471feff9ddc24cf%2Fdcc451da81cb39db3c1a14ffda160924aa183044.jpg', '', '2017-07-06', '图片'),
(6, '习近平会见韩国总统文在寅', 'https://imgsa.baidu.com/news/q%3D100/sign=9890290daec27d1ea3263fc42bd4adaf/1f178a82b9014a90baacdd14a3773912b21bee8d.jpg', '', '2分钟前', '社会'),
(7, '抄袭界VIP腾讯再现江湖，直击火爆手游《球球大作战》', 'https://t11.baidu.com/it/u=2924825416,1658188567&fm=173&s=74C38ABA12C64553028072F00300D094&w=218&h=146&img.JPEG', '', '4小时前', '娱乐'),
(8, '三八妇乐——宇言再现丨思维——逻辑', 'https://t11.baidu.com/it/u=2355526258,2495877929&fm=173&s=45419046C8CF9C55427D99890300C083&w=218&h=146&img.JPEG', '', '4小时前', '娱乐'),
(9, '3333333333', '33333', '33333333', '3333333', 'qq'),
(10, '不愿配合火车站安检 女子怒扇工作人员耳光', 'https://t10.baidu.com/it/u=3423321168,598492558&fm=173&s=0494827486564A7E46956C830300E0C2&w=218&h=146&img.JPG', '', '9秒钟前', '推荐'),
(11, '四川一废弃加油加气站拆除时发生爆炸 致1死2伤', 'https://t11.baidu.com/it/u=4179008074,1891803662&fm=173&s=EE8A25C3D0B1138CBDBD05140100C093&w=218&h=146&img.JPEG', '', '19分钟前', '推荐'),
(12, '人民币中间价上调39点 结束四连跌', 'https://t12.baidu.com/it/u=3298171805,3881766965&fm=173&s=BF00CB4A2461A515CE2D65BF03005016&w=218&h=146&img.JPEG', '', '1小时前', '推荐'),
(13, '宜贷网组建众之金服，互联网与金融联姻成趋势？', 'https://t10.baidu.com/it/u=2418538908,845727971&fm=173&s=F84121C65D00065548E6FB1F0300D0D9&w=218&h=146&img.JPG', '', '1小时前', '推荐'),
(14, '郭俊峰：微商大有可为，你应该好好看看', 'https://t11.baidu.com/it/u=3935164120,3095884704&fm=173&s=1D9A68950C1036D00F899DAF03005021&w=218&h=146&img.JPEG', '', '9分钟前', '百家'),
(15, '安远县携手国投信达 全力打造特色"田园综合体"', 'https://t10.baidu.com/it/u=2496937974,1339324951&fm=173&s=6EB008C106C2314B0A14409003008092&w=218&h=146&img.PNG', '', '8分钟前', '百家'),
(16, 'UFO为冠再战一年，为名放弃勇士邀请：我要靠自己拿总冠军', 'https://t11.baidu.com/it/u=3457639549,1899881352&fm=173&s=1C41B14C8E6C2D153BC0410A03007091&w=218&h=146&img.JPEG', '', '3分钟前', '百家'),
(17, '刘强东：马云想做好阿里巴巴，必须不断向我们京东学习！马云：呵呵', 'https://t12.baidu.com/it/u=2166311969,2268019752&fm=173&s=4613578D50629D131A00D1A903006011&w=218&h=146&img.JPEG', '', '16分钟前', '百家');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
