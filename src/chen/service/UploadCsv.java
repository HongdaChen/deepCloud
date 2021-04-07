package chen.service;

import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;

public class UploadCsv {
	public static List<User> readCSV(String path) {
        List<User>UserList=new ArrayList<>();
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path));// 文件名
            reader.readLine();//第一行信息，为标题信息，不用,如果需要，注释掉
            String line = null;
            while ((line = reader.readLine()) != null) {
                User user=new User();
                String item[] = line.split(",");// CSV格式文件为逗号分隔符文件，这里根据逗号切分
                user.setNumber(item[0]);
                user.setName(item[1]);
                user.setSex(item[2]);
                user.setGrade(item[3]);
                user.setScore(item[4]);
                user.setLevel(item[5]);
                UserList.add(user);
            }
//                System.out.println("从CSV中读取到的数据：" + UserList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return UserList;
    }
	
	
	
	public static void addUser( String ty,String number,String name,String sex,String grade,String score,String level) throws ClassNotFoundException, SQLException {

		Connection conn = UserService.getConnection();
		// 创建QueryRunner对象，用来执行sql语句
		QueryRunner qr = new QueryRunner();
		// 创建sql语句
		String sql = "insert into "+ty+"(number,name,sex,grade,score,level) VALUES(?,?,?,?,?,?)";
		// 执行sql语句
		qr.update(conn, sql, number,name,sex,grade,score,level);
		// 关闭相关资源
		DbUtils.close(conn);
	}
	
	public static void addData(String ty,List<User> user) {
		for (User value : user) {
	       try {
			addUser(ty,value.getNumber(),value.getName(),value.getSex(),value.getGrade(),value.getScore(),value.getLevel());
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	        }
	}
	
	
	
}
