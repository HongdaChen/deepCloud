package chen.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

public class UserService {

	public static Connection getConnection() throws SQLException {
		// 1.加载驱动
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		// 2.获取与数据库的连接
		String url = "jdbc:mysql://localhost:3306/deepCloud?characterEncoding=utf8&useSSL=true";
		String username = "root";
		String password = "hutu123"; 

		Connection conn = DriverManager.getConnection(url, username, password);

		return conn;
	}

	/**
	 * 添加用户,完成在数据库中用户表的添加
	 * 
	 * @throws ClassNotFoundException
	 * @throws SQLException
	 */
	public static void addUser(String un, String pw, String pid) throws ClassNotFoundException, SQLException {

		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "insert into login_info(username,password,pid) VALUES(?,?,?)";
		// 执行sql语句
		qr.update(conn, sql, un, pw, pid);
		// 关闭相关资源 
		DbUtils.close(conn);

//		不使用JDBC
//		// 加载驱动
//		Class.forName("com.mysql.jdbc.Driver");
//		// 获取与数据据的连接
//		String url = "jdbc:mysql://localhost:3306/db01?characterEncoding=utf8&useSSL=true";
//
//		String username = "root";
//		String password = "123456";
//
//		conn = DriverManager.getConnection(url, username, password);
//
//		String sql = "insert into t_user(username,password) VALUES(?,?)";
//		// 获取用于向数据库发送sql语句的statement
//		ps = conn.prepareStatement(sql);
//
//		ps.setString(1, un);
//		ps.setString(2, pw);
//
//		ps.executeUpdate();
//
//		// 释放资源
//
//		if (conn != null) {
//			conn.close();
//		}
//		if (ps != null) {
//			ps.close();
//		}

	}

	// 在数据库中查询
	public static User findUser(String un, String pw, String pid) throws SQLException {

		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "select * from login_info where username=? and password=? and pid=?";
		// 执行sql语句
		User user = qr.query(conn, sql, new BeanHandler<User>(User.class), un, pw, pid);
		// 关闭相关资源
		DbUtils.close(conn);
		return user;

	}
	//获取所有用户
	public static List<User> findAllUser() throws SQLException{
		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "select * from login_info";
		// 执行sql语句
		List<User> users = qr.query(conn, sql, new BeanListHandler<User>(User.class));
		// 关闭相关资源
		DbUtils.close(conn);
		return users;
	}
	public static List<User> findAllStudent() throws SQLException{
		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "select * from t_student";
		// 执行sql语句
		List<User> users = qr.query(conn, sql, new BeanListHandler<User>(User.class));
		// 关闭相关资源
		DbUtils.close(conn);
		return users;
	}
	
	public static List<User> findAllUser_t() throws SQLException{
		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "select * from t_teacher";
		// 执行sql语句
		List<User> users = qr.query(conn, sql, new BeanListHandler<User>(User.class));
		// 关闭相关资源
		DbUtils.close(conn);
		return users;
	}
	
	public static List<User> findAllUser_c() throws SQLException{
		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "select * from t_consult";
		// 执行sql语句
		List<User> users = qr.query(conn, sql, new BeanListHandler<User>(User.class));
		// 关闭相关资源
		DbUtils.close(conn);
		return users;
	}

}
