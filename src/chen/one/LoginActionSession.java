package chen.one;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import chen.service.User;
import chen.service.UserService;

/**
 * Servlet implementation class LoginActionSession
 */
@WebServlet("/LoginActionSession")
public class LoginActionSession extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		String un = request.getParameter("username");
		String pd = request.getParameter("password");
		String pid = request.getParameter("pid");
		
		HttpSession session = request.getSession();

		try {
			
			User user = UserService.findUser(un, pd, pid);
			
			if (user != null) {
				session.setAttribute("username", un);
				if (pid.equals("1") || pid.equals("2") || pid.equals("3") || pid.equals("4")) {
					request.getRequestDispatcher("manage.jsp").forward(request, response);
				}else {
					request.getRequestDispatcher("index.jsp").forward(request, response);
				}
				
			} else {
				request.setAttribute("info", "用户名或密码错误!");
				request.getRequestDispatcher("login2.jsp").forward(request, response);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
