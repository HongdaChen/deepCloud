package chen.service;

public class User {
	
	//登录字段
	private String userid;
	private String username;
	private String password;
	//在册学生
	private String number;
	private String name;
	private String sex;
	private String grade;
	private String score;
	private String level;
	private String remark;
	//在册老师
	private String tnumber;
	private String tname;
	private String tyears;
	private String ttelephone;
	private String taddress;
	//在册咨询师
	private String c_number;
	private String c_name;
	private String c_telephone;
	private String c_address;
	private String c_years;
	
	//用户登录属性
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	//在册学生属性
	public String getNumber() {
		return number;
	}
	
	public void setNumber(String number) {
		this.number = number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getRemake() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	// 在线老师档案
	public String getTnumber() {
		return tnumber;
	}
	public void setTnumber(String tnumber) {
		this.tnumber = tnumber;
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}
	public String getTyears() {
		return tyears;
	}
	public void setTyears(String tyears) {
		this.tyears = tyears;
	}
	public String getTtelephone() {
		return ttelephone;
	}
	public void setTtelephone(String ttelephone) {
		this.ttelephone = ttelephone;
	}
	public String getTaddress() {
		return taddress;
	}
	public void setTaddress(String taddress) {
		this.taddress = taddress;
	}
	
	//在册咨询师档案
	public String getC_number() {
		return c_number;
	}
	public void setC_number(String c_number) {
		this.c_number = c_number;
	}
	public String getC_name() {
		return c_name;
	}
	public void setC_name(String c_name) {
		this.c_name = c_name;
	}
	public String getC_telephone() {
		return c_telephone;
	}
	public void setC_telephone(String c_telephone) {
		this.c_telephone = c_telephone;
	}
	public String getC_address() {
		return c_address;
	}
	public void setC_address(String c_address) {
		this.c_address = c_address;
	}
	public String getC_years() {
		return c_years;
	}
	public void setC_years(String c_years) {
		this.c_years = c_years;
	}
	
}
