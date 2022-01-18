package interfacee;

interface suit {
    String suit = "super suit";
    public void first();
}
interface mask{
    String mask ="black mask";
    public void sixth();
}
interface superpower{
    String power = "strong";
    public void second();
}

interface superpower1{
    String power1 = "Invisible";
    public void third();
}
interface superpower2{
    String power2="transform";
    public void fourth();
}
interface superpower3{
    String power3="speed running";
    public void fifth();
}

class  impclass implements suit,mask,superpower,superpower1,superpower2,superpower3{
    @Override
    public void first() {
        System.out.println("everybody is wearing: "+ suit+" and "+mask);
    }
    public void sixth(){

    }
    @Override
    public void second() {
        System.out.println("father have: "+ power +" power");

    }

    @Override
    public void third() {
        System.out.println("sister have: "+ power1 +" power");
    }

    @Override
    public void fourth() {
        System.out.println("baby have: "+ power2 +" power");
    }
    public void fifth(){
        System.out.println("brother have: "+ power3 +" power");
    }

}

 class implementss {
     public static void main(String[] args){

    impclass object = new impclass();
    object.first();
    object.second();
    object.third();
    object.fourth();
    object.fifth();
     }
}
