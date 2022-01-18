package interfacee;


class Father implements Superhero{

    @Override
    public void superpower() {
        System.out.println("Invisible");
    }

    @Override
    public void rule() {
        System.out.println("Father");
    }
}



public class Maincode {
    public static void main(String[] args){
        Father myfather = new Father();
        myfather.superpower();
        myfather.rule();



    }

}
