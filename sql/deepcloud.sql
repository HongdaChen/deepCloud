/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : deepcloud

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 06/04/2021 15:22:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for login_info
-- ----------------------------
DROP TABLE IF EXISTS `login_info`;
CREATE TABLE `login_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of login_info
-- ----------------------------
INSERT INTO `login_info` VALUES (1, 5, 'chen', '000', NULL);
INSERT INTO `login_info` VALUES (6, 1, '教育局领导', '123456', NULL);
INSERT INTO `login_info` VALUES (7, 2, '教育局管理员', '123456', NULL);
INSERT INTO `login_info` VALUES (8, 3, '校级领导', '123456', NULL);
INSERT INTO `login_info` VALUES (9, 4, '校级管理员', '123456', NULL);

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pid` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '教育局领导', 1);
INSERT INTO `sys_menu` VALUES (2, '教育局管理员', 2);
INSERT INTO `sys_menu` VALUES (3, '校级领导', 3);
INSERT INTO `sys_menu` VALUES (4, '校级管理员', 4);
INSERT INTO `sys_menu` VALUES (5, '学生', 5);
INSERT INTO `sys_menu` VALUES (6, '心理教师', 6);
INSERT INTO `sys_menu` VALUES (7, '家长', 7);
INSERT INTO `sys_menu` VALUES (8, '其他教师', 8);

-- ----------------------------
-- Table structure for t_consult
-- ----------------------------
DROP TABLE IF EXISTS `t_consult`;
CREATE TABLE `t_consult`  (
  `c_number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `c_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `c_telephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `c_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `c_years` int(40) NOT NULL,
  PRIMARY KEY (`c_number`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_consult
-- ----------------------------
INSERT INTO `t_consult` VALUES ('123', 'qwes', '123456', '浙江', 5);
INSERT INTO `t_consult` VALUES ('234', 'wsa', '121234', 'hangzhou', 12);

-- ----------------------------
-- Table structure for t_student
-- ----------------------------
DROP TABLE IF EXISTS `t_student`;
CREATE TABLE `t_student`  (
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sex` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `grade` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `score` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `level` varchar(3) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`number`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_student
-- ----------------------------
INSERT INTO `t_student` VALUES ('1245', '上导航', '1', '3', '12', '1', NULL);
INSERT INTO `t_student` VALUES ('12458', '上导航a', '1', '3', '12', '1', NULL);
INSERT INTO `t_student` VALUES ('147', 'sa', '1', '4', '34', '2', NULL);
INSERT INTO `t_student` VALUES ('1497', 'sas', '1', '4', '34', '2', NULL);
INSERT INTO `t_student` VALUES ('23', 'we', '2', '5', '67', '1', NULL);
INSERT INTO `t_student` VALUES ('54', '高璐', '女', '3', '98', '1', NULL);
INSERT INTO `t_student` VALUES ('778', 'wew', '2', '5', '67', '1', NULL);

-- ----------------------------
-- Table structure for t_teacher
-- ----------------------------
DROP TABLE IF EXISTS `t_teacher`;
CREATE TABLE `t_teacher`  (
  `tnumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tyears` int(40) NOT NULL,
  `ttelephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `taddress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `university` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `123` int(23) NULL DEFAULT NULL,
  PRIMARY KEY (`tnumber`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_teacher
-- ----------------------------
INSERT INTO `t_teacher` VALUES ('123', 'qwq', 4, '18727123', 'swert', 'aaa', NULL);
INSERT INTO `t_teacher` VALUES ('231', 'awee', 13, '12123124', 'dscad', '浙江大学', NULL);
INSERT INTO `t_teacher` VALUES ('545', 'away', 12, '45678987', 'dfghd', '浙江财经大学', NULL);

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'chen', 'ssss');
INSERT INTO `t_user` VALUES (2, 'daa', 'eeee');
INSERT INTO `t_user` VALUES (3, 'ming', '4433332');
INSERT INTO `t_user` VALUES (4, 'sssaa', '65433');

SET FOREIGN_KEY_CHECKS = 1;
