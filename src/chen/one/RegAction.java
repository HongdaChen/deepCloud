package chen.one;

import java.io.IOException;

import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import chen.service.UserService;

/**
 * 用户注册保存到数据库 Servlet implementation class RegActionDb
 */
@MultipartConfig
@WebServlet("/RegAction")
public class RegAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 获取数据
		request.setCharacterEncoding("utf-8");
		String un = request.getParameter("username");
		String pw = request.getParameter("password");
		String pid = request.getParameter("pid");

		/*
		 * //处理数据 //获取项目的实际物理路径C:\apache-tomcat-8.5.5\webapps\chen-1 String appPath =
		 * this.getServletContext().getRealPath("/"); //实际的上传路径\photo\ String path =
		 * appPath + File.separator + "photo" + File.separator;
		 * 
		 * //使得当前时间作为文件名 Date d = new Date(); //当前时间的字符串格式 SimpleDateFormat sdf = new
		 * SimpleDateFormat("yyyyMMddHHmmssS");
		 * 
		 * //生成文件名 String filename = sdf.format(d) + ".jpg"; //保存文件到指定路径 part.write(path
		 * + filename); //输出
		 */

		// 写入数据库

		try {
	
			UserService.addUser(un, pw, pid);
			request.setAttribute("info", "注册成功，请登录");
			// 转发对象Path--->转发的目标地址
			RequestDispatcher rd = request.getRequestDispatcher("login2.jsp");
			// 转发
			rd.forward(request, response);

		} catch (ClassNotFoundException e) {
			System.out.println("数据库驱动没有找到!");
			e.printStackTrace();
			
			errorForward( "数据库驱动没有找到!",request,response);

		} catch (SQLException e) {
			System.out.println("数据库连接异常!");
			e.printStackTrace();
			
			errorForward( "数据库连接异常!",request,response);
			
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	// 发生异常时，处理
	private void errorForward(String info, HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 发生错误时，转到错误页面
		request.setAttribute("info", info);
		// 转发对象Path--->转发的目标地址
		RequestDispatcher rd = request.getRequestDispatcher("login.jsp");
		// 转发
		rd.forward(request, response);
	}

}
