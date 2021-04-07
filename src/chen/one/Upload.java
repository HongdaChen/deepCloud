package chen.one;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import chen.service.*;

/**
 * Servlet implementation class Upload
 */
@MultipartConfig
@WebServlet("/Upload")
public class Upload extends HttpServlet {
	private static final long serialVersionUID = 1L;

 

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		Part part = request.getPart("data");
		String appPath = this.getServletContext().getRealPath("/");
		String str=Long.toString(System.currentTimeMillis());
		String path = appPath+"data"+File.separator;
		String newPath=path+"data"+str+".csv";
		part.write(newPath);
		String tableName="t_student";
		List<User> user=UploadCsv.readCSV(newPath);
		UploadCsv.addData(tableName,user);
		
	
		RequestDispatcher rd = request.getRequestDispatcher("manage-student.jsp");
		// 转发
		rd.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
