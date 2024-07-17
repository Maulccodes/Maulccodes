/*public class Main {
	*public static void main (String[] args){
	*int number = 60;
		*System.out.println("Factors of" +number+ "are");
		*for (int i = 1; i <= number; ++1){
			*if (number % i==0){
				*System.out.println(i+"")
			*}
		*}
	*}
}*/

import javax.swing.JOptionPane;

public class Main{
	
	public static void main(String[] args) {
		
		String name = JOptionPane.showInputDialog("Enter your age");
		JOptionPane.showMessageDialog(null, "Hello "+name);
		
		
	}
}