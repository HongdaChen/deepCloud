package chen.service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import chen.service.UserService;
/**
 * Servlet implementation class showUsers
 */
@WebServlet("/Userlist")
public class Userlist extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		try {
			List<User> userlist = UserService.findAllStudent();
			request.setAttribute("userlist", userlist);
			RequestDispatcher rd = request.getRequestDispatcher("manage-student.jsp");
			// 转发
			rd.forward(request, response);
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
