/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.jm.coleccions;

import java.util.Objects;

public class Cotxe implements Comparable<Cotxe>{
    private String marca;
    private String model;
    private int cilindrada;
    private int preu;

    public Cotxe(String marca, String model, int cilindrada, int preu) {
        this.marca = marca;
        this.model = model;
        this.cilindrada = cilindrada;
        this.preu = preu;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Cotxe other = (Cotxe) obj;
        if (!Objects.equals(this.marca, other.marca)) {
            return false;
        }
        if (!Objects.equals(this.model, other.model)) {
            return false;
        }
        return true;
    }

    @Override
    public int compareTo(Cotxe c) {
        return this.preu - c.getPreu();
    }
    
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getCilindrada() {
        return cilindrada;
    }

    public void setCilindrada(int cilindrada) {
        this.cilindrada = cilindrada;
    }

    public int getPreu() {
        return preu;
    }

    public void setPreu(int preu) {
        this.preu = preu;
    }
    
}
