/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jm.coleccions;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author tolsa
 */
public class Coleccions {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {


        List list = new ArrayList();
        List linkList = new LinkedList();
        
        //add
        list.add("hola");
        list.add("què tal?");
        list.add("adeu");
        
        linkList.add(0, "hola");
        linkList.add(1, "adeu");
        
        //contains
        if (list.contains("hola")){
            System.out.println("La llista list conte la paraula hola");
        }
        else{
            System.out.println("La llista list no conte la paraula hola");
        }

        if (linkList.contains("hola")){
            System.out.println("La llista linklist conte la paraula hola");
        }
        else{
            System.out.println("La llista linklist conte la paraula hola");
        }
        
        if (list.contains("què tal?")){
            System.out.println("La llista list conte la paraula què tal?");
        }
        else{
            System.out.println("La llista list no conte la paraula què tal?");
        }
        
        if (linkList.contains("què tal?")){
            System.out.println("La llista linkList conte la paraula què tal?");
        }
        else{
            System.out.println("La llista linkList no conte la paraula què tal?");
        }
        
        //size
        System.out.println("El tamany de la llista list es de "+list.size());
        System.out.println("El tamany de la llista linkList es de "+linkList.size());


        //Buidem la llista linkList:
        linkList.clear();
        System.out.println("El tamany de la llista list es de "+list.size());
        System.out.println("El tamany de la llista linkList es de "+linkList.size());
        
        //empty
        if (list.isEmpty()){
            System.out.println("La llista list està buida");
        }
        else{
            System.out.println("La llista list no està buida");
        }
        
        if (linkList.isEmpty()){
            System.out.println("La llista linkList està buida");
        }
        else{
            System.out.println("La llista linkList no està buida");
        }
        
        
        //recorrem amb for:
        System.out.println("recorrem amb for:");
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }

        //recorrem amb for..loop:
        System.out.println("recorrem amb for..loop:");
        for (Object s : list) {
            System.out.println(s);
        }

        //Iteradors:
        System.out.println("recorrem amb iterador");
        Iterator<Object> it = list.iterator();
        while (it.hasNext()) {
            Object c = it.next();
            System.out.println(c);
        }

        //recorrem amb forEach
        System.out.println("recorrem amb forEach");
        list.forEach(System.out::println);

        //recorrem amb stream
        System.out.println("recorrem amb stream i filtrem per les paraules que siguin hola");        
        list.stream()
                .filter(o -> o == "hola")
                .forEach(System.out::println);

        
        
        
        List<Cotxe> cotxes = new ArrayList<Cotxe>(); 
        
        cotxes.add(new Cotxe("Renault","Clio",1500,18000));
        cotxes.add(new Cotxe("Renault","Scenic",1700,20000));        
        cotxes.add(new Cotxe("Renault","kangoo",1400,19000));
        
        Cotxe cotxe1 = new Cotxe("Renault","Clio",1600,18500);
        
        Iterator<Cotxe> cotxeIt = cotxes.iterator();
        while (cotxeIt.hasNext()) {
            Cotxe c = cotxeIt.next();
            if (c.equals(cotxe1)){
                System.out.println("Trobat el cotxe "+cotxe1.getMarca()+" "+cotxe1.getModel());
            }
        }
        List<Cotxe> cotxesDesordenats = cotxes; 
        System.out.println("Abans d'ordenar");
        Iterator<Cotxe> cotxeIt2 = cotxes.iterator();
        while (cotxeIt2.hasNext()) {
            Cotxe c = cotxeIt2.next();
            System.out.println("Cotxe: "+c.getMarca()+" "+c.getModel()+" preu:"+c.getPreu());
        }
        System.out.println("Després d'ordenar:");
        cotxes.sort((u1, u2) -> u1.getPreu() - u2.getPreu());
        Iterator<Cotxe> cotxeIt3 = cotxes.iterator();
        while (cotxeIt3.hasNext()) {
            Cotxe c = cotxeIt3.next();
            System.out.println("Cotxe: "+c.getMarca()+" "+c.getModel()+" preu:"+c.getPreu());
        }
         
        List<Cotxe> cotxes2 = new ArrayList<Cotxe>();         
        cotxes2.add(new Cotxe("Renault","Clio",1500,18000));
        cotxes2.add(new Cotxe("Renault","Scenic",1700,20000));        
        cotxes2.add(new Cotxe("Renault","kangoo",1400,19000));
        
        System.out.println("Abans d'ordenar");
        Iterator<Cotxe> cotxeIt4 = cotxes2.iterator();
        while (cotxeIt4.hasNext()) {
            Cotxe c = cotxeIt4.next();
            System.out.println("Cotxe: "+c.getMarca()+" "+c.getModel()+" preu:"+c.getPreu());
        }
        System.out.println("Després d'ordenar:");
        Collections.sort(cotxes2);
        Iterator<Cotxe> cotxeIt5 = cotxes2.iterator();
        while (cotxeIt5.hasNext()) {
            Cotxe c = cotxeIt5.next();
            System.out.println("Cotxe: "+c.getMarca()+" "+c.getModel()+" preu:"+c.getPreu());
        }
    }
    
    
    
}
